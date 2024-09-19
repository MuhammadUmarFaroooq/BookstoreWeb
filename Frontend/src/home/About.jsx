import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
    <Navbar/>
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-lg md:text-xl mb-6">
            Welcome to our Bookstore! We are passionate about books and aim to provide you with a wide range of titles to choose from. Whether you're looking for the latest bestsellers, classic literature, or niche genres, we have something for everyone. Our mission is to promote the love of reading by making it accessible and enjoyable for all.
          </p>
          <p className="text-lg md:text-xl mb-6">
            Our bookstore was founded by a team of book enthusiasts who believe in the power of storytelling to change the world. We work hard to bring you carefully curated collections, insightful reviews, and personalized recommendations.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
