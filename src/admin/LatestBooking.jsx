import React from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Box } from '@mui/material';

const statusColors = {
  Pending: 'warning',
  Confirmed: 'success',
  Refunded: 'error'
};

const LatestBookings = ({ data }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Latest Bookings
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Booking ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((booking) => (
              <TableRow key={booking.bookingId}>
                <TableCell>{booking.bookingId}</TableCell>
                <TableCell>{booking.customer}</TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell>
                  <Chip label={booking.status} color={statusColors[booking.status]} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ textAlign: 'right', marginTop: 2 }}>
        <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
          View all
        </Typography>
      </Box>
    </Paper>
  );
};

export default LatestBookings;
