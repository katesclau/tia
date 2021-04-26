import request, { Response } from 'supertest';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({
  path: path.resolve(__dirname, '../../../.env')
});

import server from '../../server';

afterAll(() => {
  /**
   *  Delete all
   */
  it("/api/users should provide the user info", async () => {
    const res: Response = await request(server)
      .del(`/api/users`)
      .expect(204);
  });
});

describe('User tests...',() => {

  /**
   *  List Users
   */
  it("/api/users should provide a list of users", async (done) => {
    const res: Response = await request(server)
      .get('/api/users')
      .expect(200)
    expect(JSON.parse(res.text)).toBeInstanceOf(Array);
    done();
  });

  /**
   *  Creates User
   */
  it("/api/users should allow post a new user", async (done) => {
    const user = {
      name: "John Doe",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@foobar.com"
    };
    const created: Response = await request(server)
      .post('/api/users')
      .send(user)
      .expect('Content-Type', /json/)
      .expect(201);

    const createdUserId = JSON.parse(created.text)?._id;

    // Validates created user
    const res: Response = await request(server)
      .get(`/api/users/${createdUserId}`)
      .expect(200);
    const gotUser = JSON.parse(res.text);
    console.log(res.text);
    expect(gotUser).toHaveProperty("name", user.name);
    expect(gotUser).toHaveProperty("firstName", user.firstName);
    expect(gotUser).toHaveProperty("name", user.name);
    expect(gotUser).toHaveProperty("name", user.name);
    done();
  });

  /**
   *  Creates User with invalid email
   */
  it("/api/users should avoid creating a user with invalid email", async (done) => {
    const invalidUser = {
      name: "John Doe",
      firstName: "John",
      lastName: "Doe",
      email: "johndoefoobar.com"
    };
    const created: Response = await request(server)
      .post('/api/users')
      .send(invalidUser)
      .expect(400);
    done();
  });

  /**
   *  Deletes User
   */
  it("/api/users allow delete on a known user._id", async (done) => {
    // Creates user
    const user = {
      name: "John Nameless",
      firstName: "John",
      lastName: "Nameless",
      email: "johnnameless@foobar.com"
    };
    const created: Response = await request(server)
      .post('/api/users')
      .send(user)
      .expect('Content-Type', /json/)
      .expect(201);
    const createdUserId = JSON.parse(created.text)?._id;

    // Deletes user
    const res: Response = await request(server)
      .del(`/api/users/${createdUserId}`)
      .expect(204);

    // Validates deletion
    await request(server)
      .get(`/api/users/${createdUserId}`)
      .expect(404);
    done();
  });
});


