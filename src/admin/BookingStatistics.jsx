import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import CategoryIcon from '@mui/icons-material/Category';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import './EventStatistics.css';

const BookingStatistics = ({ data }) => {
  return (
    <Paper elevation={3} className="paper">
      <Typography variant="h6" component="h2" className="typography-title">
        <EventIcon className="icon" /> Booking Statistics
      </Typography>
      <Typography className="typography-content">Total Bookings: {data.totalBookings}</Typography>
      <Divider className="dividers" />
      <Typography className="typography-subtitle"><CategoryIcon className="icon" /> Bookings Per Category:</Typography>
      <List>
        {data.bookingsPerCategory.map((category, index) => (
          <ListItem key={index} className="list-item">
            <ListItemText primary={`${category.category}`} className="typography-content" />
            <ListItemText primary={`${category.count}`} className="typography-content" />
          </ListItem>
        ))}
      </List>
      <Divider className="dividers" />
      <Typography className="typography-subtitle"><RecentActorsIcon className="icon" /> Recent Bookings:</Typography>
      <List>
        {data.recentBookings.map((booking, index) => (
          <ListItem key={index} className="list-item">
            <ListItemText
              primary={`${booking.eventTitle} (${booking.category})`}
              secondary={`Booked by User ID: ${booking.userId} on ${booking.date}`}
              className="typography-content"
            />
          </ListItem>
        ))}
      </List>
      <Divider className="dividers" />
      <Typography className="typography-content"><AttachMoneyIcon className="icon" /> Total Revenue: ${data.totalRevenue}</Typography>
    </Paper>
  );
};

export default BookingStatistics;
