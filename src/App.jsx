import React, { useState } from "react";
import "./App.css";
import InputTask from "./components/InputTask";
import TaskContainer from "./components/TaskContainer";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editText, setEditText] = useState(""); // temporarily text

  // adding tasks
  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, isEditing: false }]);
  };

  //start editing task
  const editingTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: true } : task // edit mode on
      )
    );
  };
  const saveEditing = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editText, isEditing: false } : task
      )
    );
    setEditText("");
  };

  // deleting task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="main min-h-screen h-auto w-screen text-2xl text-white py-10">
        {/* as a prop pass kra */}
        <InputTask onAdd={addTask} />
        <TaskContainer
          onedit={editingTask}
          onDelete={deleteTask}
          tasks={tasks}
          editText ={editText}
          setEditText={setEditText}
          onSave={saveEditing}
        />
      </div>
    </>
  );
};

export default App;
