// routes/team.js
const express = require('express');
const Team = require('../models/Team');
const router = express.Router();

// Add a new team
router.post('/', async (req, res) => {
  const { name, city } = req.body;
  const newTeam = new Team({ name, city });
  await newTeam.save();
  res.status(201).json(newTeam);
});

// Update a team
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedTeam = await Team.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedTeam);
});

// Delete a team
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Team.findByIdAndDelete(id);
  res.status(204).send();
});

module.exports = router;