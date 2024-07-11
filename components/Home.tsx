import React from "react";

const Home = () => {
  return (
    <div className=" h-screen  flex flex-col items-center  text-base/loose mt-24 ">
      <h1 className="font-serif text-white text-2xl font-extrabold">Hello</h1>
      <h1 className="font-serif text-white text-2xl font-extrabold">
        This is Todo List App
      </h1>
      <p className="font-serif text-white font-light">
        You Have to Signup First To Add Tasks
      </p>
      <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md transition duration-500 ease-in-out transform hover:scale-105 glow-effect">
        SignUp
      </button>
    </div>
  );
};

export default Home;
