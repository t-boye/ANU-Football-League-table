// src/components/AddTeam.js
import React from 'react';
import axios from 'axios';

const predefinedTeams = [
    { name: 'Lvl 100', city: 'City A', established: 2020 },
    { name: 'Lvl 200', city: 'City B', established: 2021 },
    { name: 'Lvl 300', city: 'City C', established: 2022 },
    { name: 'Lvl 400', city: 'City D', established: 2023 },
];

const AddTeam = () => {
    const handleSubmit = async (team) => {
        try {
            const response = await axios.post('http://localhost:3000/api/teams', team);
            console.log('Team added:', response.data);
        } catch (error) {
            console.error('Error adding team:', error);
        }
    };

    return (
        <div>
            <h2>Add Team</h2>
            <ul>
                {predefinedTeams.map((team) => (
                    <li key={team.name}>
                        <button onClick={() => handleSubmit(team)}>
                            Add {team.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddTeam;