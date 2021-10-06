import { Request, Response, NextFunction } from "express"
import { decodeToken } from "../utils/handleToken";
import { getUserModel } from "../models/userModel";


const userAuth = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.headers.authorization
  if (!token) {
    throw new Error('Token not found')
  }

  try {
    const decodedToken = decodeToken(token);
    // const { data } = decodedToken
    console.log(decodedToken)
    // const user = await getUserModel(decodeToken.data.id)

    request.userId = '2';

    return next();
  } catch (err) {
    return next(err);
  }
}

export { userAuth }
