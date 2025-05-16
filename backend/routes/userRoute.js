import express from "express"
import { registerUser, loginUser } from "../controllers/userController.js";


const userRouter = express.Router();

// Register a new user
userRouter.post('/register', registerUser);

// Login user
userRouter.post('/login', loginUser);

// // Get user profile (protected route example)
// router.get('/profile', userController.getUserProfile);

// // Update user profile
// router.put('/profile', userController.updateUserProfile);

// // Delete user
// router.delete('/:id', userController.deleteUser);

export default userRouter