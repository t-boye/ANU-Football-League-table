// src/components/TeamProfile.js
import React from 'react';

const TeamProfile = ({ team }) => {
  // Check if team is defined and has the expected properties
  if (!team) {
    return <div>No team data available</div>; // Fallback UI
  }

  return (
    <div>
      <h1>{team.name}</h1> {/* Accessing team.name safely */}
      <p>Played: {team.played}</p>
      <p>Wins: {team.wins}</p>
      <p>Draws: {team.draws}</p>
      <p>Losses: {team.losses}</p>
      <p>Goals Scored: {team.goalsScored}</p>
      <p>Goals Conceded: {team.goalsConceded}</p>
      <p>Goal Difference: {team.goalDifference}</p>
      <p>Points: {team.points}</p>
    </div>
  );
};

export default TeamProfile;