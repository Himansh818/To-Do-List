import React from "react";

const TaskContainer = ({tasks}) => {
  return (
    <div className="relative p-2 flex flex-wrap gap-x-10 top-4 gap-y-10 items-start">
      {tasks.map((task) => (
        <form
          key={task.id}
          className="card w-60 flex  
          flex-col gap-4 text-xl h-auto
           px-4 py-5 rounded-xl bg-amber-100"
        >
          <h1 className="text-cyan-950 break-words">
            {task.text}
          </h1>
          <div className="flex gap-3 justify-evenly text-white font-extrabold">
            <button className="bg-emerald-500 hover:scale-95 px-4 py-1 w-fit active:scale-75 cursor-pointer rounded-xl">
              C
            </button>
            <button className="bg-red-500 hover:scale-95 px-4 py-1 w-fit active:scale-75 cursor-pointer rounded-xl">
              X
            </button>
          </div>
        </form>
      ))}
    </div>
  );
};

export default TaskContainer;
