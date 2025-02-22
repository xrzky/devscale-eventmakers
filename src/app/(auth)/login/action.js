"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(_, formData) {
  const cookieStore = await cookies();
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
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

  // check collision (user not found)
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return {
      status: "error",
      message: "User not found, please register",
    };
  }

  // login user
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    return {
      status: "error",
      message: "Invalid Credentials",
    };
  }

  // create session
  const newSession = await prisma.session.create({
    data: {
      userId: user.id,
    },
  });

  cookieStore.set("sessionId", newSession.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: true,
  });

  redirect("/");
}
