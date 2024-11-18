// src/components/AddTeam.js
import React, { useState } from 'react';

const AddTeam = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/teams', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, city })
    });
    if (response.ok) {
      // Handle success (e.g., reset form, show message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Team Name"
        required
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
        required
      />
      <button type="submit">Add Team</button>
    </form>
  );
};

export default AddTeam;