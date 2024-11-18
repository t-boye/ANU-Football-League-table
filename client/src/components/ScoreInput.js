// src/components/ScoreInput.js
import React, { useState } from 'react';

const ScoreInput = ({ onSubmit }) => {
  const [homeScore, setHomeScore] = useState('');
  const [awayScore, setAwayScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ homeScore, awayScore });
    setHomeScore('');
    setAwayScore('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 p-4 border border-gray-300 rounded-lg">
      <h3 className="text-xl font-bold">Enter Match Score</h3>
      <div className="flex space-x-4 mt-2">
        <input
          type="number"
          value={homeScore}
          onChange={(e) => setHomeScore(e.target.value)}
          placeholder="Home Team Score"
          className="border border-gray-300 p-2 rounded w-full"
          required
        />
        <input
          type="number"
          value={awayScore}
          onChange={(e) => setAwayScore(e.target.value)}
          placeholder="Away Team Score"
          className="border border-gray-300 p-2 rounded w-full"
          required
        />
      </div>
      <button type="submit" className="mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Submit Score
      </button>
    </form>
  );
};

export default ScoreInput;