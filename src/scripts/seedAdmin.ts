import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";

async function main() {
  const adminEmail = "hazrat@gmail.com";
  const adminPassword = "123456";

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    await prisma.user.create({
      data: {
        email: adminEmail,
        name: "Super Admin",
        password: hashedPassword,
        role: "ADMIN",
      },
    });
    console.log("Admin user seeded successfully!");
  } else {
    console.log("Admin user already exists.");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
