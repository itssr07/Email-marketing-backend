// backend/controllers/sequenceController.js
const Sequence = require('../models/Sequence');

const sequenceController = {
  getAllSequences: async (req, res) => {
    try {
      const sequences = await Sequence.find();
      res.json(sequences);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createSequence: async (req, res) => {
    // Implement create logic
  },

  updateSequence: async (req, res) => {
    // Implement update logic
  },

  deleteSequence: async (req, res) => {
    // Implement delete logic
  },
};

module.exports = sequenceController;
