import { prisma } from "../../lib/prisma";

const createReview = async (userId: string, payload: any) => {
  const { mealId, rating, comment } = payload;

  const result = await prisma.review.create({
    data: {
      customerId: userId,
      mealId,
      rating: Number(rating), 
      comment,
    },
    include: {
      customer: {
        select: { name: true },
      },
      meal: {
        select: { name: true },
      },
    },
  });

  return result;
};

const getMealReviews = async (mealId: string) => {
  return await prisma.review.findMany({
    where: { mealId },
    include: {
      customer: { select: { name: true } },
    },
    orderBy: { createdAt: "desc" },
  });
};

export const ReviewService = {
  createReview,
  getMealReviews,
};
