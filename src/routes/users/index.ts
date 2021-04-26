import postUser from './post';
import getUser from './get';
import getUsers from './getMany';
import deleteUser from './delete';
import { Router } from 'express';
import deleteAll from './deleteAll';

const users = Router();

users.get('/', getUsers);
users.get('/:userId', getUser);
users.post('/', postUser);
users.delete('/:userId', deleteUser);
users.delete('/', deleteAll);

export default users;
