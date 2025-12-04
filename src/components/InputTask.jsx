import React, { useState } from "react";


const InputTask = ({onAdd}) => {  // prop received
  const [task, setTask] = useState([]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if(task.trim() === "") return;   // if input empty submit kre to kux nhi return krna 
        console.log(task);

        onAdd(task);    // prop me value pass ki gyi

        setTask(""); // clear input after adding task
        
      }}
      className="flex flex-col w-screen "
    >
      <input
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        className=" rounded-t-xl py-3 px-4 bg-white
         text-black font-semibold
         "
        type="text"
        placeholder="Enter Your Task "
      />

      <button type="submit"
        className="submit cursor-pointer text-white 
        p-3 active:scale-75 rounded-b-xl"
      >
        Add Task
      </button>
    </form>
  );
};

export default InputTask;
