import { sign, verify } from "jsonwebtoken";
import { tokenDataType } from '../@types/types';

const secret = 'secret'

const generateToken = (data: tokenDataType) => sign(
  { data },
  secret,
  { expiresIn: '7d', algorithm: 'HS256'}
);

const decodeToken = (token: string) => verify(token, secret);

export { generateToken, decodeToken };