import { userType, loginType } from '../@types/types';
import { userSchema, loginSchema } from '../@types/userSchema';
import {
  createUserModel,
  getUsersModel,
  getUserByIdModel,
  updateUserModel,
  deleteUserModel
} from "../models/userModel";

const createUserService = async (user: userType) => {
  userSchema.parse(user);
  const newUser = await createUserModel(user);
  const id = JSON.parse(JSON.stringify(newUser)).insertId;
  return {id, username: user.username};
}

const getUsersService = async() => {
  const users = await getUsersModel();
  return users;
}

const getUserByIdService = async(id: string) => {
  const sale = await getUserByIdModel(id);
  const saleResult = JSON.parse(JSON.stringify(sale))
  if (!saleResult[0]) {
    throw new Error('Not found')
  }
  return sale;
}

const updateUserService = async(id: string, user: userType) => {
  const updatedUser = await updateUserModel(id, user);
  return updatedUser;
}

const deleteUserService = async(id: string) => {
  const deletedUser = getUserByIdService(id);
  await deleteUserModel(id);
  return deletedUser;
}

const userLoginService = async(login: loginType) => {
  loginSchema.parse(login)
  const user = await getUserByIdModel(String(login.userId))
  const userResult = JSON.parse(JSON.stringify(user))
  if (!userResult[0]) {
    throw new Error('User Not found')
  }
  if (userResult[0].password !== login.password) {
    throw new Error('UserId or Password invalid')
  }
  return userResult;
}

export {
  createUserService,
  getUsersService,
  userLoginService,
  getUserByIdService,
  updateUserService,
  deleteUserService
}
