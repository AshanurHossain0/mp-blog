import React from 'react';
import BlogImage from '../images/home.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-rajdhani">
      <header className="bg-blue-500 p-4">
        <h1 className="text-white text-4xl font-bold text-center">Welcome to MP-Blog</h1>
      </header>
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-yellow-900 text-lg md:text-2xl mb-4 text-center">
            Discover the World of Inspiration, Knowledge, and Creativity at MP-Blog.
          </p>
          <div className="md:flex md:justify-between">
            <div className="md:w-1/2 mb-4 md:mr-4">
              <img src={BlogImage} alt="Blog" className="rounded-lg w-full" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">Explore our Diverse Content</h2>
              <p className="text-gray-800 text-base md:text-lg">
                Delve into the depths of our articles on technology, science, art, literature,
                travel, health, and much more. Our team of passionate writers and experts curates
                engaging pieces that cater to all interests and age groups.
              </p>
              <h2 className="text-2xl font-bold mt-4 mb-2">Join our Community of Writers</h2>
              <p className="text-gray-800 text-base md:text-lg">
                We have a vibrant community of talented writers from around the globe. If you're a
                wordsmith with a story to tell or an opinion to share, join us and be part of our
                growing community of writers.
              </p>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-800 text-base md:text-lg">
              Stay connected with us for the latest updates and exclusive offers!
            </p>
          </div>
        </div>
        <div className=" w-full flex justify-center mt-4  ">
          <Link to="/user/dashboard" className='text-white text-xl bg-indigo-500 hover:bg-indigo-600 px-16 md:px-28 py-2 rounded-lg'>Let's Go</Link>
        </div>
      </main>
      <footer className="bg-blue-500 p-4 text-white text-center text-base md:text-lg">
        <p>&copy; {new Date().getFullYear()} MP-Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
