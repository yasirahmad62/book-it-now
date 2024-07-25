import React from 'react';
import ContactUsForm from './components/ContactUsForm';
import './UserProfilePage.css';
import Header from './components/header';
import HeroImage from './components/HeroImage';
import Footer from './components/Footer';
import ProfileForm from './components/ProfileForm';
const images = [
    { src: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/Bustling_Outdoor_Food_Festival_Toronto.png?alt=media&token=aad064b3-f64f-4596-b9aa-3202bf5044c7", alt: 'Toronto' },
    { src: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/Grand_Film_Premiere_Vancouver.png?alt=media&token=796968b4-0b40-4222-a8b0-05ae87de897e", alt: 'Vancouver' },
    { src: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/Lively_Music_Concert_Montreal.png?alt=media&token=8a34f749-ae3b-4d65-9f9d-8603f64d47e6", alt: 'Montreal' },
  ];
  
  
const UserProfilePage = () => {
    return (
        <div>
               <Header />
      <HeroImage images={images} hideArrows />   
        <div className="profile-page">
            <ProfileForm />

        </div>
        <Footer/>
        </div>
    );
};

export default UserProfilePage;
