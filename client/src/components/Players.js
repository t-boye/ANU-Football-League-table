// src/components/Players.js
import React, { useState, useEffect } from 'react';

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPlayers = async () => {
    try {
      const response = await fetch('/data/players.json'); // Adjust the path as necessary
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPlayers(data.players);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  if (loading) return <p>Loading players...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold">Players</h3>
      <ul className="list-disc pl-5">
        {players.map((player) => (
          <li key={player.id} className="mt-1">{player.name} - {player.position}</li>
        ))}
      </ul>
    </div>
  );
};

export default Players;