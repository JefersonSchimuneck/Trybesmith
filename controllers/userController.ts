import { Request, Response } from "express";
import { createUserService, userLoginService } from "../services/userService";
import { generateToken } from "../utils/handleToken";

const createUserController = async (request: Request, response: Response) => {
  const newUser =  await createUserService(request.body)
  const { id, username } = newUser;
  const token = generateToken({ id, username });
  return response.status(201).json({ token });
};

const userLoginController = async (request: Request, response: Response) => {
  const [user] =  await userLoginService(request.body)
  const { id, username } = user;
  const token = generateToken({ id, username });
  return response.status(201).json({ token });
};

export { createUserController, userLoginController };
