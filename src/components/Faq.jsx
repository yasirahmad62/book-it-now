import React, { useState } from 'react';
import './Faq.css';
import { Button } from '@mui/material';

const Faq = () => {
   const faqData = [
    { type: 'All', question: 'How can I book tickets for an event?', answer: 'You can book tickets through our website or mobile app.' },
    { type: 'All', question: 'What is the refund policy?', answer: 'Refunds are available up to 24 hours before the event start time.' },
    { type: 'All', question: 'Are there any discounts available?', answer: 'Yes, we offer discounts for students and early bird bookings.' },
    { type: 'All', question: 'Can I transfer my ticket to someone else?', answer: 'Yes, tickets are transferable. Please contact support for assistance.' },
    { type: 'All', question: 'What happens if an event is canceled?', answer: 'If an event is canceled, you will receive a full refund.' },
    { type: 'Sports', question: 'Are there any age restrictions for sports events?', answer: 'Some sports events have age restrictions. Please check the event details for more information.' },
    { type: 'Sports', question: 'Can I book multiple tickets for a sports event?', answer: 'Yes, you can book multiple tickets for a sports event in a single transaction.' },
    { type: 'Sports', question: 'What should I do if I lose my sports event ticket?', answer: 'Please contact support, and we will reissue your sports event ticket.' },
    { type: 'Sports', question: 'Is there a mobile app for booking sports event tickets?', answer: 'Yes, our mobile app is available on both iOS and Android.' },
    { type: 'Sports', question: 'Are there any group discounts for sports events?', answer: 'Yes, we offer group discounts for large sports event bookings.' },
    { type: 'Events', question: 'How can I contact customer support for an event?', answer: 'You can reach our customer support via email or phone.' },
    { type: 'Events', question: 'Can I change my seat after booking an event?', answer: 'Seat changes are subject to availability. Please contact support for assistance.' },
    { type: 'Events', question: 'Is there a mobile app for booking event tickets?', answer: 'Yes, our mobile app is available on both iOS and Android.' },
    { type: 'Events', question: 'Can I get a printed ticket for an event?', answer: 'Yes, you can print your ticket from the confirmation email.' },
    { type: 'Events', question: 'Are there any VIP tickets available for events?', answer: 'Yes, VIP tickets are available for select events.' },
    { type: 'Movies', question: 'How early should I arrive for a movie?', answer: 'We recommend arriving at least 30 minutes before the movie start time.' },
    { type: 'Movies', question: 'Can I get a printed movie ticket?', answer: 'Yes, you can print your movie ticket from the confirmation email.' },
    { type: 'Movies', question: 'Are there any VIP movie tickets available?', answer: 'Yes, VIP tickets are available for select movies.' },
    { type: 'Movies', question: 'What should I do if I lose my movie ticket?', answer: 'Please contact support, and we will reissue your movie ticket.' },
    { type: 'Movies', question: 'Are there any group discounts for movies?', answer: 'Yes, we offer group discounts for large movie bookings.' },
    { type: 'All', question: 'Can I book tickets for events in different cities?', answer: 'Yes, you can book tickets for events in Toronto, Calgary, Vancouver, and Montreal.' },
    { type: 'All', question: 'How do I cancel my booking?', answer: 'You can cancel your booking through our website or mobile app.' },
    { type: 'All', question: 'What payment methods are accepted?', answer: 'We accept credit cards, debit cards, and PayPal.' },
    { type: 'All', question: 'Can I book tickets for multiple events in one go?', answer: 'Yes, you can add multiple events to your cart and book them together.' },
    { type: 'All', question: 'How do I know if my booking is confirmed?', answer: 'You will receive a confirmation email and SMS after your booking is successful.' },
  ];
  
  const [showAll, setShowAll] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleFilterClick = (type) => {
    setSelectedFilter(type);
    setShowAll(false); // Reset to show only the first 5 when changing filter
  };

  const filteredFaqs = selectedFilter === 'All' ? faqData : faqData.filter(faq => faq.type === selectedFilter);

  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      <div className="rating-filter">
        {['All', 'Sports', 'Events', 'Movies'].map((type) => (
          <button
            key={type}
            className={`rating-category ${selectedFilter === type ? 'selected' : ''}`}
            onClick={() => handleFilterClick(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <ul className="faq-list">
        {filteredFaqs.slice(0, showAll ? filteredFaqs.length : 5).map((faq, index) => (
          <li key={index} className="faq-item">
            <span className="faq-question">{faq.question}</span>
            <span className="faq-answer">{faq.answer}</span>
          </li>
        ))}
      </ul>
      {filteredFaqs.length > 5 && (
        <Button variant="contained" onClick={toggleShowAll} className="faq-toggle-button">
          {showAll ? 'Show Less FAQs' : 'Read More FAQs'}
        </Button>
      )}
    </div>
  );
};

export default Faq;
