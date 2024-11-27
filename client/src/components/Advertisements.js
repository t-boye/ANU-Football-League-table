import React from 'react';
import adImage from '../assets/images/ads1.png';

const Advertisements = () => {
  const ad = {
    text: 'Football is Life',
    imageUrl: adImage,
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Advertisements</h2>
      <div className="bg-white p-2 rounded border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg">
        <img
          src={ad.imageUrl}
          alt={ad.text}
          className="w-full h-128 object-cover rounded-t" // Increased height to h-64
        />
        <div className="p-2 text-center">
          <p className="font-semibold">{ad.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Advertisements;