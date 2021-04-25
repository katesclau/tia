import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/', (_req: Request, res: Response) => {
  res.status(200);
  res.send('👍');
});

export default routes;
