import { prisma } from '@/utils/prisma'
import { Button, Card, CardBody, CardHeader, Skeleton } from '@heroui/react'

export const SectionEventsSkeleton = async () => {
  const events = await prisma.event.findMany()
  return (
    <section className="space-y-4 pt-8">
      <h1 className="text-white text-2xl font-semibold">Popular Events</h1>
      <div className="grid grid-cols-4 gap-8">
        {events.map((event) => {
          return (
            <Card
              key={event.id}
              className="py-2 bg-black border-white border cursor-pointer"
            >
              <CardHeader className="overflow-hidden">
                <Skeleton className="w-[270px] h-[178px] bg-indigo-100 rounded-lg">
                  <div className="h-24 rounded-lg bg-default-300" />
                </Skeleton>
              </CardHeader>
              <CardBody className="pb-0 pt-2 px-4 flex-col items-start space-y-2">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-3 w-2/5 rounded-lg bg-default-300" />
                </Skeleton>
                <Skeleton className="mb-2 w-full rounded-lg">
                  <div className="h-3 w-5/5 rounded-lg bg-default-300" />
                </Skeleton>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
