import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDate: null,
  selectedTime: null,
  selectedSeats: [],
  movieDetails: null,
  selectedCity: sessionStorage.getItem('selectedCity') || '',
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setDate(state, action) {
      state.selectedDate = action.payload;
    },
    setTime(state, action) {
      state.selectedTime = action.payload;
    },
    setSeats(state, action) {
      state.selectedSeats = action.payload;
    },
    setMovieDetails(state, action) {
      state.movieDetails = action.payload;
    },
    setCity(state, action) {
      state.selectedCity = action.payload;
    },
  },
});

export const { setDate, setTime, setSeats, setMovieDetails, setCity } = bookingSlice.actions;
export default bookingSlice.reducer;
