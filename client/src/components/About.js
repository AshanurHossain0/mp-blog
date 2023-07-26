
import React from 'react';
import AboutImage from '../images/about.png';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-rajdhani">
      <header className="bg-blue-500 p-4">
        <h1 className="text-white text-4xl font-bold text-center">About MP-Blog</h1>
      </header>
      <main className="p-4">
        <div className="max-w-4xl mx-auto">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2 mb-4 md:mr-4 ">
              <img src={AboutImage} alt="About" className="rounded-lg w-full" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">Who We Are</h2>
              <p className="text-gray-800 text-base md:text-[18px]">
                Mp-Blog is a dedicated platform that aims to inspire, educate,
                and entertain. Our mission is to create a space where diverse perspectives and
                ideas flourish, enriching the lives of our readers.
              </p>
              <h2 className="text-2xl font-bold mt-4 mb-2">Our Vision</h2>
              <p className="text-gray-800 text-base md:text-[18px]">
                We envision a world where knowledge knows no boundaries and creativity knows no
                limits. We strive to be a beacon of innovation, fostering a community that values
                continuous learning and celebrates the power of creativity.
              </p>
              <h2 className="text-2xl font-bold mt-4 mb-2">Join Us on This Journey</h2>
              <p className="text-gray-800 text-base md:text-[18px]">
                We invite you to be a part of our ever-growing community. Whether you're a reader
                seeking inspiration or a writer looking to share your voice, we welcome you with
                open arms. Together, let's embark on this incredible journey of knowledge and
                creativity.
              </p>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-800 text-base md:text-lg">
              Stay connected with us for the latest updates and exclusive offers!
            </p>
            <div className="flex justify-center mt-4">
              {/* Social media icons go here */}
              {/* Add your social media icons or links here */}
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-blue-500 p-4 text-white text-center">
        <p>&copy; {new Date().getFullYear()} MP-Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
