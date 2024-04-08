const request = require('supertest');
const app = require('./index');

describe('User API Endpoints', () => {
  it('should create a new user', async () => {
    const response = await request(app)
      .post('/users')
      .send({ username: 'john_doe', email: 'john@example.com' });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.username).toBe('john_doe');
    expect(response.body.email).toBe('john@example.com');
  });

  it('should get a list of users', async () => {
    const response = await request(app).get('/users');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});