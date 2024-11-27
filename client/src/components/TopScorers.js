// src/components/TopScorers.js
import React from 'react';
import PropTypes from 'prop-types';

const TopScorers = ({ scorers }) => {
  return (
    <div className="mt-4 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <h3 className="text-2xl font-bold text-blue-600 mb-4">Top Scorers</h3>
      {scorers && scorers.length > 0 ? (
        <ul className="list-disc pl-5">
          {scorers.map((scorer, index) => (
            <li key={index} className="mt-2 p-2 border-b border-gray-200 hover:bg-gray-100 transition duration-200">
              <span className="font-semibold">{scorer.name}</span> - <span className="text-gray-700">{scorer.goals} goals</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No top scorers available.</p>
      )}
    </div>
  );
};

// PropTypes for validation
TopScorers.propTypes = {
  scorers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      goals: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TopScorers;