import React, { useState } from 'react';
import { Container, Grid, Box } from '@mui/material';
import EventForm from './EventForm';
import EventList from './EventList';
import './EventManagement.css';
import Sidebar from './Sidebar';

const EventManagementPage = () => {
  const [selectedEventId, setSelectedEventId] = useState(null);

  const handleEditEvent = (eventId) => {
    setSelectedEventId(eventId);
  };

  const handleFormSubmit = () => {
    setSelectedEventId(null); // Reset form after submission
  };

  return (
    
        <Box sx={{ display: 'flex' }}>
    <Sidebar/>
    <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#f4f6f8' }}>
    <Container maxWidth="lg" className="container-admin">
      <Grid container spacing={3}>
        <div className='eventformcontainer'>
          <EventForm eventId={selectedEventId} onFormSubmit={handleFormSubmit} />
          </div>
        
          <EventList onEditEvent={handleEditEvent} />
        
      </Grid>
    </Container>
    </Box>
    </Box>
    
  );
};

export default EventManagementPage;
