import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddPlayer = () => {
  const [teams, setTeams] = useState([]);
  const [selectedTeamId, setSelectedTeamId] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [playerPosition, setPlayerPosition] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/teams');
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching teams:', error);
        setError('Failed to load teams. Please try again later.');
      }
    };

    fetchTeams();
  }, []);

  const addPlayer = async (e) => {
    e.preventDefault();

    const playerData = {
      name: playerName,
      position: playerPosition,
      teamId: selectedTeamId,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/players', playerData);
      console.log('Player added successfully:', response.data);
      // Optionally reset the form or show a success message
    } catch (error) {
      console.error('Error adding player:', error);
      setError('Error adding player: ' + error.message);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl text-center font-bold mb-4">Add Player</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={addPlayer}>
        <div className="mb-4">
          <label htmlFor="player-name" className="block text-sm font-medium text-gray-700">
            Player Name:
          </label>
          <input
            type="text"
            id="player-name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="player-position" className="block text-sm font-medium text-gray-700">
            Player Position:
          </label>
          <input
            type="text"
            id="player-position"
            value={playerPosition}
            onChange={(e) => setPlayerPosition(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="team-select" className="block text-sm font-medium text-gray-700">
            Select Team:
          </label>
          <select
            id="team-select"
            value={selectedTeamId}
            onChange={(e) => setSelectedTeamId(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">--Please choose a team--</option>
            {teams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm"
        >
          Add Player
        </button>
      </form>
    </div>
  );
};

export default AddPlayer;