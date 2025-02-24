import { Card, CardBody } from '@heroui/react'
import React from 'react'

export const CategoryCard = ({ category, totalEvents }) => {
  return (
    <Card isHoverable isPressable shadow="none" radius="sm" className="border">
      <CardBody className="p-6 text-center">
        <div className="flex justify-center items-center space-x-4">
          <div className=" rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fontSize={48}
            >
              <path
                fill="currentColor"
                d="M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 1 1 0 4v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2m-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46c0-1.5-.8-2.77-2-3.46V6h16zM11 15h2v2h-2m0-6h2v2h-2m0-6h2v2h-2Z"
              ></path>
            </svg>
          </div>
          <div className="place-items-start">
            <h3>{category}</h3>
            <p>{totalEvents || 0} events</p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
