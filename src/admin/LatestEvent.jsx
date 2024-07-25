import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Box, Avatar } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

const LatestEvents = ({ data }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Latest Events
      </Typography>
      <List>
        {data.map((event, index) => (
          <ListItem key={index} sx={{ borderBottom: '1px solid #f0f0f0' }}>
            <Avatar variant="rounded" sx={{ marginRight: 2 }}>
              <EventIcon />
            </Avatar>
            <ListItemText primary={event.name} secondary={`Updated ${event.date}`} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ textAlign: 'right', marginTop: 2 }}>
        <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
          View all
        </Typography>
      </Box>
    </Paper>
  );
};

export default LatestEvents;
