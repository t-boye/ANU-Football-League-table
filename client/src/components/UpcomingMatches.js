import React from 'react';

const UpcomingMatches = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-500 via-grey-500 to-blue-500 p-6 rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold text-white mb-4 border-b-2 border-white pb-2">Upcoming Matches</h2>
      <ul className="space-y-4">
        <li className="bg-white/90 p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-bold text-xl text-gray-800">Match 1</h3>
          <p className="text-gray-700">LVL 100 vs LVL 300</p>
          <p className="text-sm text-gray-600">Date: 20th Nov 2025</p>
        </li>
        <li className="bg-white/90 p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <h3 className="font-bold text-xl text-gray-800">Match 2</h3>
          <p className="text-gray-700">LVL 400 vs LVL 200</p>
          <p className="text-sm text-gray-600">Date: 22nd Nov 2025</p>
        </li>
      </ul>
    </div>
  );
};

export default UpcomingMatches;
