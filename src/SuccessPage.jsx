import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/header';


import './SuccessPage.css';

const SuccessPage = () => {
  const location = useLocation();
  const parseQueryString = (queryString) => {
    return queryString.substring(1).split('&').reduce((acc, param) => {
      const [key, value] = param.split('=');
      acc[decodeURIComponent(key)] = decodeURIComponent(value);
      return acc;
    }, {});
  };
  
  const queryParams = parseQueryString(location.search);


  return (
    <>
    <Header />
<div className="success-page">

      <div className="success-content">
        <h2>Booking Successful!</h2>
        <p>Thank you for your booking.</p>
        <div className="success-buttons">
          <a href="/" className="success-button home-button">GO HOME</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default SuccessPage;
