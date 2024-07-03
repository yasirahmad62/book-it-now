import React from 'react';
import './Faq.css';
import HeroImage from './components/HeroImage.jsx';
import HeroCarousel from './components/HeroCarousel.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/header.jsx';
import Faq from './components/Faq.jsx';

const section = [
  {
    items: [
      { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMiBKdWw%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00399065-fmldyzmmrf-portrait.jpg", title: "Sunburn Arena Ft. Deadmau5", genre: "Concerts", rating: 45.9, ratingType: 'thumb', votes: "K Likes" },
      { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMiBKdW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00398652-encutaebbr-portrait.jpg", title: "TECHNOSPHERE", genre: "Concerts", rating: 7.2, ratingType: 'star', votes: "18K Votes" },
      { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMyBKdW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00394823-rthvgnnvkf-portrait.jpg", title: "NATIONAL MMA CHAMPIONSHIP", genre: "Sports", rating: 21.2, ratingType: 'thumb', votes: "K Likes" },
      { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA3IEp1bg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00365053-xgnelcqapc-portrait.jpg", title: "Nothing Makes Sense FT. VARUN GROVER", genre: "Stand up", rating: 9.1, ratingType: 'star', votes: "41.9K Votes" },
      { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyMCBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00376525-ckdxrxryjz-portrait.jpg", title: "Yacht cruise ", genre: "Jetty No 5", rating: 8.7, ratingType: 'star', votes: "3.2K Votes" }
    ]
  },
];

const premier = [
  {
    items: [
      { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00397579-hfnmhnhwae-portrait.jpg", title: "Ghostbusters: Frozen Empire", genre: "English", rating: null, ratingType: null, votes: null },
      { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00396946-talzlpzjea-portrait.jpg", title: "Skins Season 5", genre: "English, Hindi, Tamil, Telugu", rating: null, ratingType: null, votes: null },
      { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00380545-yvnvthlvjj-portrait.jpg", title: "Endeavour Series 4", genre: "English", rating: null, ratingType: null, votes: null },
      { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00399151-pllzggsjst-portrait.jpg", title: "Lunana: A Yak in the Classroom", genre: "Dzongkha", rating: null, ratingType: null, votes: null },
      { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00399062-jpggjbhrzz-portrait.jpg", title: "Green Border (Polish)", genre: "Polish", rating: null, ratingType: null, votes: null }
    ]
  }
];
const images = [
  { src: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/Bustling_Outdoor_Food_Festival_Toronto.png?alt=media&token=aad064b3-f64f-4596-b9aa-3202bf5044c7", alt: 'Toronto' },
  { src: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/Grand_Film_Premiere_Vancouver.png?alt=media&token=796968b4-0b40-4222-a8b0-05ae87de897e", alt: 'Vancouver' },
  { src: "https://firebasestorage.googleapis.com/v0/b/bookitnow-1959f.appspot.com/o/Lively_Music_Concert_Montreal.png?alt=media&token=8a34f749-ae3b-4d65-9f9d-8603f64d47e6", alt: 'Montreal' },
];


function FaqPage() {
  return (
    <div >
      <Header />
      <div className='faqContainer'>
      <HeroImage images={images}/>
  <div className="faq">
    <Faq />
  </div>
      <div className="heroContainer">
        <HeroCarousel sections={premier} subHeading={"Happening near you"} title={"Worth a watch"} />
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default FaqPage;
