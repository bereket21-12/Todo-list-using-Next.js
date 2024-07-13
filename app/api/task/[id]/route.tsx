import { connectTODB } from "@/utility/database";
import Todo from "@/models/todos";

export const GET = async (req) => {
  try {
    await connectTODB();
    const id = new URL(req.url).pathname.split('/').pop(); // Extract ID from URL

    if (!id) {
      return new Response('Task ID is required', { status: 400 });
    }

    const task = await Todo.findById(id).populate('creator');

    if (!task) {
      return new Response('Task not found', { status: 404 });
    }

    return new Response(JSON.stringify(task), { status: 200 });
  } catch (error) {
    console.error('Error fetching task:', error);
    return new Response('Failed to fetch the data', { status: 500 });
  }
};


export const PATCH = async (req) => {
  try {
    await connectTODB();
    const { id, task_name, time, status } = await req.json();

    const updatedTask = await Todo.findByIdAndUpdate(
      id,
      { task_name, time, status },
      { new: true }
    );

    if (!updatedTask) {
      return new Response('Task not found', { status: 404 });
    }

    return new Response(JSON.stringify(updatedTask), { status: 200 });
  } catch (error) {
    return new Response('Failed to update the task', { status: 500 });
  }
};
