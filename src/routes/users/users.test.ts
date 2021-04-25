import request, { Response } from 'supertest';
import path from 'path';
import dotenv from 'dotenv';
import server from '../../server';

dotenv.config({
  path: path.resolve(__dirname, '../.env.test')
});

describe('User tests...',() => {

  /**
   *  List Users
   */
  it("/api/users should provide a list of users", async () => {
    const res: Response = await request(server).get('/api/users');
    expect(res.status).toBe(200);
    expect(res.text).toBe("[]");
  });

  /**
   *  Creates User
   */
  let userId = "";
  it("/api/users should provide a list of users", async () => {
    const res: Response = await request(server).post('/api/users');
    expect(res.status).toBe(200);
    expect(res.text).toBe("[]");
  });

  /**
   *  Gets User
   */
   it("/api/users should provide a list of users", async () => {
    const res: Response = await request(server).get(`/api/users/${userId}`);
    expect(res.status).toBe(200);
    expect(res.text).toBe("[]");
  });

  /**
   *  Deletes User
   */
    it("/api/users should provide a list of users", async () => {
    const res: Response = await request(server).get('/api/users');
    expect(res.status).toBe(200);
    expect(res.text).toBe("[]");
  });
  
  /**
   *  Validates Deletion
   */
   it("/api/users/uid should provide the user info", async () => {
    const res: Response = await request(server).get(`/api/users/${userId}`);
    expect(res.status).toBe(404);
  });
});


