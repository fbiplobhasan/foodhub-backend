import { Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const result = await OrderService.createOrder(user.userId, req.body);

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to place order",
    });
  }
};

const getMyOrders = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const result = await OrderService.getMyOrders(user.userId);
    res.status(200).json({ success: true, data: result });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getProviderOrders = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const result = await OrderService.getProviderOrders(user.userId);
    res.status(200).json({ success: true, data: result });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const result = await OrderService.updateOrderStatus(id as string, status);
    res.status(200).json({
      success: true,
      message: "Status updated!",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const OrderController = {
  createOrder,
  getMyOrders,
  getProviderOrders,
  updateOrderStatus,
};
