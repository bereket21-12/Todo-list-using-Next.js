import { connectTODB } from "@/utility/database";
import Todo from "@/models/todos";
    //@ts-ignore
export const DELETE = async (req) => {
  try {
    await connectTODB();
    const Id = new URL(req.url).searchParams.get("Id");
    if (!Id) {
      return new Response("Todo ID is required", { status: 400 });
    }

    await Todo.findByIdAndDelete(Id);

    return new Response("Todo deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete the data", { status: 500 });
  }
};
