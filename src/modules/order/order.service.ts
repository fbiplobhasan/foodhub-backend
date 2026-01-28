import { OrderStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";

const createOrder = async (userId: string, payload: any) => {
  const { items, deliveryAddress } = payload;

  let totalAmount = 0;
  for (const item of items) {
    const meal = await prisma.meal.findUnique({ where: { id: item.mealId } });
    if (meal) {
      totalAmount += meal.price * item.quantity;
    }
  }

  const result = await prisma.order.create({
    data: {
      customerId: userId,
      totalAmount: totalAmount,
      deliveryAddress: payload.deliveryAddress,
      items: payload.items,
      paymentMethod: "COD",
      paymentStatus: "PENDING",
      status: "PLACED",
    },
  });

  return result;
};

const getMyOrders = async (userId: string) => {
  return await prisma.order.findMany({
    where: { customerId: userId },
    orderBy: { createdAt: "desc" },
  });
};

const getProviderOrders = async (providerId: string) => {
  const providerMeals = await prisma.meal.findMany({
    where: { providerId },
    select: { id: true },
  });

  const mealIds = providerMeals.map((meal) => meal.id);

  const allOrders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
  });

  const providerOrders = allOrders.filter((order: any) => {
    const items = order.items as any[];
    return items.some((item) => mealIds.includes(item.mealId));
  });

  return providerOrders;
};

const updateOrderStatus = async (orderId: string, status: string) => {
  const updateData: any = { status };

  if (status === "DELIVERED") {
    updateData.paymentStatus = "PAID";
  }

  const result = await prisma.order.update({
    where: { id: orderId },
    data: updateData,
  });
  return result;
};

export const OrderService = {
  createOrder,
  getMyOrders,
  getProviderOrders,
  updateOrderStatus,
};
