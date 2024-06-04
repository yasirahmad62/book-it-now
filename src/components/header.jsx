import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AuthModal from './AuthModal';
import { auth } from '../firebase';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

function Header() {
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        if (userId) {
            setUser(userId);
        }
    }, []);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        auth.signOut().then(() => {
            sessionStorage.removeItem('userId');
            setUser(null);
            handleMenuClose();
        });
    };

    return (
        <AppBar position="static" style={{ backgroundColor: '#000' }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <img src="logobg.png" alt="Logo" style={{ height: '30px' }} />
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search for Movies, Events, Plays, Sports and Activities"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <div style={{ flexGrow: 1 }}></div>
                <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' }, marginRight: 2, color: "#fff" }}>
                    Toronto
                </Typography>
                {user ? (
                    <>
                        <IconButton color="inherit" onClick={handleMenu}>
                            <AccountCircleIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={openMenu}
                            onClose={handleMenuClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem onClick={handleMenuClose}>User Profile</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </>
                ) : (
                    <Button variant="contained" color="secondary" style={{ marginRight: '10px', background: "#ff4081" }} onClick={handleOpen}>
                        Sign In
                    </Button>
                )}
            </Toolbar>
            <AuthModal open={open} handleClose={handleClose} />
        </AppBar>
    );
}

export default Header;
