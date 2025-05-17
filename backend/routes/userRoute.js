import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
} from "../controllers/userController.js";
import authUser from "../middlewares/authUser.js";
import upload from "../middlewares/multer.js";

const userRouter = express.Router();

// Register a new user
userRouter.post("/register", registerUser);

// Login user
userRouter.post("/login", loginUser);

// Get user profile (protected route example)
userRouter.get("/get-profile", authUser, getProfile);

// Update user profile
userRouter.post(
  "/update-profile",
  upload.single("image"),
  authUser,
  updateProfile
);

// // Delete user
// router.delete('/:id', userController.deleteUser);

export default userRouter;
