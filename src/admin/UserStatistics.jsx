import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import './EventStatistics.css';

const UserStatistics = ({ data }) => {
  return (
    <Paper elevation={3} className="paper">
      <Typography variant="h6" component="h2" className="typography-title">
        <GroupIcon className="icon" /> User Statistics
      </Typography>
      <Typography className="typography-content">Total Users: {data.totalUsers}</Typography>
      <Divider className="dividers" />
      <Typography className="typography-subtitle"><PersonAddIcon className="icon" /> New Users:</Typography>
      <List>
        {data.newUsers.map((user, index) => (
          <ListItem key={index} className="list-item">
            <ListItemText primary={`${user.name} (${user.email})`} secondary={`Joined on ${user.signupDate}`} className="typography-content" />
          </ListItem>
        ))}
      </List>
      <Divider className="dividers" />
      <Typography className="typography-subtitle"><EmojiPeopleIcon className="icon" /> Most Active Users:</Typography>
      <List>
        {data.mostActiveUsers.map((user, index) => (
          <ListItem key={index} className="list-item">
            <ListItemText primary={`${user.name}`} secondary={`Total Bookings: ${user.totalBookings}`} className="typography-content" />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default UserStatistics;
