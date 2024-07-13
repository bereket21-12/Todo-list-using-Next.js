'use client'

import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const Table = () => {
  let n = 1;
  const router = useRouter();
  const { data: session } = useSession();
  const [todo, setTodo] = useState([]);

  useEffect(() => {

    const fetchTodos = async () => {
       //@ts-ignore
      if (session?.user?.id) {
         //@ts-ignore
        const response = await fetch(`/api/task?userId=${session.user.id}`);
        const data = await response.json();
        setTodo(data);
      }
    };
    fetchTodos();
  }, [session]);
 //@ts-ignore
  const handleDelete = async (e, id) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/task/delete?Id=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error Deleting task");
      }

      console.log("Task Deleted successfully");

      // Remove the deleted task from the state
      alert("Task Deleted successfully")
       //@ts-ignore
      setTodo((prevTodo) => prevTodo.filter((task) => task._id !== id));
    } catch (error) {
      console.log("Error Deleting Task..", error);
    }
  };

  return (
    <div className="h-screen">
      <div className="flex justify-end pr-16 font-bold">
        <Link className="text-white border rounded-md p-1" href={'Addtask'}>
          Add Tasks
        </Link>
      </div>
      <div className="flex justify-center">
        <h1 className="font-serif text-2xl text-white font-extrabold">
          My Todo List
        </h1>
      </div>
      <div className="p-6 flex justify-center">
        <table className="text-white border-collapse w-screen table-auto border-spacing-2 border border-slate-500">
          <thead className="text-left">
            <tr className="border border-slate-500">
              <th>No.</th>
              <th>Task Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="max-h-40">
            {
              todo.map((task) => (
                <tr className="border" key={ //@ts-ignore
                  task._id}>
                  <td>{n++}</td>
                  <td>{ //@ts-ignore 
                  task.name}</td>
                  <td>{ //@ts-ignore
                  task.date.split('T')[0]}</td>
                  <td>{ //@ts-ignore
                  task.time}</td>
                  <td>{ //@ts-ignore
                  task.status}</td>
                  <td>
                    <div className="flex gap-6">
                      <button onClick={()=>router.push(`/Update?id=${ //@ts-ignore
                        task._id}`)} className="size-16 h-10 border bg-green-600 text-white p-1 rounded-md">Edit</button>
                      <button onClick={(e) =>  //@ts-ignore
                        handleDelete(e, task._id)} className="size-16 h-10 bg-orange-600 text-white border p-1 rounded-md">Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
