// backend/routes/sequenceRoutes.js
const express = require('express');
const router = express.Router();
const sequenceController = require('../controllers/sequenceController');

router.get('/', sequenceController.getAllSequences);
router.post('/', sequenceController.createSequence);
router.put('/:id', sequenceController.updateSequence);
router.delete('/:id', sequenceController.deleteSequence);

module.exports = router;
// backend/routes/sequenceRoutes.js
// Get all sequences
router.get('/', sequenceController.getAllSequences);

// Create a new sequence
router.post('/', sequenceController.createSequence);

// Update a sequence
router.put('/:id', sequenceController.updateSequence);

// Delete a sequence
router.delete('/:id', sequenceController.deleteSequence);
