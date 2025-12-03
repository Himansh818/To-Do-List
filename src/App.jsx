import React, { useState } from 'react'
import "./App.css"
import InputTask from './components/InputTask'
import TaskContainer from './components/TaskContainer'

const App = () => {

const [tasks, setTasks] = useState([]);

const addTask = (text) =>{
  setTasks([...tasks, {id: Date.now(), text }]);
}


  return (
    <>
    
    <div className='main h-screen w-screen bg-gray-700 text-2xl text-white px-30 py-10'>
      
      {/* as a prop pass kra */}
      <InputTask onAdd={addTask} />  
      <TaskContainer tasks={tasks} />
    </div>
    </>
  )
}

export default App
