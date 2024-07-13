"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Addtodo = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [post, setPost] = useState({
    task_name: "",
    time: "",
    date:"",
    userId: "",
    status: "PENDING",
  });

  useEffect(() => {
    //@ts-ignore
    if (session?.user?.id) {
      setPost((prevPost) => ({
        ...prevPost,
            //@ts-ignore
        userId: session.user.id,
      }));
    }
  }, [session]);
//@ts-ignore
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
    console.log("data at the form", post);
  };
//@ts-ignore
  const addTask = async (event) => {
    event.preventDefault();

    console.log("Submitting form with data:", post); // Debugging statement

    try {
      const response = await fetch("/api/task/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      }).then(
        //@ts-ignore
        router.push('/Completed')
      );

      if (!response.ok) {
        throw new Error("Error adding task");
      }

      console.log("Task added successfully");
    } catch (error) {
      console.log("Error adding Task..", error);
    }
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center">
        <p className="font-serif font-extrabold text-white text-3xl">
          Add Your Task Here
        </p>
      </div>
      <div className="flex justify-center p-3 m-3">
        <div className="w-fit p-4 m-4 shadow-2xl">
          <form onSubmit={addTask}>
            <div className="flex flex-col gap-2 mb-3">
              <label className="text-white" htmlFor="task_name">
                Task Name
              </label>
              <input
                className="border rounded-md h-8 border-green-600 focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                placeholder="Task Name"
                type="text"
                name="task_name"
                id="task_name"
                value={post.task_name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label className="text-white" htmlFor="date">
                Date{" "}
              </label>
              <input
                className="border rounded-md h-8 border-green-600 focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                placeholder="date"
                type="date"
                name="date"
                id="date"
                value={post.date}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label className="text-white" htmlFor="time">
                Time{" "}
              </label>
              <input
                className="border rounded-md h-8 border-green-600 focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                placeholder="Time"
                type="time"
                name="time"
                id="time"
                value={post.time}
                onChange={handleChange}
              />
            </div>
            <button
              className="border rounded-md h-8 border-green-600 focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800 w-20 text-white bg-green-800 transition transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addtodo;
