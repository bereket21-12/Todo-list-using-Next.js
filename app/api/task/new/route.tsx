import { connectTODB } from "@/utility/database";
import Todo from "@/models/todos";
    //@ts-ignore
export const POST = async (req) => {
  await connectTODB();
  const { task_name, time,date, userId,status } = await req.json();

  try {
    const newTask = new Todo({creator:userId,date,time,name:task_name,status})
    // console.log(newTask)
    await newTask.save()

    return new Response(JSON.stringify(newTask),{
        status:201
    })
  } catch (error) {

    console.log('Unable To Add task',Error)
    
  }
};
