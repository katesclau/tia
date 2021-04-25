import { Request, Response } from "express";
import { getUserModel } from "..";

export default async (_req: Request, res: Response) => {
  const User = await getUserModel();
  const users = await User.find().limit(10).exec();
  res.status(200);
  res.send(JSON.stringify(users));
};

