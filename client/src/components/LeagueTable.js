// src/components/LeagueTable.js
import React from 'react';

const LeagueTable = ({ teams }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 p-2">Team</th>
            <th className="border border-gray-300 p-2">Played</th>
            <th className="border border-gray-300 p-2">Won</th>
            <th className="border border-gray-300 p-2">Drawn</th>
            <th className="border border-gray-300 p-2">Lost</th>
            <th className="border border-gray-300 p-2">Goals Scored</th>
            <th className="border border-gray-300 p-2">Goals Conceded</th>
            <th className="border border-gray-300 p-2">Goal Difference</th>
            <th className="border border-gray-300 p-2">Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2">{team.name}</td>
              <td className="border border-gray-300 p-2">{team.played}</td>
              <td className="border border-gray-300 p-2">{team.wins}</td>
              <td className="border border-gray-300 p-2">{team.draws}</td>
              <td className="border border-gray-300 p-2">{team.losses}</td>
              <td className="border border-gray-300 p-2">{team.goalsScored}</td>
              <td className="border border-gray-300 p-2">{team.goalsConceded}</td>
              <td className="border border-gray-300 p-2">{team.goalDifference}</td>
              <td className="border border-gray-300 p-2">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable;