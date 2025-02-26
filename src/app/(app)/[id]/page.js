import { Button } from "@heroui/react";
import { prisma } from "@/utils/prisma";
import Image from "next/image";
import moment from "moment";

export default async function Page({ params }) {
  const { id } = await params;
  const events = await prisma.event.findUnique({
    where: {
      id: id,
    },
  });

  const users = await prisma.user.findUnique({
    where: {
      id: events.authorId,
    },
  });

  return (
    <main className="flex gap-6">
      <div className="w-2/6 border-2 rounded-lg border-white p-6">
        <Image
          alt={events.image}
          src={`https://pub-bda5341f88164a64ae18545c6f50320f.r2.dev/eventmakers/${id}/${events.image}`}
          unoptimized
          className="object-cover rounded-xl w-full h-full"
          width={270}
          height={178}
        />
      </div>
      <div className="w-4/6 border-2 rounded-lg border-white text-white p-6 space-y-4">
        <div className="justify-items-center">
          <h1 className="text-2xl font-bold">{events.title}</h1>
        </div>
        <div>
          <p className="pb-2">{events.description}</p>
          <p className="text-white ">
            {`Date & Time : ${moment(new Date(events.date)).format(
              "DD MMMM YYYY - hh:mm a"
            )}`}
          </p>
          <p>{`Location : ${events.location}`}</p>
          <p>{`Author : ${users.name}`}</p>
        </div>
        <div className="justify-items-center">
          <Button
            fullWidth
            type="submit"
            radius="sm"
            className="bg-transparent border-2 border-gray-400 text-white font-semibold hover:bg-indigo-500  hover:border-white"
          >
            Join Event
          </Button>
        </div>
      </div>
    </main>
  );
}
