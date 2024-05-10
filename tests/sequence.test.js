// backend/tests/sequence.test.js
const request = require('supertest');
const app = require('../server');
const Sequence = require('../models/Sequence');

describe('Sequence API', () => {
  it('should get all sequences', async () => {
    const response = await request(app).get('/api/sequences');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should create a new sequence', async () => {
    const newSequence = { userId: 'user123', nodes: [] };
    const response = await request(app)
      .post('/api/sequences')
      .send(newSequence);
    expect(response.status).toBe(201);
    expect(response.body.userId).toBe('user123');
  });

  // Write more test cases for update, delete, etc.
});
