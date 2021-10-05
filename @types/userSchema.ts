import { z } from 'zod';

const userSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string"
  }).nonempty({ message: "Name can't be empty" }),
  classe: z.string({
    required_error: "Classe is required",
    invalid_type_error: "Classe must be a string"
  }).nonempty({ message: "Classe can't be empty" }),
  level: z.number({
    required_error: "Level is required",
    invalid_type_error: "Level must be a number"
  }).positive({ message: "Level should be greater than 0" }),
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string"
  }).nonempty({ message: "Password can't be empty" })
})


export { userSchema }