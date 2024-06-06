import React from 'react';
import Header from "./components/header.jsx";
import './App.css';
import HeroCarousel from './components/HeroCarousel.jsx';
import Footer from './components/Footer.jsx';
const section = [
  {
    items: [
      { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NDYuOUsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00398936-nzrpycbwur-portrait.jpg", title: "Munjya", genre: "Comedy/Horror", rating: 45.9, ratingType: 'thumb', votes: "K Likes" },
      { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4yLzEwICAxOC4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00318249-lzmzmtrgcb-portrait.jpg", title: "Mr. & Mrs. Mahi", genre: "Drama/Romantic/Sports", rating: 7.2, ratingType: 'star', votes: "18K Votes" },
      { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MjEuM0sgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00383487-exxmngmmcf-portrait.jpg", title: "Bad Boys: Ride or Die", genre: "Action/Adventure/Comedy", rating: 21.2, ratingType: 'thumb', votes: "K Likes" },
      { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICA0MksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00354108-ytpuzjraud-portrait.jpg", title: "Srikanth", genre: "Biography/Drama", rating: 9.1, ratingType: 'star', votes: "41.9K Votes" },
      { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICAzLjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00395950-tgqqwnxmbj-portrait.jpg", title: "Jhamkudi", genre: "Comedy/Horror/Mystery", rating: 8.7, ratingType: 'star', votes: "3.2K Votes" }
    ]
  },
];

const premier=[  {

  items: [
    { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00397579-hfnmhnhwae-portrait.jpg", title: "Ghostbusters: Frozen Empire", genre: "English", rating: null, ratingType: null, votes: null },
    { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00396946-talzlpzjea-portrait.jpg", title: "Skins Season 5", genre: "English, Hindi, Tamil, Telugu", rating: null, ratingType: null, votes: null },
    { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00380545-yvnvthlvjj-portrait.jpg", title: "Endeavour Series 4", genre: "English", rating: null, ratingType: null, votes: null },
    { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00399151-pllzggsjst-portrait.jpg", title: "Lunana: A Yak in the Classroom", genre: "Dzongkha", rating: null, ratingType: null, votes: null },
    { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00399062-jpggjbhrzz-portrait.jpg", title: "Green Border (Polish)", genre: "Polish", rating: null, ratingType: null, votes: null }
  ]
}]

function HomePage() {
  return (
    <div>
      <Header />
      <div className="heroContainer"> 
      </div>
      <div className="heroContainer">
      <HeroCarousel sections={premier} subHeading={"Brand new releases every Friday"} title={"Upcoming Movies"}/>
      <div className='bgHero'>
      <HeroCarousel sections={section} subHeading={""} title={"Recommended Movies"}/>
      </div>
      </div>
      <Footer/>
    </div>
    
  );
}

export default HomePage;
