import { prisma } from "../../lib/prisma";

const createMeal = async (payload: any, userId: string) => {
  const providerProfile = await prisma.providerProfile.findUnique({
    where: { userId },
  });

  if (!providerProfile) {
    throw new Error(
      "Provider profile not found. Please create a profile first.",
    );
  }

  const result = await prisma.meal.create({
    data: {
      name: payload.name,
      description: payload.description,
      price: payload.price,
      image: payload.image,
      categoryId: payload.categoryId,
      providerId: providerProfile.id,
    },
    include: {
      category: true,
      provider: true,
    },
  });

  return result;
};

const getAllMeals = async () => {
  return await prisma.meal.findMany({
    include: {
      category: true,
      provider: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const getSingleMeal = async (id: string) => {
  return await prisma.meal.findUnique({
    where: { id },
    include: {
      category: true,
      provider: true,
      reviews: true,
    },
  });
};

export const MealService = {
  createMeal,
  getAllMeals,
  getSingleMeal,
};
