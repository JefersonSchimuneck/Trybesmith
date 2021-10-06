import { userType } from '../@types/types';
import { userSchema } from '../@types/userSchema';
import { createUserModel, getUserModel } from '../models/userModel';

const createUserService = async (user: userType) => {
  userSchema.parse(user);
  const newUser = await createUserModel(user);
  return newUser;
};

const getUserService = async (id: string) => {
  try {
    const user = await getUserModel(id);
    return user;
  } catch (err: any) {
    return null;
  }
};

export { createUserService, getUserService };