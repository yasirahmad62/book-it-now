import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AuthModal from './AuthModal';
import { auth } from '../firebase';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './header.css';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f2f2f2",
    fontFamily: "Work Sans",
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
    fontFamily: "Work Sans",
    color: '#757575',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#000000',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        fontFamily: "Work Sans",
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
        <AppBar position="static" className="header-appbar">
            <Toolbar className="header-toolbar">
                <div className="header-logo">
                    <Typography variant="h2" noWrap component="div">
                        <img src="logobg.png" alt="Logo" />
                    </Typography>
                </div>
                <div className="header-search">
                    <Search className="search">
                        <SearchIconWrapper className="search-icon-wrapper">
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search for Movies, Events, Plays, Sports and Activities"
                            inputProps={{ 'aria-label': 'search' }}
                            className="styled-input-base"
                        />
                    </Search>
                </div>
                <div className="headerRightSection">
                    <div className="header-location">
                        <Typography variant="h6" noWrap component="div" fontFamily={"Work Sans"}>
                            Toronto
                        </Typography>
                    </div>
                    <div className="header-actions">
                        {user ? (
                            <>
                                <IconButton color="inherit" onClick={handleMenu}>
                                    <AccountCircleIcon className="header-menu-icon" />
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
                            <Button
                                variant="contained"
                                className="header-signin-button"
                                onClick={handleOpen}
                            >
                                Sign In
                            </Button>
                        )}
                    </div>
                </div>
            </Toolbar>
            <AuthModal open={open} handleClose={handleClose} />
        </AppBar>
    );
}

export default Header;
