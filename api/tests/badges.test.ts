import request from 'supertest';
import express from 'express';
import badgeRoutes from '../badges.js';

const app = express();
app.use(express.json());
app.use('/badges', badgeRoutes);

describe('Badge API', () => {
  it('creates a new badge', async () => {
    const response = await request(app).post('/badges').send({
      title: 'First Commit',
      description: 'Made your first commit',
      awardedTo: 'Alice'
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe('First Commit');
  });

  it('lists all badges', async () => {
    const response = await request(app).get('/badges');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});