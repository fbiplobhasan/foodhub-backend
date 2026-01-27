import { prisma } from "../../lib/prisma";

const createProfile = async (payload: any, userId: string) => {
  return await prisma.providerProfile.create({
    data: {
      ...payload,
      userId: userId
    }
  });
};

export const ProfileService = { createProfile };