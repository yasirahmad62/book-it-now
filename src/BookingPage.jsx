import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { setDate, setTime, setSeats, setMovieDetails } from './store/bookingSlice';
import ShowtimesList from './components/ShowtimesList';
import MovieDetails from './components/MovieDetails';
import Header from './components/header';
import Footer from './components/Footer';
import SeatMap from './components/SeatMap';
import Modal from './components/Modal';
import './BookingPage.css';

const BookingPage = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [showtimes, setShowtimes] = useState([]);
  const [checkforUser, setUserStatus] = useState(true);
  const [selectedDate, setSelectedDateState] = useState(new Date());
  const [selectedTime, setSelectedTimeState] = useState(null);
  const [displayedDates, setDisplayedDates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieDetails, setMovieDetailsState] = useState(null);
  const storedCity = sessionStorage.getItem('selectedCity');
  const { id } = useParams();

  useEffect(() => {
    if (storedCity) {
      setCity(storedCity);
    }
    const userId = sessionStorage.getItem('userId');
    setUserStatus(!userId);

    axios.get(`http://localhost:8000/api/movies/${id}`)
      .then(response => {
        setMovieDetailsState(response.data);
        dispatch(setMovieDetails(response.data));
        const cityShowtimes = response.data.showtimes[storedCity] || [];
        setShowtimes(cityShowtimes);
      })
      .catch(error => console.error('Error fetching movie details:', error));
  }, [dispatch, storedCity]);

  useEffect(() => { 
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    setDisplayedDates(dates);
  }, []);

  const handlePrevClick = () => {
    setDisplayedDates(prevDates => {
      const newDates = prevDates.map(date => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() - 7);
        return newDate;
      });
      return newDates;
    });
  };

  const handleNextClick = () => {
    setDisplayedDates(prevDates => {
      const newDates = prevDates.map(date => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + 7);
        return newDate;
      });
      return newDates;
    });
  };

  const formatDate = (date) => {
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const handleTimeSelect = (time) => {
    setSelectedTimeState(time);
    setIsModalOpen(true);
  };

  const getFinalSelectedDateTime = () => {
    if (selectedDate && selectedTime) {
      const [hours, minutes, period] = selectedTime.match(/(\d+):(\d+) (\w+)/).slice(1);
      const adjustedHours = period === 'PM' ? parseInt(hours) + 12 : hours;
      const dateTimeString = `${selectedDate.toDateString()} ${adjustedHours}:${minutes}`;
      return new Date(dateTimeString);
    }
    return null;
  };

  useEffect(() => {
    dispatch(setDate(selectedDate));
  }, [selectedDate, dispatch]);

  useEffect(() => {
    dispatch(setTime(selectedTime));
  }, [selectedTime, dispatch]);

  const finalSelectedDateTime = getFinalSelectedDateTime();
  console.log(finalSelectedDateTime)
  const formattedDate = finalSelectedDateTime;
console.log(formattedDate,'dd')
  return (
    <div className="bookingContainer">
      <Header isLoggedIn={checkforUser} />
      {movieDetails && <MovieDetails movie={movieDetails} />}
      <div className="datePickerContainer">
        <div className="date-selector">
          <button onClick={handlePrevClick}>{'<'}</button>
          <div className="dates">
            {displayedDates.map((date, index) => (
              <div
                key={index}
                className={`date-item ${date.toDateString() === selectedDate.toDateString() ? 'selected' : ''}`}
                onClick={() => setSelectedDateState(date)}
              >
                <div>{date.toDateString().split(' ')[0]}</div>
                <div>{formatDate(date)}</div>
              </div>
            ))}
          </div>
          <button onClick={handleNextClick}>{'>'}</button>
        </div>
      </div>
      <div className="showInfo">
        <ShowtimesList showtimes={showtimes} onTimeSelect={handleTimeSelect} />
      </div>
      <Footer />
{movieDetails && 
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <SeatMap 
          onSelectSeats={(seats) => dispatch(setSeats(seats))} 
          pricing={showtimes} 
          eventDetails={{
            name: movieDetails.title,
            date: formattedDate,
            city: city
          }}
        />
      </Modal>
}
    </div>
  );
};

export default BookingPage;
