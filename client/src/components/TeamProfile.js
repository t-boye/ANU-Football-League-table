// src/components/TeamProfile.js
import React from 'react';

const TeamProfile = ({ team }) => {
  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-lg">
      <h2 className="text-2xl font-bold">{team.name}</h2>
      <p className="mt-2"><strong>Coach:</strong> {team.coach}</p>
      <p className="mt-2"><strong>Founded:</strong> {team.founded}</p>
      <p className="mt-2"><strong>Stadium:</strong> {team.stadium}</p>
      <h3 className="mt-4 text-xl font-semibold">Players:</h3>
      <ul className="list-disc pl-5">
        {team.players.map((player, index) => (
          <li key={index} className="mt-1">{player.name} - {player.position}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamProfile;