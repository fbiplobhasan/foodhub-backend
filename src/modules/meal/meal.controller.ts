import { Request, Response } from "express";
import { MealService } from "./meal.service";

const createMeal = async (req: Request, res: Response) => {
  try {
    const user = req.user as any;
    const result = await MealService.createMeal(req.body, user.userId);

    res.status(201).json({
      success: true,
      message: "Meal created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to create meal",
    });
  }
};

const getAllMeals = async (req: Request, res: Response) => {
  try {
    const result = await MealService.getAllMeals(req.query);
    res.status(200).json({
      success: true,
      message: "Meals fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getSingleMeal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await MealService.getSingleMeal(id as string);
    res.status(200).json({
      success: true,
      message: "Meal fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const MealController = {
  createMeal,
  getAllMeals,
  getSingleMeal,
};
