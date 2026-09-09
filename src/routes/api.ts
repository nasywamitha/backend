import {Router}from 'express';
import { register, login } from '../controllers/authController';
import { getTodos, createTodo } from '../controllers/todoController';
import { verifyToken } from '../middlewares/authMiddleware';
import { validateRegister, validateLogin, validateTodo } from '../middlewares/validator';

const router = Router();

// AUTHENTICATION ROUTES
router.post('/auth/register', validateRegister, register);
router.post('/auth/login', validateLogin, login);

//TODO ROUTES (Protected)
router.get('/todos', verifyToken, getTodos);
router.post('/todos', verifyToken, validateTodo, createTodo);

export default router;