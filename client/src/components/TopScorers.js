// src/components/TopScorers.js
import React from 'react';

const TopScorers = ({ scorers }) => {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold">Top Scorers</h3>
      <ul className="list-disc pl-5">
        {scorers.map((scorer, index) => (
          <li key={index} className="mt-1">{scorer.name} - {scorer.goals} goals</li>
        ))}
      </ul>
    </div>
  );
};

export default TopScorers;