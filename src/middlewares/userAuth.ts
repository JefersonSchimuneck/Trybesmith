import { Request, Response, NextFunction } from 'express';

export function userAuth(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const auth = true;

  if (auth) {
    return next();
  }

  return response.status(401).json({ error: 'eroooou' });
}
