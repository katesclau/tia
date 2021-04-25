import request, { Response } from 'supertest';
import path from 'path';
import dotenv from 'dotenv';
import server from './server';
dotenv.config({ 
  path: path.resolve(__dirname, '../.env.test')
});

describe('Server tests...',() => {
  
  /**
   *  Initial server test
   */
  it("Server should respond with 👍 on /api", async () => {
    const res: Response = await request(server).get('/api/');
    expect(res.status).toBe(200);
    expect(res.text).toBe("👍");
  });


});


