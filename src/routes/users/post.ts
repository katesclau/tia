import { Request, Response } from "express";
import { getUserModel } from "..";


export default async (req: Request, res: Response) => {
  const User = await getUserModel();
  const user = new User(req.body);
  const error = user.validateSync();
  if (error) {
    res.status(400);
    res.send(error);
  }
  
  await  new Promise<void>((resolve, _reject) => {
    user.save((err: any) => {
      if (err) console.log(err);
      // saved!
      resolve();
  })});

  res.status(201);
  res.send(JSON.stringify(user, null, 2));
}