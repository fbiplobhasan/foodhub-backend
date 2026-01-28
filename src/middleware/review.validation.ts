import { z } from "zod";

const createReviewZodSchema = z.object({
  body: z.object({
    mealId: z.string({ required_error: "Meal ID is required" }),
    rating: z
      .number()
      .min(1, "Rating cannot be less than 1")
      .max(5, "Rating cannot be more than 5"),
    comment: z.string().optional(),
  }),
});

export const ReviewValidation = {
  createReviewZodSchema,
};
