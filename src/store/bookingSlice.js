import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDate: null,
  selectedTime: null,
  selectedSeats: [],
  movieDetails: null,
  selectedCity: sessionStorage.getItem('selectedCity') || '',
  selectedCategory: null,
  selectedSubcategory: null,
  selectedTimeFrame: null,
  recommendations: [], // Added this line to store recommendations
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
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setSubcategory(state, action) {
      state.selectedSubcategory = action.payload;
    },
    setTimeFrame(state, action) {
      state.selectedTimeFrame = action.payload;
    },
    setRecommendations(state, action) { // Added this reducer
      state.recommendations = action.payload;
    },
  },
});

export const { setDate, setTime, setSeats, setMovieDetails, setCity, setCategory, setSubcategory, setTimeFrame, setRecommendations } = bookingSlice.actions;
export default bookingSlice.reducer;
