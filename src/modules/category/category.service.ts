import { prisma } from "../../lib/prisma";

const createCategory = async (name: string) => {
  return await prisma.category.create({
    data: { name }
  });
};

const getAllCategories = async () => {
  return await prisma.category.findMany();
};

export const CategoryService = { createCategory, getAllCategories };