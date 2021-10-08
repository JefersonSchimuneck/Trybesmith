import { Request, Response } from "express";
import {
  createUserService,
  userLoginService,
  getUserByIdService,
  getUsersService,
  updateUserService,
  deleteUserService
} from "../services/userService";
import { generateToken } from "../utils/handleToken";

const createUserController = async (request: Request, response: Response) => {
  const newUser =  await createUserService(request.body)
  const { id, username } = newUser;
  const token = generateToken({ id, username });
  return response.status(201).json({ token });
};

const getUsersController = async (request: Request, response: Response) => {
  const users = await getUsersService();
  return response.status(200).json({ users });
}

const getUserByIdController = async(request: Request, response: Response) => {
  const { id } = request.params;
  const user =  await getUserByIdService(id);
  return response.status(200).json({ user });
}

const updateUserController = async (request: Request, response: Response) => {
  const { id } = request.params;
  const userData =  request.body;
  const updatedUser = await updateUserService(id, userData);
  return response.status(200).json({ updatedUser });
}

const deleteUserController = async(request: Request, response: Response) => {
  const { id } = request.params;
  const deletedUser = await deleteUserService(id);
  return response.status(200).json({ deletedUser });
}

const userLoginController = async (request: Request, response: Response) => {
  const [user] =  await userLoginService(request.body)
  const { id, username } = user;
  const token = generateToken({ id, username });
  return response.status(201).json({ token });
};

export {
  createUserController,
  userLoginController,
  getUserByIdController,
  getUsersController,
  updateUserController,
  deleteUserController
};
