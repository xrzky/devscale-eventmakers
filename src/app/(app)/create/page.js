"use client";

import { Button, Input, Textarea } from "@heroui/react";
import React, { useActionState } from "react";
import { createEventAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(createEventAction, null);

  return (
    <div className="flex items-center justify-center">
      <form action={formAction} className="w-1/2 space-y-4 shadow-md p-8">
        <Input name="title" placeholder="Title" />
        <Input name="image" type="file" />
        <Input name="datetime" type="datetime-local" />
        <Input name="location" placeholder="Location" />
        <Textarea name="description" placeholder="Event description" />
        <Button isLoading={pending} type="submit" color="primary">
          Create Event
        </Button>
        {state?.status === "error" && (
          <div className="text-center text-rose-600 bg-rose-50 p-2 rounded-lg">
            {state.message}
          </div>
        )}
        {state?.status === "success" && (
          <div className="text-center text-emerald-600 bg-emerald-50 p-2 rounded-lg">
            {state.message}
          </div>
        )}
      </form>
    </div>
  );
}
