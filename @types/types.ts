import { z } from 'zod';
import { userSchema, loginSchema } from './userSchema'
import { saleSchema } from './saleSchema'

type userType = z.infer<typeof userSchema>

type loginType = z.infer<typeof loginSchema>

type saleType = z.infer<typeof saleSchema>

type tokenDataType =  {
  id: number;
  username: string
}

export { userType, loginType, saleType, tokenDataType }