import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import './EventListingPage.css';
import FilterComponent from './components/FilterComponent';
import EventCard from './components/EventCard';
const premier = [
  {
    items: [
      { id: 6, image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICAyMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384010-fchlbmjvwh-portrait.jpg", title: "Event 1", genre: "Drama", rating: 9.2, ratingType: "star", votes: "22K Votes" },
      { id: 7, image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICA0MjguOUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00352941-qdafpgypxr-portrait.jpg", title: "Event 2", genre: "Action", rating: 8.9, ratingType: "star", votes: "428.9K Votes" },
      { id: 8, image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTEuMUsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386901-tdfghjbwms-portrait.jpg", title: "Event 3", genre: "Comedy", rating: 51.1, ratingType: "thumb", votes: "Likes" },
      { id: 9, image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-My4yLzEwICAxLjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00397455-txlhbpjdbd-portrait.jpg", title: "Event 4", genre: "Horror", rating: 3.2, ratingType: "star", votes: "1.7K Votes" },
      { id: 10, image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICA0NS41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379741-zgtxqvvxpq-portrait.jpg", title: "Event 5", genre: "Romance", rating: 8.5, ratingType: "star", votes: "45.5K Votes" },
      { id: 11, image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICA1MDAgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00369152-wzfqfpeccd-portrait.jpg", title: "Event 6", genre: "Sci-Fi", rating: 7.9, ratingType: "star", votes: "500 Votes" },
      { id: 1, image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00397579-hfnmhnhwae-portrait.jpg", title: "Ghostbusters: Frozen Empire", genre: "English", rating: null, ratingType: null, votes: null },
      { id: 2, image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00396946-talzlpzjea-portrait.jpg", title: "Skins Season 5", genre: "English, Hindi, Tamil, Telugu", rating: null, ratingType: null, votes: null },
      { id: 3, image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00380545-yvnvthlvjj-portrait.jpg", title: "Endeavour Series 4", genre: "English", rating: null, ratingType: null, votes: null },
      { id: 4, image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00399151-pllzggsjst-portrait.jpg", title: "Lunana: A Yak in the Classroom", genre: "Dzongkha", rating: null, ratingType: null, votes: null },
      { id: 5, image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00399062-jpggjbhrzz-portrait.jpg", title: "Green Border (Polish)", genre: "Polish", rating: null, ratingType: null, votes: null },
      { id: 6, image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICAyMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384010-fchlbmjvwh-portrait.jpg", title: "Event 1", genre: "Drama", rating: 9.2, ratingType: "star", votes: "22K Votes" },
      { id: 7, image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICA0MjguOUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00352941-qdafpgypxr-portrait.jpg", title: "Event 2", genre: "Action", rating: 8.9, ratingType: "star", votes: "428.9K Votes" },
      { id: 8, image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTEuMUsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386901-tdfghjbwms-portrait.jpg", title: "Event 3", genre: "Comedy", rating: 51.1, ratingType: "thumb", votes: "Likes" },
      { id: 9, image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-My4yLzEwICAxLjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00397455-txlhbpjdbd-portrait.jpg", title: "Event 4", genre: "Horror", rating: 3.2, ratingType: "star", votes: "1.7K Votes" },
      { id: 10, image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICA0NS41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379741-zgtxqvvxpq-portrait.jpg", title: "Event 5", genre: "Romance", rating: 8.5, ratingType: "star", votes: "45.5K Votes" },
      { id: 11, image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICA1MDAgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00369152-wzfqfpeccd-portrait.jpg", title: "Event 6", genre: "Sci-Fi", rating: 7.9, ratingType: "star", votes: "500 Votes" }
    ]
  }
];


const EventListingPage = () => {
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState({
    Languages: null,
    Genres: null,
    Format: null,
  });

  const handleFilterChange = (filterName, filterValue) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  const handleBookClick = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <div>
      <Header />
      <div className="divider">
        <div className="filters-container">
          <h4>Filters</h4>
          <FilterComponent
            filterName="Languages"
            filterValues={['English', 'French', 'Spanish', 'Urdu', 'English 7D', 'Hindi', 'Punjabi', 'Multi Language']}
            onFilterChange={(value) => handleFilterChange('Languages', value)}
          />
          <FilterComponent
            filterName="Genres"
            filterValues={['Action', 'Drama', 'Comedy', 'Thriller', 'Romance']}
            onFilterChange={(value) => handleFilterChange('Genres', value)}
          />
          <FilterComponent
            filterName="Format"
            filterValues={['2D', '3D', 'IMAX']}
            onFilterChange={(value) => handleFilterChange('Format', value)}
          />
        </div>
        <div className="event-listing-page">
          <h2>Movies in {sessionStorage.getItem('selectedCity')} </h2>
          <div className="events-container">
            {premier[0].items.map(event => (
              <EventCard key={event.id} event={event} onBookClick={handleBookClick} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventListingPage;
