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

  if (err.message === "User Not found") {
    return response.status(404).json({message: err.message})
  }

  if (err.message === "UserId or Password invalid" || err.message === "Token not found") {
    return response.status(401).json({message: err.message})
  }

  console.log(err)

  return response.status(500).json({ message: "Internal Server Error" })
}

export { errorMiddleware }