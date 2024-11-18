// src/components/TopScorers.js
import React from 'react';
import PropTypes from 'prop-types';

const TopScorers = ({ scorers }) => {
  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Top Scorers</h3>
      {scorers && scorers.length > 0 ? (
        <ul className="list-disc pl-5">
          {scorers.map((scorer, index) => (
            <li key={index} className="mt-1">{scorer.name} - {scorer.goals} goals</li>
          ))}
        </ul>
      ) : (
        <p>No top scorers available.</p>
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