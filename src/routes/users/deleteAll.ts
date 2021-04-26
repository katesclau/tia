import { Request, Response } from "express";
import { getUserModel } from "..";

export default async (_req: Request, res: Response) => {
  const User = await getUserModel();
  const user = await User.deleteMany().exec();
  res.status(204);
  res.send(JSON.stringify(user));
}
