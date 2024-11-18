// server/routes/leagueRoutes.js
const express = require('express');
const router = express.Router();
const Team = require('../models/Team');

// Get all teams
router.get('/', async (req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new team
router.post('/', async (req, res) => {
  const team = new Team(req.body);
  try {
    const newTeam = await team.save();
    res.status(201).json(newTeam);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update match scores
router.put('/:id', async (req, res) => {
  try {
    const { goalsScored, goalsConceded } = req.body;
    const team = await Team.findById(req.params.id);
    if (!team) return res.status(404).send('Team not found');

    // Update goals scored and conceded
    team.goalsScored += goalsScored;
    team.goalsConceded += goalsConceded;
    team.goalDifference = team.goalsScored - team.goalsConceded;

    // Update points based on match result
    if (goalsScored > goalsConceded) {
      team.wins += 1;
      team.points += 3;
    } else if (goalsScored < goalsConceded) {
      team.losses += 1;
    } else {
      team.draws += 1;
      team.points += 1;
    }

    const updatedTeam = await team.save();
    res.json(updatedTeam);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;