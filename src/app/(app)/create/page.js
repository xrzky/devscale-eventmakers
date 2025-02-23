import { Button, Input, Textarea } from "@heroui/react";
import React from "react";

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <form className="w-1/2 space-y-4 shadow-md p-8">
        <Input name="title" placeholder="Title" />
        <Input name="image" type="file" />
        <Input name="datetime" type="datetime-local" />
        <Textarea name="description" placeholder="Event description" />
        <Button type="submit" color="primary">
          Create Event
        </Button>
      </form>
    </div>
  );
}
