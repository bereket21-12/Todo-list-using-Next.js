import React from "react";

const Addtodo = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center">
        <p className="font-serif font-extrabold text-white text-3xl">
          Add Your Task Here
        </p>
      </div>
      <div className="flex justify-center p-3 m-3 ">
        <div className="w-fit p-4 m-4 shadow-2xl ">
          <form action="">
            <div className="flex flex-col gap-2 mb-3">
              <label className="text-white " htmlFor="task_name">Task Name</label>
              <input
                className="border rounded-md h-8 border-green-600 focus:outline-none  focus:border-green-800 focus:ring-1 focus:ring-green-800"
                placeholder="Task Name"
                type="text"
                name="task_name"
                id="task_name"
              />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label className="text-white" htmlFor="time">Time </label>
              <input
                className="border rounded-md h-8 border-green-600 focus:outline-none  focus:border-green-800 focus:ring-1 focus:ring-green-800"
                placeholder="Time"
                type="text"
                name="time"
                id="time"
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
