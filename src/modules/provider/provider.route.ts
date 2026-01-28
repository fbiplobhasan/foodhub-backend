import { Router } from "express";
import auth from "../../middleware/auth.middleware";
import { ProviderController } from "./provider.controller";

const router = Router();

router.get(
  "/stats", 
  auth("PROVIDER"), 
  ProviderController.getProviderStats
);

export const ProviderRoutes = router;