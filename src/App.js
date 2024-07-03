import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EventListingPage from './EventListingPage';
import HomePage from './HomePage';
import EventBookingPage from './DetailPage';
import FaqPage from "./FaqPage"


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventListingPage />} />
          <Route path="/events/detail/:id" element={<EventBookingPage />} />
          <Route path='/faq' element={<FaqPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
