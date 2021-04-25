import request, { Response } from 'supertest';
import app from './server';

describe('Server tests...',() => {
  it("Server should respond with 👍 on /", async () => {
    const res: Response = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body).toBe("👍");
  });
});


