// backend/models/Sequence.js
const mongoose = require('mongoose');

const sequenceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  nodes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Node' }],
});

const Sequence = mongoose.model('Sequence', sequenceSchema);

module.exports = Sequence;
