"use client";

import { Button, Input } from "@heroui/react";
import Link from "next/link";
import { useActionState } from "react";
import { loginAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(loginAction, null);
  return (
    <main className="space-y-6">
      <section>
        <h3 className="text-white text-xl font-bold">Log In</h3>
        <p className="text-white text-sm">
          Welcome back, please log in to continue
        </p>
      </section>
      <section className="space-y-2">
        <form action={formAction} className="space-y-5">
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
            className="bg-transparent border-2 border-gray-400 text-white font-semibold hover:bg-indigo-500  hover:border-white"
          >
            Log in
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
      <div className=" border border-gray-300"></div>
      <section className="flex gap-x-2">
        <p className="text-white">Don't have an account?</p>
        <Link href="/register">
          <p className="text-white hover:text-indigo-500 hover:underline">Register here</p>
        </Link>
      </section>
    </main>
  );
}
