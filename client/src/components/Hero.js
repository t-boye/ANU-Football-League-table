import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-yellow-500 text-white p-16 rounded-xl shadow-lg relative text-center">
      {/* Logos Section */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center space-x-4">
        <img
          src="/assets/bg removed logo/anu_logo.png"
          alt="Logo 1"
          className="w-36 h-36 object-contain rounded-full shadow-md"
        />
        <img
          src="/assets/bg removed logo/young ballers.png"
          alt="Logo 2"
          className="w-36 h-36 object-contain rounded-full shadow-md"
        />
      </div>
      {/* Content Section */}
      <h1 className="text-4xl font-extrabold mb-4 mt-12">Welcome to ANU YOUNG BALLERS ❤️</h1>
      <p className="text-lg font-medium">
        Where are the football lovers! Indicate here with your favorite football club!
      </p>
    </div>
  );
};

export default Hero;