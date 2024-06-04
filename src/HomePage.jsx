import React from 'react';
import Header from "./components/header.jsx";
import './App.css';
import HeroCarousel from './components/HeroCarousel.jsx';
import Footer from './components/Footer.jsx';

const movies = [
  {
    image: 'https://picsum.photos/id/237/200/300',
    rating: '7.2/10',
    votes: '14.9K',
    title: 'Mr. & Mrs. Mahi',
    genre: 'Drama/Romantic/Sports'
  },
  {
    image: 'https://picsum.photos/id/27/200/300',
    rating: '9.1/10',
    votes: '40.5K',
    title: 'Srikanth',
    genre: 'Biography/Drama'
  },
  {
    image: 'https://picsum.photos/id/37/200/300',
    rating: '7.2/10',
    votes: '3.6K',
    title: 'Savi',
    genre: 'Action/Thriller'
  },
  {
    image: 'https://picsum.photos/id/7/200/300',
    rating: '8.1/10',
    votes: '10.8K',
    title: 'Chhota Bheem and the Curse of Damyaan (Hindi)',
    genre: 'Action/Adventure/Family/Fantasy'
  },
  {
    image: 'https://picsum.photos/id/2/200/300',
    rating: '8.7/10',
    votes: '2.4K',
    title: 'Jhamkudi',
    genre: 'Comedy/Horror/Mystery'
  },
  // Add more movie objects as needed
];

function HomePage() {
  return (
    <div>
      <Header />
      <div className="heroContainer">
        <HeroCarousel movies={movies} />
      </div>
      <Footer/>
    </div>
    
  );
}

export default HomePage;
