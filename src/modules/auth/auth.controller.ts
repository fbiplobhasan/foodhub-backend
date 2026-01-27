import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const register = async (req: Request, res: Response) => {
  try {
    const result = await AuthService.registerUser(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const result = await AuthService.loginUser(req.body);

    res.status(200).json({
      success: true,
      message: "User logged in successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(401).json({
      success: false,
      message: error.message || "Login failed",
    });
  }
};

const getProfile = async (req: Request, res: Response) => {
  try {
    console.log("Authenticated User Data:", req.user);

    res.status(200).json({
      success: true,
      message: "Profile retrieved successfully",
      data: req.user,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Could not fetch profile",
    });
  }
};

export const AuthController = {
  register,
  login,
  getProfile,
};
