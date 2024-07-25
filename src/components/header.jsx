import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import AuthModal from './AuthModal.jsx';
import { auth } from '../firebase.js';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CitySelector from './CitySelector.jsx';
import './header.css';
import logo from "../icons/logobg.png";
import TabHeader from './TabHeader.jsx';

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

const CityButton = styled(Button)(({ theme }) => ({
    fontFamily: "Work Sans",
    textTransform: 'none',
    color: '#000',
    backgroundColor: '#f2f2f2',
    '&:hover': {
        backgroundColor: '#e0e0e0',
    },
}));

function Header({ isLoggedIn,onadmin }) {
    
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [citySelectorOpen, setCitySelectorOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState('Toronto');
    const openMenu = Boolean(anchorEl);
    const navigate = useNavigate();

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        if (userId) {
            setUser(userId);
        }
        if (isLoggedIn) {
            if (!userId) {
                setOpen(true);
            }
        }
    }, [user, isLoggedIn]);

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

    const handleCitySelectorOpen = () => setCitySelectorOpen(true);
    const handleCitySelectorClose = () => setCitySelectorOpen(false);
    const handleCitySelect = (city) => {
        setSelectedCity(city);
        handleCitySelectorClose();
    };

    const handleProfileClick = () => {
        navigate('/profile');
        handleMenuClose();
    };

    return (
        <>
            <AppBar position="static" className="header-appbar">
                <Toolbar className="header-toolbar">
                    <a href="/">
                        <div className="header-logo">
                            <Typography variant="h2" noWrap component="div">
                                <img src={logo} alt="Logo" />
                            </Typography>
                        </div>
                    </a>
                    {!onadmin &&
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
                    }
                    <div className="headerRightSection">
                        <Button onClick={handleCitySelectorOpen} className="cityButton">
                            {selectedCity}
                        </Button>
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
                                        <MenuItem onClick={handleProfileClick}>User Profile</MenuItem>
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
                <AuthModal open={open} handleClose={handleClose} showClose={isLoggedIn} />
                <CitySelector
                    open={citySelectorOpen}
                    onClose={handleCitySelectorClose}
                    onSelectCity={handleCitySelect}
                    selectedCity={selectedCity}
                />
            </AppBar>
            {!onadmin &&
            <TabHeader />}
        </>
    );
}

export default Header;
