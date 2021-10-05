import { Router } from 'express';
import { createUserController, getUserController } from "./controllers/userController"
import { userAuth } from './middlewares/userAuth';

const router = Router();

router.post("/user", createUserController)
router.get("/user/:id", getUserController)

export { router }