import { z } from 'zod';
import { userSchema } from './userSchema'

type userType = z.infer<typeof userSchema>

type tokenDataType =  {
  id: number;
  name: string
}

export { userType, tokenDataType }