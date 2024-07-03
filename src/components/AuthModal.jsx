import React, { useState } from 'react';
import { Modal, Box, Button, TextField, Typography, IconButton, CircularProgress, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../firebase';
import './AuthModal.css';

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
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const resetForm = () => {
        setEmail('');
        setPassword('');
        setLoading(false);
        setError('');
        setSuccess('');
    };

    const handleGoogleSignIn = async () => {
        setLoading(true);
        setError('');
        try {
            const result = await signInWithPopup(auth, googleProvider);
            sessionStorage.setItem('userId', result.user.uid);
            setSuccess('Successfully signed in with Google');
            resetForm();
            handleClose();
        } catch (error) {
            setError('Failed to sign in with Google');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleEmailSignIn = async () => {
        setLoading(true);
        setError('');
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            sessionStorage.setItem('userId', userCredential.user.uid);
            setSuccess('Successfully signed in');
            resetForm();
            handleClose();
        } catch (error) {
            setError('Failed to sign in. Please check your email and password.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleEmailSignUp = async () => {
        if (!email || !password) {
            setError('Please enter both email and password');
            return;
        }
        setLoading(true);
        setError('');
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            sessionStorage.setItem('userId', userCredential.user.uid);
            setSuccess('Successfully signed up');
            resetForm();
            handleClose();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                handleEmailSignIn();
            } else if (error.code === 'auth/invalid-email') {
                setError('Invalid email address');
            } else if (error.code === 'auth/weak-password') {
                setError('Password should be at least 6 characters');
            } else {
                setError('Failed to sign up');
            }
            console.error(error);
        } finally {
            setLoading(false);
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
                {error && <Alert severity="error">{error}</Alert>}
                {success && <Alert severity="success">{success}</Alert>}
                <Button 
                    onClick={handleGoogleSignIn} 
                    fullWidth 
                    className="modal-button" 
                    startIcon={<img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />}
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} /> : 'Continue with Google'}
                </Button>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="modal-textfield"
                    disabled={loading}
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
                    disabled={loading}
                />
                <Button onClick={handleEmailSignUp} className="modal-button" disabled={loading}>
                    {loading ? <CircularProgress size={24} /> : 'Sign Up with Email'}
                </Button>
                <Typography variant="body2" className="terms-privacy">
                    I agree to the <a href="/terms">Terms & Conditions</a> & <a href="/privacy">Privacy Policy</a>
                </Typography>
            </Box>
        </Modal>
    );
}
