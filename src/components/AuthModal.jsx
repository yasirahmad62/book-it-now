// src/components/AuthModal.js

import React, { useState } from 'react';
import { Modal, Box, Button, TextField, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../firebase';
import './AuthModal.css'; // Import the CSS file for styling

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
    fontFamily: 'Work Sans, sans-serif',
};

export default function AuthModal({ open, handleClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            sessionStorage.setItem('userId', result.user.uid);
            handleClose();
        } catch (error) {
            console.error(error);
        }
    };

    const handleEmailSignIn = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            sessionStorage.setItem('userId', userCredential.user.uid);
            handleClose();
        } catch (error) {
            console.error(error);
            // Optionally, show an error message if login fails
        }
    };

    const handleEmailSignUp = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            sessionStorage.setItem('userId', userCredential.user.uid);
            handleClose();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                // If email is already in use, log the user in
                handleEmailSignIn();
            } else {
                console.error(error);
                // Optionally, show an error message if signup fails
            }
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <IconButton className="close-button" onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
                <Typography variant="h6" component="h2" className="modal-title">
                    Get Started
                </Typography>
                <Button onClick={handleGoogleSignIn} fullWidth variant="outlined" className="modal-button" startIcon={<img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />}>
                    Continue with Google
                </Button>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="modal-textfield"
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="modal-textfield"
                />
                <Button onClick={handleEmailSignUp} fullWidth variant="contained" color="primary" className="modal-button">
                    Sign Up with Email
                </Button>
                <Typography variant="body2" className="terms-privacy">
                    I agree to the <a href="/terms">Terms & Conditions</a> & <a href="/privacy">Privacy Policy</a>
                </Typography>
            </Box>
        </Modal>
    );
}
