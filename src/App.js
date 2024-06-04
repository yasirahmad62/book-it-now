// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EventListingPage from './EventListingPage';
import EventBookingPage from './EventBookingPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EventListingPage />} />
          <Route path="/book/:id" element={<EventBookingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
