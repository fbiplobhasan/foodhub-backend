// src/modules/category/category.route.ts
import { Router } from "express";
import { CategoryController } from "./category.controller";
import auth from "../../middleware/auth.middleware";

const router = Router();

router.post(
  "/create-category",
  auth("ADMIN","PROVIDER"), 
  CategoryController.createCategory,
);

router.get("/", CategoryController.getAllCategories);

export const CategoryRoutes = router;
