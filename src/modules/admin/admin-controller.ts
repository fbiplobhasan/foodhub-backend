import { Request, Response } from "express";
import { AdminService } from "./admin-service";

const getAllUsers = async (req: Request, res: Response) => {
  const result = await AdminService.getAllUsersFromDB();
  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    data: result,
  });
};

const updateUserStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  const result = await AdminService.updateUserStatusInDB(id as string, status);
  res.status(200).json({
    success: true,
    message: "User status updated successfully",
    data: result,
  });
};

export const AdminController = {
  getAllUsers,
  updateUserStatus,
};