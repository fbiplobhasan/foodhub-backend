import { Router } from "express";
import auth from "../../middleware/auth.middleware";
import { ReviewController } from "./review.controller";

const router = Router();

router.post("/add-review", auth("CUSTOMER"), ReviewController.createReview);

router.get("/:mealId", ReviewController.getMealReviews);

export const ReviewRoutes = router;