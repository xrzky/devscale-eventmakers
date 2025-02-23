import { auth } from "@/libs/auth";
import { Button } from "@heroui/react";
import Link from "next/link";
import { DropdownUser } from "./_components/dropdown-user";

export default async function Layout({ children }) {
  const session = await auth();

  return (
    <div className="relative">
      <header className="w-full px-4 py-4 flex justify-between items-center border-b-1">
        <div className="font-medium text-lg">Eventmakers Logo</div>
        {session ? (
          <div className="flex gap-6 items-center">
            <Button variant="bordered" color="secondary">
              Create Event
            </Button>
            <DropdownUser session={session} />
          </div>
        ) : (
          <Button
            as={Link}
            href="/login"
            className="text-white hover:bg-indigo-700"
          >
            Log In
          </Button>
        )}
      </header>
      <main className="py-12">{children}</main>
    </div>
  );
}
