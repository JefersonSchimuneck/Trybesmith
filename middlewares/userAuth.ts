import { Request, Response, NextFunction } from "express"
import { decodeToken } from "../utils/handleToken";

const userAuth = async (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  const token = request.headers.authorization
  if (!token) throw new Error('Token not found')

  try {
    const decodedToken = decodeToken(token);
    if (typeof decodedToken === 'string') throw new Error('Invalid token')
    const { data } = decodedToken
    request.userId = data.id;
    return next();
  } catch (_err: any) {
    return next({message: 'Invalid token'});
  }
}

export { userAuth }
