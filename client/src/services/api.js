// src/services/api.js
import axios from 'axios';

const API_URL_TEAMS = 'http://localhost:5000/api/teams'; // Adjust the URL based on your backend
const API_URL_PLAYERS = 'http://localhost:5000/api/players'; // Adjust the URL for players

// Function to get all teams
export const getTeams = async () => {
    const response = await axios.get(API_URL_TEAMS);
    return response.data;
};

// Function to create a new team
export const createTeam = async (teamData) => {
    const response = await axios.post(API_URL_TEAMS, teamData);
    return response.data;
};

// Function to update an existing team
export const updateTeam = async (id, teamData) => {
    const response = await axios.put(`${API_URL_TEAMS}/${id}`, teamData);
    return response.data;
};

// Function to delete a team
export const deleteTeam = async (id) => {
    const response = await axios.delete(`${API_URL_TEAMS}/${id}`);
    return response.data;
};

// Function to get all players
export const getPlayers = async () => {
    const response = await axios.get(API_URL_PLAYERS);
    return response.data;
};

// You can add more player-related functions here if needed