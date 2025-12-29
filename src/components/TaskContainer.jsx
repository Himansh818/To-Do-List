import React, { useState } from "react";

const TaskContainer = ({ onedit, onDelete, onSave, tasks, editText, setEditText }) => {



  return (
    <div className="relative p-10 flex flex-wrap justify-center gap-x-10 top-4 gap-y-10 items-start">
      {tasks.map((task) => (
        <form
          key={task.id}
          className="card w-60 flex flex-col gap-4 text-xl h-auto px-4 py-5 rounded-xl"
        >
          {/* If editing, show input */}
          {task.isEditing ? (
            <input
              type="text"
              className="text-cyan-950 p-2 rounded-md border border-gray-300"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            <h1 className="text-white font-semibold break-words">{task.text}</h1>
          )}

          <div className="flex gap-3 justify-evenly text-white font-extrabold">
            {task.isEditing ? (
              // SAVE BUTTON
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onSave(task.id);
                }}
                className="bg-blue-500 hover:scale-95 px-4 py-1 w-fit active:scale-75 cursor-pointer rounded-xl"
              >
                Save
              </button>
            ) : (
              // EDIT BUTTON
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setEditText(task.text); // populate input
                  onedit(task.id);
                }}
                className="bg-orange-500 hover:scale-95 px-4 py-1 w-fit active:scale-75 cursor-pointer rounded-xl"
              >
                ✏
              </button>
            )}

            {/* DELETE BUTTON */}
            <button
              onClick={(e) => {
                e.preventDefault();
                onDelete(task.id);
              }}
              className="bg-orange-600 hover:scale-95 px-4 py-1 w-fit active:scale-75 cursor-pointer rounded-xl"
            >
              🗑
            </button>
          </div>
          {
            console.log(task.id)      
          }
        </form>
      ))}
    </div>
  );
};

export default TaskContainer;
