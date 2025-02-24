import { Button } from '@heroui/react'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <section className="flex flex-wrap items-center justify-between w-full ">
      <div className="max-w-lg flex flex-col gap-4">
        <h1 className="text-5xl/tight text-white font-bold">
          Empower Your{' '}
          <span className="text-indigo-700 bg-yellow-400 inline-flex items-center h-12 w-max">
            Events
          </span>
          Engage Your{' '}
          <span className="text-indigo-700 bg-yellow-400 inline-flex items-center h-12 w-max">
            Audience
          </span>{' '}
        </h1>
        <p className="text-base leading-8 md:text-lg text-sky-50">
          From planning to execution, create interactive and immersive event
          experiences.
        </p>
        <div className="mt-3 flex items-center justify-end space-x-4">
          <Button
            radius="sm"
            className="bg-transparent border-2 hover:bg-indigo-500 text-white  font-semibold "
          >
            Explore
          </Button>
          <Button
            radius="sm"
            className="bg-indigo-500 border-2 hover:bg-yellow-400 text-white hover:text-black font-semibold "
          >
            Create Now
          </Button>
        </div>
      </div>
      <div>
        <Image
          src="/images/hero-section.png"
          alt="hero-image"
          width={584}
          height={400}
        />
      </div>
    </section>
  )
}
