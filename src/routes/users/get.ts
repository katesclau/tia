import { Request, Response } from "express";
import { getUserModel } from "..";

export default async (req: Request, res: Response) => {
  const User = await getUserModel();
  const user = await User.findById(req.url.substr(1), 'name email').exec();
  res.status(200);
  res.send(JSON.stringify(user, null, 2)); 
};
