// src/modules/profile/profile.route.ts
import { Router } from "express";
import { ProfileController } from "./profile.controller";
import auth from "../../middleware/auth.middleware";

const router = Router();

router.post(
  "/create-profile",
  auth("PROVIDER"),
  ProfileController.createProfile,
);

export const ProfileRoutes = router;
