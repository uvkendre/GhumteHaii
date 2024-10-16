import express from 'express';
import { signup, login, getUserInfo } from '../controllers/userController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', verifyToken, getUserInfo); // Ensure you're using getUserInfo instead of getUser

export default router;
