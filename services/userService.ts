import { userType, loginType } from '../@types/types';
import { userSchema, loginSchema } from '../@types/userSchema';
import { createUserModel, getUserModel} from "../models/userModel";

const createUserService = async (user: userType) => {
  userSchema.parse(user)
  const newUser = await createUserModel(user);
  const id = JSON.parse(JSON.stringify(newUser)).insertId
  return {id, username: user.username}
}

const userLoginService = async(login: loginType) => {
  loginSchema.parse(login)
  const user = await getUserModel(String(login.userId))
  const userResult = JSON.parse(JSON.stringify(user))
  if (!userResult[0]) {
    throw new Error('User Not found')
  }
  if (userResult[0].password !== login.password) {
    throw new Error('UserId or Password invalid')
  }
  return userResult
}

export { createUserService, userLoginService }