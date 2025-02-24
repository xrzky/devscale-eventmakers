import { Button, Card, CardBody, CardHeader } from '@heroui/react'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'

export const EventCard = ({ id, title, datetime, location, image }) => {
  return (
    <Card
      as={Link}
      href={`/${id}`}
      className="py-2 bg-black border-white border cursor-pointer"
    >
      <CardHeader className="overflow-hidden">
        <div className="w-[270px] h-[178px]">
          <Image
            alt={title}
            src={`https://pub-bda5341f88164a64ae18545c6f50320f.r2.dev/eventmakers/${id}/${image}`}
            unoptimized
            className="object-cover rounded-xl w-full h-full"
            width={270}
            height={178}
          />
        </div>
      </CardHeader>
      <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-medium text-white ">{title}</h4>
        <small className="text-gray-300 pb-2 ">
          {moment(new Date(datetime)).format('DD MMMM YYYY - hh:mm a')}
        </small>
        <p className="text-tiny uppercase font-bold text-white">{location}</p>
        <div className="mt-auto w-full pt-2">
          <Button
            fullWidth
            className="text-tiny text-white bg-black/20 hover:bg-indigo-500 border-white border "
            color="default"
            radius="lg"
            size="sm"
            variant="flat"
          >
            Join Event
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}
