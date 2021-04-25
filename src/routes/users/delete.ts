import { Request, Response } from "express";
import { getUserModel } from "..";

export default async (req: Request, res: Response) => {
  const User = await getUserModel();
  const user = await User.findOneAndRemove({ _id: req.url.substr(1) }).exec();
  res.status(204);
  res.send(JSON.stringify(user));
}
