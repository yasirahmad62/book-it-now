import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./components/header.jsx";
import HeroCarousel from './components/HeroCarousel.jsx';
import Footer from './components/Footer';
import './DetailPage.css';
import RatingsSection from './components/RatingsSection.jsx';

const DetailPage = () => {
  const navigate = useNavigate();

  const movieDetails = {
    title: "Bad Boys: Ride or Die",
    rating: 8.6,
    votes: "19.6K",
    duration: "1h 57m",
    releaseDate: "6 Jun, 2024",
    genres: ["Action", "Adventure", "Comedy"],
    languages: ["English", "Hindi", "French", "Spanish"],
    formats: ["2D", "ICE", "MX4D", "4DX", "2D SCREEN X", "IMAX 2D"],
    imgSrc: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bad-boys-ride-or-die-et00383487-1719560098.jpg",
    bgImage: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/bad-boys-ride-or-die-et00383487-1719560098.jpg",
  };
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

  return (
    <div>
      <Header />
      <section className="detail-banner" style={{ backgroundImage: `linear-gradient(90deg, rgba(26, 26, 26, 1) 24.97%, rgba(26, 26, 26, 1) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgba(26, 26, 26, 1) 100%), url(${movieDetails.bgImage})` }}>
        <div className="banner-content">
          <div className="movie-thumbnail">
            <img src={movieDetails.imgSrc} alt={movieDetails.title} />
          </div>
          <div className="movie-info">
            <h1>{movieDetails.title}</h1>
            <div className="rating">
              <svg width="24" height="24">
                <use href="/chunks/icons/common-icons-d8988b3d.svg#icon-star"></use>
              </svg>
              <h5>{movieDetails.rating}/10</h5>
              <h6>({movieDetails.votes} Votes)</h6>
            </div>
            <div className="additional-info">
              <div className="formats">
                {movieDetails.formats.map((format, index) => (
                  <React.Fragment key={index}>
                    <a href="#">{format}</a>
                    {index < movieDetails.formats.length - 1 && <span>, </span>}
                  </React.Fragment>
                ))}
              </div>
              <div className="languages">
                {movieDetails.languages.map((language, index) => (
                  <React.Fragment key={index}>
                    <a href="#">{language}</a>
                    {index < movieDetails.languages.length - 1 && <span>, </span>}
                  </React.Fragment>
                ))}
              </div>
              <div className="details">
                <span>{movieDetails.duration}</span>
                <span> • </span>
                {movieDetails.genres.map((genre, index) => (
                  <React.Fragment key={index}>
                    <a href="#">{genre}</a>
                    {index < movieDetails.genres.length - 1 && <span>, </span>}
                  </React.Fragment>
                ))}
                <span> • </span>
                <span>{movieDetails.releaseDate}</span>
              </div>
            </div>
            <button className="book-tickets">Book tickets</button>
          </div>
        </div>
      </section>
      <div className='detailPageContainer'>
        <div >
          <span class="event-description__EventDescriptionContainer-sc-o4g232-1 gHdeCC"><h2 class="event-description__Title-sc-o4g232-2 btsbpT">About the movie</h2><div class="event-description__DescriptionContainer-sc-o4g232-3 gSmoFT"><span>The world`s favorite Bad Boys are back with their iconic mix of edge-of-your-seat action and outrageous comedy but this time with a twist: Miami`s finest are now on the run. </span></div></span>
          <hr />
        </div>
        <div >
          <span class="event-description__EventDescriptionContainer-sc-o4g232-1 gHdeCC"><h2 class="event-description__Title-sc-o4g232-2 btsbpT">Ratings & Reviews</h2>
            </span>
        </div>
        <RatingsSection/>
        <div className="heroContainer">
          <HeroCarousel sections={premier} subHeading={""} title={"Related Movies"} />
          <div className='bgHero'>
            <HeroCarousel sections={section} subHeading={""} title={"People also like"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPage;