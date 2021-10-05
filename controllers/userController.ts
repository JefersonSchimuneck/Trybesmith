import { Request, Response } from "express";
import { createUserService, getUserService } from "../services/userService";
import { generateToken } from "../utils/handleToken";

const createUserController = async (request: Request, response: Response) => {
  const user =  await createUserService(request.body)
  const { id, name } = user;
  const token = generateToken({ id, name });
  return response.status(201).json({ token });
};

const getUserController = async (request: Request, response: Response) => {
  const { id } = request.params;
  const user =  await getUserService(id);
  if (!user) return response.status(404).json({message: "User not found"})
  return response.status(200).json({ user });
};

export { createUserController, getUserController };
