import { prisma } from "../../lib/prisma";

const getProviderStats = async (providerId: string) => {
  const meals = await prisma.meal.findMany({
    where: { providerId },
    select: { id: true },
  });
  const mealIds = meals.map((m) => m.id);

  const allOrders = await prisma.order.findMany();
  const providerOrders = allOrders.filter((order: any) => {
    const items = order.items as any[];
    return items.some((item) => mealIds.includes(item.mealId));
  });

  const totalSales = providerOrders
    .filter((o) => o.status === "DELIVERED")
    .reduce((sum, o) => sum + o.totalAmount, 0);

  const reviews = await prisma.review.aggregate({
    where: { mealId: { in: mealIds } },
    _avg: { rating: true },
    _count: { id: true },
  });

  return {
    totalOrders: providerOrders.length,
    totalSales,
    averageRating: reviews._avg.rating || 0,
    totalReviews: reviews._count.id,
  };
};

export const ProviderService = {
  getProviderStats,
};
