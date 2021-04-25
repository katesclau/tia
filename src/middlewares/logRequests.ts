import { NextFunction, Request, Response } from "express";

export default (req: Request, _res: Response, next: NextFunction) => {
  console.log(`
[server]: Request
URL: ${req.url},
Method: ${req.method},
Body: ${req.body},
Headers:
${JSON.stringify(req.headers, null, 2)},`);
  next();
}