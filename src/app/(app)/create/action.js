"use server";

export async function createEventAction(_, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const datetime = formData.get("datetime");
  const location = formData.get("location");
  const description = formData.get("description");

  const session = await auth();

  if (!session) {
    return {
      status: "error",
      message: "Please login to create event!",
    };
  }

  if (!title || !datetime || !description || !location) {
    return {
      status: "error",
      message: "All fields are required!",
    };
  }

  const newEvent = await prisma.event.create({
    data: {
      title,
      date: new Date(datetime),
      location,
      description,
      image: image.size !== 0 ? image.name : "",
      authorId: session.user.id,
    },
  });

  return {
    status: "success",
    message: "event created!",
  };
}
