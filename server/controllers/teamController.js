// server/controllers/teamController.js
const Team = require('../models/Team'); // Import the Team model

// Get all teams
const getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find(); // Fetch all teams from the database
        res.status(200).json(teams); // Send the teams as a JSON response
    } catch (error) {
        res.status(500).json({ message: 'Error fetching teams', error: error.message });
    }
};

// Create a new team
const createTeam = async (req, res) => {
    const { name, city, established } = req.body; // Destructure the request body

    const newTeam = new Team({
        name,
        city,
        established,
    });

    try {
        const savedTeam = await newTeam.save(); // Save the new team to the database
        res.status(201).json(savedTeam); // Send the created team as a JSON response
    } catch (error) {
        res.status(400).json({ message: 'Error creating team', error: error.message });
    }
};

// Get a team by ID
const getTeamById = async (req, res) => {
    const { id } = req.params; // Get the ID from the request parameters

    try {
        const team = await Team.findById(id); // Find the team by ID
        if (!team) {
            return res.status(404).json({ message: 'Team not found' }); // Handle case where team is not found
        }
        res.status(200).json(team); // Send the found team as a JSON response
    } catch (error) {
        res.status(500).json({ message: 'Error fetching team', error: error.message });
    }
};

// Update a team by ID
const updateTeam = async (req, res) => {
    const { id } = req.params; // Get the ID from the request parameters
    const { name, city, established } = req.body; // Destructure the request body

    try {
        const updatedTeam = await Team.findByIdAndUpdate(id, { name, city, established }, { new: true }); // Update the team
        if (!updatedTeam) {
            return res.status(404).json({ message: 'Team not found' }); // Handle case where team is not found
        }
        res.status(200).json(updatedTeam); // Send the updated team as a JSON response
    } catch (error) {
        res.status(400).json({ message: 'Error updating team', error: error.message });
    }
};

// Delete a team by ID
const deleteTeam = async (req, res) => {
    const { id } = req.params; // Get the ID from the request parameters

    try {
        const deletedTeam = await Team.findByIdAndDelete(id); // Delete the team
        if (!deletedTeam) {
            return res.status(404).json({ message: 'Team not found' }); // Handle case where team is not found
        }
        res.status(200).json({ message: 'Team deleted successfully' }); // Send success message
    } catch (error) {
        res.status(500).json({ message: 'Error deleting team', error: error.message });
    }
};

// Export the controller functions
module.exports = {
    getAllTeams,
    createTeam,
    getTeamById,
    updateTeam,
    deleteTeam,
};