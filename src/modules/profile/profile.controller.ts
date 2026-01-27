import { Request, Response } from "express";
import { ProfileService } from "./profile.service";

const createProfile = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const result = await ProfileService.createProfile(req.body, user.userId);
    res.status(201).json({ success: true, message: "Profile Created", data: result });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const ProfileController = { createProfile };