import { Router } from 'express';
import { createUserController, userLoginController } from "./controllers/userController"
import { createSaleController } from './controllers/saleController';
import { userAuth } from './middlewares/userAuth';

const router = Router();

router.post("/user", createUserController)
router.post("/login", userLoginController)

router.post("/sale", userAuth, createSaleController)

export { router }