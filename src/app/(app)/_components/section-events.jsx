import { prisma } from '@/utils/prisma'
import { EventCard } from './event-card'

export const SectionEvents = async () => {
  const events = await prisma.event.findMany()

  await new Promise((resolve) => setTimeout(resolve, 3000))

  return (
    <section className="space-y-4 pt-8">
      <h1 className="text-white text-2xl font-semibold">Popular Events</h1>
      <div className="grid grid-cols-4 gap-8">
        {events.map((event) => {
          return (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              image={event.image}
              datetime={event.date.toString()}
              location={event.location}
            />
          )
        })}
      </div>
    </section>
  )
}
