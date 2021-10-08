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
  if (err.message === "Not found") {
    return response.status(404).json({message: err.message})
  }
  if (["UserId or Password invalid", "Token not found", "Invalid token"].includes(err.message)) {
    return response.status(401).json({message: err.message})
  }

  return response.status(500).json({ message: "Internal Server Error" })
}

export { errorMiddleware }