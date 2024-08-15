import React, { useState, useEffect } from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Box, Select, MenuItem, FormControl, InputLabel, CircularProgress, TextField } from '@mui/material';
import axios from 'axios';
import './EventStatistics.css';  // Adjusted to include .css extension

const EventList = ({ onEditEvent }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filter, setFilter] = useState('sports');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEvents(filter);
  }, [filter]);

  const fetchEvents = (eventType) => {
    setLoading(true);
    setError('');
    axios.get(`http://localhost:8000/api/${eventType}`)
      .then(response => {
        setEvents(response.data);
        setFilteredEvents(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching events');
        setLoading(false);
      });
  };

  const handleDelete = (eventId) => {
    setLoading(true);
    axios.delete(`http://localhost:8000/api/events/${eventId}`)
      .then(() => {
        const updatedEvents = events.filter(event => event._id !== eventId);
        setEvents(updatedEvents);
        setFilteredEvents(updatedEvents);
        setLoading(false);
      })
      .catch(error => {
        setError('Error deleting event');
        setLoading(false);
      });
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearch(value);
    const filtered = events.filter(event => event.title.toLowerCase().includes(value));
    setFilteredEvents(filtered);
  };

  return (
    <Paper elevation={3} className="paper">
      <Typography variant="h6" component="h2" gutterBottom>
        Event List
      </Typography>
      <FormControl variant="outlined" className="filter-select">
        <InputLabel>Filter by Type</InputLabel>
        <Select value={filter} onChange={handleFilterChange} label="Filter by Type">
          <MenuItem value="sports">Sports</MenuItem>
          <MenuItem value="movies">Movies</MenuItem>
          <MenuItem value="events">Events</MenuItem>
        </Select>
      </FormControl>
      <TextField 
        type="text" 
        placeholder="Search event..." 
        value={search}
        onChange={handleSearchChange}
        className="filter-input" 
        variant="outlined"
      />
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100px">
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow className="table-header">
                <TableCell className="table-cell">Image</TableCell>
                <TableCell className="table-cell">Title</TableCell>
                <TableCell className="table-cell">Type</TableCell>
                <TableCell className="table-cell">Rating</TableCell>
                <TableCell className="table-cell">Votes</TableCell>
                <TableCell className="table-cell">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEvents.map((event) => (
                <TableRow key={event._id}>
                  <TableCell className="table-cell-avatar">
                    <img src={event.imgSrc} alt={event.title} className="avatar" />
                    <Typography>{event.title}</Typography>
                  </TableCell>
                  <TableCell className="table-cell">{event.title}</TableCell>
                  <TableCell className="table-cell">{event.event_type}</TableCell>
                  <TableCell className="table-cell">{event.rating}</TableCell>
                  <TableCell className="table-cell">{event.votes}</TableCell>
                  <TableCell className="table-cell table-actions">
                    <Button variant="contained" color="primary" onClick={() => onEditEvent(event._id)}>
                      Edit
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleDelete(event._id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
};

export default EventList;
