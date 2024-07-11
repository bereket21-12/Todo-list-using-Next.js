import Link from "next/link";
import React from "react";

export const Table = () => {
const todos = [
  {
    No:1,Name:'Read Book',Time:'July 29',Status:'Pending',
  },
  {
    No:2,Name:'Play Football',Time:'July 19',Status:'Pending',
  },
  {
    No:3,Name:'Dance',Time:'July 20',Status:'Pending',
  },
  {
    No:4,Name:'Washing Cloth',Time:'September 4',Status:'Pending',
  },
  {
    No:5,Name:'Travling',Time:'Augest 7',Status:'Pending',
  }
]

  return (
    <div className="h-screen">
    <div className="flex justify-end pr-16 font-bold">
      <Link className="text-white border rounded-md  p-1" href={'Addtask'}>
        Add Tasks
      </Link>
    </div>
      <div className="flex justify-center ">
        <h1 className="font-serif text-2xl text-white font-extrabold">
        My Todo List 
        </h1>
      </div>
    <div className="p-6 flex justify-center">
      <table className=" text-white border-collapse w-screen table-auto  border-spacing-2 border border-slate-500">
        <thead className="text-left">
            <tr className="border border-slate-500">
            <th >No.</th>
            <th>Task Name</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
            </tr>

        </thead>
        <tbody className="max-h-40 ">
          
            {
              todos.map((task)=>(
                <tr className="border">
                <td>{task.No}</td>
                <td>{task.Name}</td>
                <td>{task.Time}</td>
                <td>{task.Status}</td>
                <td>
                <div className="flex gap-6">
                <button className="size-16 h-10 border rounded-md p-1 border-red-600">Done</button>
                <button className="size-16 h-10 border bg-green-600 text-white p-1 rounded-md">Edit</button>
                <button className="size-16 h-10  bg-orange-600 text-white border p-1 rounded-md">Delete</button>
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
