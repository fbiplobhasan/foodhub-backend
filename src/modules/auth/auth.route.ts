import { Router } from "express";
import { AuthController } from "./auth.controller";
import auth from "../../middleware/auth.middleware";

const router = Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get(
  "/profile",
  auth("CUSTOMER", "PROVIDER", "ADMIN"),
  AuthController.getProfile,
);

export const AuthRoutes = router;
