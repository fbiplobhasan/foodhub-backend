import { prisma } from "../../lib/prisma";

const getAllUsersFromDB = async () => {
  const result = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};

const updateUserStatusInDB = async (userId: string, status: string) => {
  const validStatuses = ["ACTIVE", "SUSPENDED"];
  if (!validStatuses.includes(status)) {
    throw new Error("Invalid status");
  }
  const result = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      status: status,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

export const AdminService = {
  getAllUsersFromDB,
  updateUserStatusInDB,
};
