import { Router } from "express";
import auth from "../../middleware/auth.middleware";
import { ReviewController } from "./review.controller";
import validateRequest from "../../middleware/validateRequest";
import { ReviewValidation } from "../../middleware/review.validation";

const router = Router();

router.post(
  "/add-review",
  auth("CUSTOMER"),
  validateRequest(ReviewValidation.createReviewZodSchema),
  ReviewController.createReview,
);

router.get("/:mealId", ReviewController.getMealReviews);

export const ReviewRoutes = router;
