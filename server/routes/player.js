// routes/player.js
const express = require('express');
const Player = require('../models/Player');
const router = express.Router();

// GET all players
router.get('/', async (req, res) => {
  try {
    const players = await Player.find().populate('teamId'); // Populate team data if needed
    res.json(players);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new player
router.post('/', async (req, res) => {
  const player = new Player(req.body);
  try {
    const savedPlayer = await player.save();
    res.status(201).json(savedPlayer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Additional routes (PUT, DELETE) can be added here
module.exports = router;