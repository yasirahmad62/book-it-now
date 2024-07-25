import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import './EventStatistics.css';

const EventStatistics = ({ data }) => {
  return (
    <Paper elevation={3} className="paper">
      <Typography variant="h6" component="h2" className="typography-title">
        Event Statistics
      </Typography>
      <Typography className="typography-content">Total Events: {data.totalEvents}</Typography>
      <Divider className="dividers" />
      <Typography className="typography-subtitle">Events Per Category:</Typography>
      <List>
        {data.eventsPerCategory.map((category, index) => (
          <ListItem key={index} className="list-item">
            <ListItemText primary={`${category.category}`} className="typography-content" />
            <ListItemText primary={`${category.count}`} className="typography-content" />
          </ListItem>
        ))}
      </List>
      <Divider className="dividers" />
      <Typography className="typography-subtitle">Upcoming Events:</Typography>
      <List>
        {data.upcomingEvents.map((event, index) => (
          <ListItem key={index} className="list-item">
            <ListItemText 
              primary={`${event.title}`} 
              secondary={`${event.category}`} 
              className="typography-content" 
            />
            <ListItemText 
              primary={`${event.date}`} 
              className="typography-content" 
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default EventStatistics;
