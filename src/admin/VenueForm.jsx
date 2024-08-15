import React, { useState, useEffect } from 'react';
import {
  TextField, Button, Select, MenuItem, FormControl, InputLabel, Box, Grid, Paper, Typography
} from '@mui/material';
import axios from 'axios';

const initialState = {
    event_type: 'sports',
    title: 'Test Event',
    rating: 4.5,
    votes: '1.2K',
    duration: '2h',
    releaseDate: '2024-12-01',
    genres: ['Baseball'],
    languages: ['English'],
    formats: ['Outdoor'],
    imgSrc: 'https://via.placeholder.com/150',
    bgImage: 'https://via.placeholder.com/150',
    description: 'This is a test event.',
    cast: [{ name: 'Test Player', role: 'Main Role' }],
    crew: [{ name: 'Test Manager', role: 'Manager' }],
    showtimes: { location: 'Test Location', time: '18:00', availableSeats: 100, seating_plan_id: 'test_001' },
    pricing: { currency: 'CAD', basePrice: 50, convenienceFee: 5, taxes: 7 },
    tickets: [{ type: 'Standard', price: 50, currency: 'CAD', availability: 'available' }]
  };

const EventForm = ({ eventId, onFormSubmit }) => {
  const [event, setEvent] = useState(initialState);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (eventId) {
      setIsEdit(true);
      axios.get(`http://localhost:8000/api/events/${eventId}`)
        .then(response => setEvent(response.data))
        .catch(error => console.error('Error fetching event data:', error));
    }
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      axios.put(`http://localhost:8000/api/events/${eventId}`, event)
        .then(response => {
          onFormSubmit(response.data);
          setEvent(initialState);
        })
        .catch(error => console.error('Error updating event:', error));
    } else {
      axios.post('http://localhost:8000/api/addEvents', event)
        .then(response => {
          onFormSubmit(response.data);
          setEvent(initialState);
        })
        .catch(error => console.error('Error creating event:', error));
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        {isEdit ? 'Edit Event' : 'Create Event'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <TextField
              fullWidth
              label="Event Type"
              name="event_type"
              value={event.event_type}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={event.title}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              fullWidth
              label="Rating"
              name="rating"
              type="number"
              value={event.rating}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              fullWidth
              label="Votes"
              name="votes"
              value={event.votes}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              fullWidth
              label="Duration"
              name="duration"
              value={event.duration}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              fullWidth
              label="Release Date"
              name="releaseDate"
              type="date"
              value={event.releaseDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Genres</InputLabel>
              <Select
                name="genres"
                multiple
                value={event.genres}
                onChange={(e) => setEvent({ ...event, genres: e.target.value })}
              >
                <MenuItem value="Baseball">Baseball</MenuItem>
                <MenuItem value="MLB">MLB</MenuItem>
                <MenuItem value="Basketball">Basketball</MenuItem>
                <MenuItem value="NBA">NBA</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Languages</InputLabel>
              <Select
                name="languages"
                multiple
                value={event.languages}
                onChange={(e) => setEvent({ ...event, languages: e.target.value })}
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Spanish">Spanish</MenuItem>

              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Formats</InputLabel>
              <Select
                name="formats"
                multiple
                value={event.formats}
                onChange={(e) => setEvent({ ...event, formats: e.target.value })}
              >
                <MenuItem value="Indoor">Indoor</MenuItem>
                <MenuItem value="Outdoor">Outdoor</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              fullWidth
              label="Image URL"
              name="imgSrc"
              value={event.imgSrc}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              fullWidth
              label="Background Image URL"
              name="bgImage"
              value={event.bgImage}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={event.description}
              onChange={handleChange}
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              fullWidth
              label="Cast (comma separated)"
              name="cast"
              value={event.cast.map(c => `${c.name} (${c.role})`).join(', ')}
              onChange={(e) => setEvent({
                ...event,
                cast: e.target.value.split(',').map(c => {
                  const [name, role] = c.split(' (');
                  return { name: name.trim(), role: role.replace(')', '').trim() };
                })
              })}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              label="Crew (comma separated)"
              name="crew"
              value={event.crew.map(c => `${c.name} (${c.role})`).join(', ')}
              onChange={(e) => setEvent({
                ...event,
                crew: e.target.value.split(',').map(c => {
                  const [name, role] = c.split(' (');
                  return { name: name.trim(), role: role.replace(')', '').trim() };
                })
              })}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              fullWidth
              label="Showtime Location"
              name="showtimes.location"
              value={event.showtimes.location}
              onChange={(e) => setEvent({
                ...event,
                showtimes: { ...event.showtimes, location: e.target.value }
              })}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              fullWidth
              label="Showtime Time"
              name="showtimes.time"
              type="time"
              value={event.showtimes.time}
              onChange={(e) => setEvent({
                ...event,
                showtimes: { ...event.showtimes, time: e.target.value }
              })}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              fullWidth
              label="Available Seats"
              name="showtimes.availableSeats"
              type="number"
              value={event.showtimes.availableSeats}
              onChange={(e) => setEvent({
                ...event,
                showtimes: { ...event.showtimes, availableSeats: e.target.value }
              })}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              fullWidth
              label="Seating Plan ID"
              name="showtimes.seating_plan_id"
              value={event.showtimes.seating_plan_id}
              onChange={(e) => setEvent({
                ...event,
                showtimes: { ...event.showtimes, seating_plan_id: e.target.value }
              })}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <TextField
              fullWidth
              label="Base Price"
              name="pricing.basePrice"
              type="number"
              value={event.pricing.basePrice}
              onChange={(e) => setEvent({
                ...event,
                pricing: { ...event.pricing, basePrice: e.target.value }
              })}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <TextField
              fullWidth
              label="Convenience Fee"
              name="pricing.convenienceFee"
              type="number"
              value={event.pricing.convenienceFee}
              onChange={(e) => setEvent({
                ...event,
                pricing: { ...event.pricing, convenienceFee: e.target.value }
              })}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <TextField
              fullWidth
              label="Taxes"
              name="pricing.taxes"
              type="number"
              value={event.pricing.taxes}
              onChange={(e) => setEvent({
                ...event,
                pricing: { ...event.pricing, taxes: e.target.value }
              })}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              fullWidth
              label="Ticket Type"
              name="tickets.type"
              value={event.tickets.type}
              onChange={(e) => setEvent({
                ...event,
                tickets: [{ ...event.tickets[0], type: e.target.value }]
              })}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              fullWidth
              label="Ticket Price"
              name="tickets.price"
              type="number"
              value={event.tickets.price}
              onChange={(e) => setEvent({
                ...event,
                tickets: [{ ...event.tickets[0], price: e.target.value }]
              })}
            />
          </Grid>
          <Grid item xs={6}>
            <Button type="submit" variant="contained" color="primary">
              {isEdit ? 'Update Event' : 'Create Event'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default EventForm;
