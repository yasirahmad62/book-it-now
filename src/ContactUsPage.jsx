import React from 'react';
import ContactUsForm from './components/ContactUsForm';
import ContactUsLocations from './components/ContactUsLocations';
import './ContactUsPage.css';
import Header from './components/header';
import HeroImage from './components/HeroImage';
import Footer from './components/Footer';
const images = [
    { src: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/Toronto_Food_Festival_Contact_Us.png?alt=media&token=748b2384-237c-43c7-b982-5c2cc38ccdfd", alt: 'Toronto' },

  ];
  
const ContactUsPage = () => {
    return (
        <div>
               <Header />
      <HeroImage images={images} hideArrows />   
        <div className="contact-us-page">
            <ContactUsForm />
            <ContactUsLocations />
        </div>
        <Footer/>
        </div>
    );
};

export default ContactUsPage;
