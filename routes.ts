import { Router } from 'express';
import { getItemsController } from './controllers/itemController';
import {
  createUserController,
  userLoginController,
  getUserByIdController,
  getUsersController,
  updateUserController,
  deleteUserController
} from "./controllers/userController"
import { createSaleController, getSalesController, getSaleByUserIdController } from './controllers/saleController';
import { userAuth } from './middlewares/userAuth';

const router = Router();

router.post("/login", userLoginController);

router.post("/user", createUserController);
router.get("/user", getUsersController);
router.get("/user/:id", getUserByIdController);
router.put("/user/:id", updateUserController);
router.delete("/user/:id", deleteUserController)

router.get("/item", getItemsController);

router.post("/sale", userAuth, createSaleController);
router.get("/sale", getSalesController);
router.get("/sale/:id", getSaleByUserIdController);

export { router }