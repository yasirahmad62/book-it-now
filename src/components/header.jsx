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
import { alpha } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FaHeart } from 'react-icons/fa';  // Import the FaHeart icon from react-icons
import CitySelector from './CitySelector.jsx';
import './header.css';
import logo from "../icons/logobg.png";
import TabHeader from './TabHeader.jsx';

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
    color: '#ffffff',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    fontFamily: 'Netflix Sans, Arial, sans-serif',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      fontSize: '1rem',
      [theme.breakpoints.up('md')]: {
        width: '30ch',
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

function Header({ isLoggedIn, onadmin }) {
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [citySelectorOpen, setCitySelectorOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState('Toronto');
    const [recentSearches, setRecentSearches] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
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

        // Retrieve recent searches from session storage
        const searches = JSON.parse(sessionStorage.getItem('recentSearches')) || [];
        setRecentSearches(searches);
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

    const handleSearch = (searchTerm) => {
        // Call OMDB API with the search term
        fetch(`https://www.omdbapi.com/?apikey=5e2f39cc&t=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === "True") {
                    // Save the search term to session storage
                    let updatedSearches = [searchTerm];

                    // Get the current recent searches from session storage
                    const currentSearches = JSON.parse(sessionStorage.getItem('recentSearches')) || [];

                    // Check if the search term is already in the recent searches
                    if (!currentSearches.includes(searchTerm)) {
                        updatedSearches = [searchTerm, ...currentSearches.slice(0, 1)];
                    }

                    // Update the session storage with the new recent searches (max 2)
                    sessionStorage.setItem('recentSearches', JSON.stringify(updatedSearches));

                    // Update the state with the new recent searches
                    setRecentSearches(updatedSearches);
                    setShowDropdown(false);

                    // Navigate to the directory page with the imdbID
                    navigate(`/movie/${data.imdbID}`);
                } else {
                    console.error("Movie not found!");
                }
            });
    };

    const handleRecentSearchClick = (searchTerm) => {
        handleSearch(searchTerm);
    };

    const handleFavouritesClick = () => {
        navigate('/favourites');
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
                            <SearchIconWrapper>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="8" stroke="#ffffff" strokeWidth="2"/>
          <line x1="16" y1="16" x2="21" y2="21" stroke="#ffffff" strokeWidth="2"/>
        </svg>
      </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search for Movie"
                                    inputProps={{ 'aria-label': 'search' }}
                                    className="styled-input-base"
                                    onFocus={() => setShowDropdown(true)}
                                    onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSearch(e.target.value);
                                        }
                                    }}
                                />
                                {showDropdown && (
                                    <div className="search-dropdown">
                                        <div className="recent-searches">
                                            <Typography variant="subtitle1">Recent Searches</Typography>
                                            <ul>
                                                {recentSearches.map((search, index) => (
                                                    <li key={index} onClick={() => handleRecentSearchClick(search)}>
                                                        <span className="search-icon">
                                                            <SearchIcon />
                                                        </span>
                                                        {search}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </Search>
                        </div>
                    }
                    <div className="headerRightSection">
                        <Button onClick={handleCitySelectorOpen} className="cityButton">
                            {selectedCity}
                        </Button>
                        <div className="header-actions">
                            <IconButton color="inherit" onClick={handleFavouritesClick}>
                                <FaHeart className="favourites-icon" />
                            </IconButton>
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
