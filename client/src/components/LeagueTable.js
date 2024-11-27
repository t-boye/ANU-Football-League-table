// src/components/LeagueTable.js
import React from 'react';

const LeagueTable = ({ teams = [] }) => {
  return (
    <div className="overflow-x-auto pt-16">
      <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="border border-gray-300 p-4">Team</th>
            <th className="border border-gray-300 p-4">Played</th>
            <th className="border border-gray-300 p-4">Won</th>
            <th className="border border-gray-300 p-4">Drawn</th>
            <th className="border border-gray-300 p-4">Lost</th>
            <th className="border border-gray-300 p-4">Goals Scored</th>
            <th className="border border-gray-300 p-4">Goals Conceded</th>
            <th className="border border-gray-300 p-4">Goal Difference</th>
            <th className="border border-gray-300 p-4">Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.length > 0 ? (
            teams.map((team, index) => (
              <tr key={index} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <td className="border border-gray-300 p-4">{team.name}</td>
                <td className="border border-gray-300 p-4">{team.played}</td>
                <td className="border border-gray-300 p-4">{team.wins}</td>
                <td className="border border-gray-300 p-4">{team.draws}</td>
                <td className="border border-gray-300 p-4">{team.losses}</td>
                <td className="border border-gray-300 p-4">{team.goalsScored}</td>
                <td className="border border-gray-300 p-4">{team.goalsConceded}</td>
                <td className="border border-gray-300 p-4">{team.goalDifference}</td>
                <td className="border border-gray-300 p-4">{team.points}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="border border-gray-300 p-4 text-center text-gray-500">
                No teams available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable;