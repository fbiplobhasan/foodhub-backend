import express, { Request, Response } from "express";
import cors from "cors";
import { AuthRoutes } from "./modules/auth/auth.route";
import { MealRoutes } from "./modules/meal/meal.route";
import { CategoryRoutes } from "./modules/category/category.route";
import { ProfileRoutes } from "./modules/profile/profile.route";
import { OrderRoutes } from "./modules/order/order.route";
import { ReviewRoutes } from "./modules/review/review.route";
import { ProviderRoutes } from "./modules/provider/provider.route";
import globalErrorHandler from "./middleware/globarErrorHandler";

const app = express();

app.use(
  cors({
    origin: process.env.APP_URL || "http://localhost:4000",
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/categories", CategoryRoutes);
app.use("/api/v1/profiles", ProfileRoutes);
app.use("/api/v1/meals", MealRoutes);
app.use("/api/v1/orders", OrderRoutes);
app.use("/api/v1/reviews", ReviewRoutes);
app.use("/api/v1/providers", ProviderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Food-hub");
});

app.use(globalErrorHandler);
export default app;
