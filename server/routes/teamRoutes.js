// server/routes/teamRoutes.js
const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

// Define routes
router.get('/', teamController.getAllTeams); // GET /api/teams
router.post('/', teamController.createTeam);  // POST /api/teams
router.get('/:id', teamController.getTeamById); // GET /api/teams/:id
router.put('/:id', teamController.updateTeam); // PUT /api/teams/:id
router.delete('/:id', teamController.deleteTeam); // DELETE /api/teams/:id

module.exports = router;