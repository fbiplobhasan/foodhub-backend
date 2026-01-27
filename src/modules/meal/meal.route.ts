import { Router } from "express";
import auth from "../../middleware/auth.middleware";
import { MealController } from "./meal.controller";

const router = Router();

router.get("/", MealController.getAllMeals);
router.get("/:id", MealController.getSingleMeal);
router.post("/create-meal", auth("PROVIDER"), MealController.createMeal);

export const MealRoutes = router;
