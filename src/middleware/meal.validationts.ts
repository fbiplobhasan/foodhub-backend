import { z } from "zod";

const createMealZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    price: z.number().positive("Price must be a positive number"),
    categoryId: z.string({ required_error: "Category ID is required" }), // এটি থাকলে ফাঁকা আইডি যাবে না
    image: z.string().url("Invalid image URL").optional(),
  }),
});

export const MealValidation = {
  createMealZodSchema,
};
