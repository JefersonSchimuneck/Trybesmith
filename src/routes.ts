import { Router } from 'express';
import { createUserController, getUserController } from './controllers/userController';

export const router = Router();

router.post('/user', createUserController);
router.get('/user/:id', getUserController);
