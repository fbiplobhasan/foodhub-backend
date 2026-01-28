import { Router } from "express";
import auth from "../../middleware/auth.middleware";
import validateRequest from "../../middleware/validateRequest";
import { MealController } from "./meal.controller";
import { MealValidation } from "../../middleware/meal.validationts";

const router = Router();

router.get("/", MealController.getAllMeals);
router.get("/:id", MealController.getSingleMeal);

router.post(
  "/create-meal",
  auth("PROVIDER"),
  validateRequest(MealValidation.createMealZodSchema),
  MealController.createMeal,
);

export const MealRoutes = router;
