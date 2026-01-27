import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  const result = await CategoryService.createCategory(req.body.name);
  res.status(201).json({ success: true, data: result });
};

const getAllCategories = async (req: Request, res: Response) => {
  const result = await CategoryService.getAllCategories();
  res.status(200).json({ success: true, data: result });
};

export const CategoryController = { createCategory, getAllCategories };