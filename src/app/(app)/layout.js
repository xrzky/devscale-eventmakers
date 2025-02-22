import { auth } from "@/libs/auth";
import { Button } from "@heroui/react";
import Avatar from "boring-avatars";
import Link from "next/link";

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
            <div className="flex justify-center items-center gap-2">
              <div>{session.user.name}</div>
              <Avatar
                size={28}
                name="name"
                variant="beam"
                colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
              />
            </div>
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
