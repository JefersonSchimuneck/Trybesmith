import { Router } from 'express';
import { createUserController, userLoginController } from "./controllers/userController"
import { createSaleController } from './controllers/saleController';
import { userAuth } from './middlewares/userAuth';
import { getItemsController } from './controllers/itemController';
import { getSalesController, getSaleByUserIdController } from './controllers/saleController';

const router = Router();

router.post("/login", userLoginController)

router.post("/user", createUserController)

router.get("/item", getItemsController)

router.post("/sale", userAuth, createSaleController)
router.get("/sale", getSalesController)
router.get("/sale/:id", getSaleByUserIdController)

export { router }