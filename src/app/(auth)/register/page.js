"use client";

import { Button, Input } from "@heroui/react";
import Link from "next/link";
import { useActionState } from "react";
import { registerAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(registerAction, null);
  return (
    <main className="space-y-6">
      <section>
        <h3 className="text-white text-xl font-bold">Register</h3>
        <p className="text-white text-sm">Create an account to continue</p>
      </section>
      <section className="space-y-2">
        <form action={formAction} className="space-y-5">
          <Input
            name="name"
            placeholder="Fullname"
            variant="flat"
            radius="sm"
          />
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            variant="flat"
            radius="sm"
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            variant="flat"
            radius="sm"
          />
          <Button
            isLoading={pending}
            fullWidth
            type="submit"
            radius="sm"
            className="bg-transparent border-2 hover:bg-indigo-700 text-white shadow-sm font-semibold "
          >
            Register
          </Button>
        </form>
      </section>
      {state?.status === "error" && (
        <div className="text-center text-rose-600 bg-rose-50 p-2 rounded-md">
          {state.message}
        </div>
      )}
      {state?.status === "success" && (
        <div className="text-center text-emerald-600 bg-emerald-50 p-2 rounded-lg">
          {state.message}
        </div>
      )}
      <div className="border border-gray-300"></div>
      <section className="flex justify-between items-center">
        <p className="text-white">Already have an account?</p>
        <Button as={Link} href="/login" radius="sm" className="font-semibold">
          Login
        </Button>
      </section>
    </main>
  );
}
