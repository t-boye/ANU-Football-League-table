import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Players = () => {
  const [players, setPlayers] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('/api/players'); // Adjust the endpoint as necessary
        setPlayers(response.data);
      } catch (err) {
        console.error('Error fetching players:', err);
        setError('Failed to load players. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold">Players List</h2>
      {players.length === 0 ? (
        <p>No players found.</p>
      ) : (
        <ul>
          {players.map((player) => (
            <li key={player.id} className="py-2">
              {player.name} - {player.position}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Players;