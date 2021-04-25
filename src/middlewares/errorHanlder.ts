import { ErrorRequestHandler, NextFunction, Request, Response } from "express"

export default (err: ErrorRequestHandler, _req: Request, res: Response, next: NextFunction) => {
  res.status(500)
  res.render('error', { error: err })
}
