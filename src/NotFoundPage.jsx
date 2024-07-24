import React from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import './NotFoundPage.css'; // Custom styles for the 404 page

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <Header />
      <div className="not-found-content">
        <img src="https://spn-mda.spinny.com/oth/aH6U7C0tRyOrTDGKXqlV6A/raw/file.gif" alt="404" className="not-found-image" />
        <p className="not-found-message">Sorry, the page you're looking for doesn't exist.</p>
        <p className="not-found-submessage">Take a U-turn to get back on the right track.</p>
        <div className="not-found-buttons">
          <a href="/" className="not-found-button home-button">GO HOME</a>
          <button onClick={() => window.location.reload()} className="not-found-button try-again-button">TRY AGAIN</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
