import { Router } from "express";
import auth from "../../middleware/auth.middleware";
import { OrderController } from "./order.controller";

const router = Router();

router.get(
  "/provider-orders",
  auth("PROVIDER"),
  OrderController.getProviderOrders,
);

router.patch(
  "/update-status/:id",
  auth("PROVIDER"),
  OrderController.updateOrderStatus,
);

router.post("/create-order", auth("CUSTOMER"), OrderController.createOrder);

router.get("/my-orders", auth("CUSTOMER"), OrderController.getMyOrders);

export const OrderRoutes = router;
