import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { ProviderService } from "./provider.service";

const getProviderStats = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;

    if (!user) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const profile = await prisma.providerProfile.findUnique({
      where: { userId: user.userId },
    });

    if (!profile) {
      return res
        .status(404)
        .json({ success: false, message: "Provider profile not found" });
    }

    const result = await ProviderService.getProviderStats(profile.id);

    return res.status(200).json({
      success: true,
      message: "Analytics fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export const ProviderController = {
  getProviderStats,
};
