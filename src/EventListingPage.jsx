import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Header from './components/header';
import Footer from './components/Footer';
import './EventListingPage.css';
import FilterComponent from './components/FilterComponent';
import EventCard from './components/EventCard';
import { filterOptions } from './const/const';
import { NoResultsFoundIcon } from './icons/Icons';

const EventListingPage = ({ type }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const city = sessionStorage.getItem('selectedCity') || 'Toronto';

  const [selectedFilters, setSelectedFilters] = useState({});
  const [events, setEvents] = useState([]);
  const recommendations = useSelector((state) => state.booking.recommendations);
  const [isRecommendation, setIsRecommendation] = useState(false);

  const formatQueryParams = (filters) => {
    const formattedParams = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      const lowerCaseKey = key.toLowerCase();
      const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      formattedParams.append(lowerCaseKey, capitalizedValue);
    });

    return formattedParams.toString();
  };

  useEffect(() => {
    if (recommendations.length > 0) {
      setEvents(recommendations);
      setIsRecommendation(true);
    } else {
      const fetchEvents = async () => {
        try {
          const queryParams = formatQueryParams(selectedFilters);
          const response = await axios.get(`http://localhost:8000/api/${type}?city=${city}&${queryParams}`);
          setEvents(response.data);
        } catch (error) {
          console.error('Error fetching events:', error);
        }
      };
      fetchEvents();
      setIsRecommendation(false);
    }
  }, [selectedFilters, type, recommendations]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filters = {};
    for (let param of params) {
      filters[param[0]] = param[1];
    }
    setSelectedFilters(filters);
  }, [location.search]);

  const handleFilterChange = (filterName, filterValue) => {
    const newFilters = { ...selectedFilters, [filterName]: filterValue };
    setSelectedFilters(newFilters);
    navigate(`?${new URLSearchParams(newFilters).toString()}`);
  };

  const handleFilterRemove = (filterName) => {
    const { [filterName]: _, ...newFilters } = selectedFilters;
    setSelectedFilters(newFilters);
    navigate(`?${new URLSearchParams(newFilters).toString()}`);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleBookClick = (id) => {
    navigate(`/${type}/detail/${id}`);
  };

  return (
    <div className="event-listing-page-container">
      <Header />
      <div className="divider">
        {!isRecommendation && (
          <div className="filters-container">
            <h4>Filters</h4>
            {filterOptions[type] && Object.keys(filterOptions[type]).map((filterName) => (
              <FilterComponent
                key={filterName}
                filterName={filterName}
                filterValues={filterOptions[type][filterName]}
                onFilterChange={handleFilterChange}
              />
            ))}
          </div>
        )}
        <div className="event-listing">
          {!isRecommendation &&
            <h2>{events.length} {capitalizeFirstLetter(type)} results in {city}</h2>
          }
          {isRecommendation && <h3>Recommended based on your preferences</h3>}
          {!isRecommendation &&
            <div className="applied-filters">
              {Object.keys(selectedFilters).map((filterName) => (
                <span key={filterName} className="filter-tag" onClick={() => handleFilterRemove(filterName)}>
                  {selectedFilters[filterName]}
                </span>
              ))}

            </div>}
          <div className="events-container">
            {events.map(event => (
              <EventCard key={event._id} event={event} onBookClick={() => handleBookClick(event._id)} />
            ))}
            {events.length === 0 && (
              <div className="no-results-container">
                <div>
                  <NoResultsFoundIcon />
                  <div className="no-results-text">No results found</div>
                </div>
                <div className='hiddenitem'>
                  <NoResultsFoundIcon />
                  <div className="no-results-text">No results found</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventListingPage;
