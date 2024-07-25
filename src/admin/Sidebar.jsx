import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { Edit, SupervisedUserCircleOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1c2536',
          color: '#ffffff'
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {['Overview', 'Roles', 'Edit', 'Users'].map((text, index) => (
          <ListItem 
            button 
            key={text} 
            onClick={() => {
              if (text === 'Edit') handleNavigation('/admin/edit');
              if (text === 'Users') handleNavigation('/admin/user');
              if (text === 'Roles') handleNavigation('/admin/roles');
              if (text === 'Overview') handleNavigation('/admin/');
            }}
          >
            <ListItemIcon sx={{ color: '#ffffff' }}>
              {index === 0 && <DashboardIcon />}
              {index === 1 && <PeopleIcon />}
              {index === 2 && <Edit />}
              {index === 3 && <SupervisedUserCircleOutlined />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
