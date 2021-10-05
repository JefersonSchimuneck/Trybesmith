import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

const errorMiddleware = (
  err: Error,
  _request: Request,
  response: Response,
  _next: NextFunction
) => {
  if (err instanceof ZodError) {
    return response.status(400).json({message: err.issues[0].message})
  }

  return response.status(500).json({ message: "Internal Server Error" })
}

export { errorMiddleware }