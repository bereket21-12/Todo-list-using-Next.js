import { connectTODB } from "@/utility/database";
import Todo from "@/models/todos";

export const PATCH = async (req) => {
  try {
    await connectTODB();

    const { id, name, time, status,date } = await req.json();

    if (!id) {
      return new Response("Task ID is required", { status: 400 });
    }

    const updatedTask = await Todo.updateOne(
      { _id: id },
      { $set: { name, time, status,date } }
    );

    if (updatedTask.nModified === 0) {
      return new Response("No task was updated", { status: 404 });
    }

    return new Response("Task updated successfully", { status: 200 });
  } catch (error) {
    console.error("Unable to update task", error);
    return new Response("Unable to update task", { status: 500 });
  }
};
