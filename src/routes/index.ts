import { Router, Request, Response } from 'express';
import mongoose from 'mongoose';
import schemas from "../schemas";
import { Database } from '../db';
import users from './users';

const routes = Router();

export async function getUserModel() {
  await Database.connect();
  const schema = schemas.get('User');
  return mongoose.model('User', schema);
}

routes.get('/', async (_req: Request, res: Response) => {
  res.status(200);
  res.send('👍');
});

routes.use('/users', users);

export default routes;
