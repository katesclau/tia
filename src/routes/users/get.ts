import { Request, Response } from "express";
import { getUserModel } from "..";

export default async (req: Request, res: Response) => {
  const User = await getUserModel();
  const user = await User.findById(req.url.substr(1)).exec();
  console.log(JSON.stringify(user));
  if (!user) {
    res.status(404);
    res.send();
  } else {
    res.status(200);
    res.send(JSON.stringify(user, null, 2));
  }
};
