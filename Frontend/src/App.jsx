import React, { useState,useEffect } from "react";
import "./App.css";
import InputTask from "./components/InputTask";
import TaskContainer from "./components/TaskContainer";


const App = () => {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : []; // If tasks exist, load them, otherwise use empty array
  });

 // Save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks)); // Only update localStorage if there are tasks
    }else {
      localStorage.removeItem('tasks'); // If there are no tasks, remove tasks from localStorage
    }
  }, [tasks]); // This will run every time `tasks` changes


  const [editText, setEditText] = useState(""); // temporarily text

  // adding tasks
  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, isEditing: false }]);
  };

  //start editing task
  const editingTask = (id) => {
    setTasks(
      tasks.map(
        (task) => (task.id === id ? { ...task, isEditing: true } : task) // edit mode on
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

  const [test, setTest] = useState("");
  return (
    <>
      <div className="main min-h-screen h-auto w-screen text-2xl text-white py-10">
        {/* as a prop pass kra */}
        <InputTask onAdd={addTask} />
        <TaskContainer
          onedit={editingTask}
          onDelete={deleteTask}
          tasks={tasks}
          editText={editText}
          setEditText={setEditText}
          onSave={saveEditing}
        />

      </div>
    </>
  );
};

export default App;
