"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function registerAction(_, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!name || !email || !password) {
    return {
      status: "error",
      message: "All field is required",
    };
  }

  if (password.length < 8) {
    return {
      status: "error",
      message: "Password must be at least 8 characters",
    };
  }

  // check collision for user is registered
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    return {
      status: "error",
      message: "User is already registered",
    };
  }

  // create user
  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return {
    status: "success",
    message: "Register is successfully. Please log in",
  };
}
