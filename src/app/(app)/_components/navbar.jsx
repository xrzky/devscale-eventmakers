import { auth } from '@/libs/auth'
import { Button } from '@heroui/react'
import Link from 'next/link'
import { DropdownUser } from './dropdown-user'

export const Navbar = async () => {
  const session = await auth()
  return (
    <header className="w-full shadow-md ">
      <div className="max-w-6xl py-4 mx-auto flex justify-between items-center">
        <Link href="/" className=" cursor-pointer text-white ">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 56 56"
              fontSize={24}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M7.627 16.697L23.812 5.364a4 4 0 0 1 5.57.982l2.553 3.645q.056.08.107.163zM2.147 29.84L1.04 25.708a4 4 0 0 1 2.83-4.898L44.438 9.94a4 4 0 0 1 4.899 2.828l1.151 4.298a3.2 3.2 0 0 1-1.121 3.35a5.001 5.001 0 0 0 2.433 8.903a3.08 3.08 0 0 1 2.576 2.255l1.172 4.377a4 4 0 0 1-2.828 4.899L12.15 51.72a4 4 0 0 1-4.898-2.828l-1.103-4.118a3.48 3.48 0 0 1 1.16-3.6a5.001 5.001 0 0 0-2.37-8.812a3.46 3.46 0 0 1-2.791-2.52m35.478-6.689a3 3 0 1 0-1.553-5.795a3 3 0 0 0 1.553 5.795m2.07 7.728a3 3 0 1 0-1.552-5.796a3 3 0 0 0 1.553 5.796m2.071 7.727a3 3 0 1 0-1.552-5.795a3 3 0 0 0 1.552 5.795"
              ></path>
            </svg>
            <h3 className="font-[inter] tracking-tight font-medium text-4xl">
              Eventmakers.
            </h3>
          </div>
        </Link>
        {session ? (
          <div className="flex gap-6 items-center">
            <Button
              as={Link}
              href="/create"
              variant="bordered"
              className="bg-transparent border-2 border-gray-400 text-white font-semibold hover:bg-indigo-500"
            >
              Create Event
            </Button>
            <DropdownUser session={session} />
          </div>
        ) : (
          <Button
            as={Link}
            href="/login"
            className="text-white bg-indigo-700 hover:bg-opacity-55"
          >
            Log In
          </Button>
        )}
      </div>
    </header>
  )
}
