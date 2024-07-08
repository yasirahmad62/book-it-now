import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import EventListingPage from "./EventListingPage";
import HomePage from "./HomePage";
import EventBookingPage from "./DetailPage";
import FaqPage from "./FaqPage";
import ContactUsPage from "./ContactUsPage";
import BookingPage from "./BookingPage";
import CheckoutPage from "./CheckoutPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/events"
              element={<EventListingPage type={"events"} />}
            />
            <Route
              path="/sports"
              element={<EventListingPage type={"sports"} />}
            />
            <Route
              path="/movies"
              element={<EventListingPage type={"movies"} />}
            />
            <Route path="/events/detail/:id" element={<EventBookingPage type={"events"} />} />
            <Route path="/sports/detail/:id" element={<EventBookingPage type={"sports"} />} />
            <Route path="/movies/detail/:id" element={<EventBookingPage type={"movies"} />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/bookings/:id" element={<BookingPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
