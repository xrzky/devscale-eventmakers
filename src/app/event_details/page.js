import { Button } from "@heroui/react";

export default function Page() {
  return (
    <main className="flex gap-6">
        <div className="w-2/6 border-2 rounded-lg border-white p-6">
            <p>image</p>
        </div>
        <div className="w-4/6 border-2 rounded-lg border-white text-white p-6 space-y-4">
          <div className="justify-items-center">
              <h1 className="text-2xl font-bold">Event Title</h1>
          </div>
          <div>
              <p>event details</p>
              <p>date and time</p>
          </div>
          <div className="justify-items-center">
            <Button
              fullWidth
              type="submit"
              radius="sm"
              className="bg-transparent border-2 border-gray-400 text-white font-semibold hover:bg-indigo-500  hover:border-white">
                Join Event
            </Button>
          </div>
        </div>
    </main>
  )
}
