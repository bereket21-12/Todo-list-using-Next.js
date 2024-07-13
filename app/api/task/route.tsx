import { connectTODB } from "@/utility/database";
import Todo from "@/models/todos";
    //@ts-ignore
export const GET = async (req) => {
  try {
    await connectTODB();
    const userId = new URL(req.url).searchParams.get('userId');
    
    if (!userId) {
      return new Response('User ID is required', { status: 400 });
    }

    const tasks = await Todo.find({ creator: userId }).populate('creator');

    return new Response(JSON.stringify(tasks), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch the data', { status: 500 });
  }
};
