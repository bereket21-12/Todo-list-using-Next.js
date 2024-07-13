"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const UpdateTask = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [task, setTask] = useState({
    name: "",
    date: "",
    time: "",
    status: "",
  });

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`/api/task/${id}`);
      const data = await response.json();
      if (data.date) {
        // Format the date
        const formattedDate = new Date(data.date).toISOString().split("T")[0];
        setTask({ ...data, date: formattedDate });
      }
      //setTask(data);
    };
    if (id) {
      fetchTask();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/task/update`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, ...task }),
      });

      if (!response.ok) {
        throw new Error("Error updating task");
      }

      console.log("Task updated successfully");
      router.push("/Completed");
    } catch (error) {
      console.log("Error updating task", error);
    }
  };

  return (
    <div className="h-screen">
      <div className="flex justify-center">
        <h1 className="font-serif text-2xl text-white font-extrabold">
          Update Task
        </h1>
      </div>
      <div className="p-6 flex justify-center">
        <form onSubmit={handleUpdate}>
          <div className="flex flex-col gap-2 mb-3">
            <label className="text-white" htmlFor="name">
              Task Name
            </label>
            <input
              className="border rounded-md h-8 border-green-600 focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
              placeholder="Task Name"
              type="text"
              name="name"
              id="name"
              value={task.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 mb-3">
            <label className="text-white" htmlFor="time">
              Date
            </label>
            <input
              className="border rounded-md h-8 border-green-600 focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
              placeholder="Date"
              type="date"
              name="date"
              id="date"
              value={task.date}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 mb-3">
            <label className="text-white" htmlFor="time">
              Time
            </label>
            <input
              className="border rounded-md h-8 border-green-600 focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
              placeholder="Time"
              type="text"
              name="time"
              id="time"
              value={task.time}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 mb-3">
            <label className="text-white" htmlFor="status">
              Status
            </label>
            <select
              className="border rounded-md h-8 border-green-600 focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
              name="status"
              id="status"
              value={task.status}
              onChange={handleChange}
            >
              <option value="PENDING">PENDING</option>
              <option value="DONE">DONE</option>
            </select>
          </div>

          <button
            className="border rounded-md h-8 border-green-600 focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800 w-20 text-white bg-green-800 transition transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
