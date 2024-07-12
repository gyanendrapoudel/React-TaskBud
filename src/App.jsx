import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { nanoid } from 'nanoid'
import './App.css'
import Task from './components/Task'

function App() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])

  const handleSubmit = (e)=>{
    
      e.preventDefault();
      const newTask = {name:e.target.task.value, id: nanoid()}
      setTaskList([...taskList, newTask])
      // e.target.reset();
  }

  return (
    <div className="wrapper p-1">
      <main className="container d-grid  bg-danger rounded-3 mt-5 mb-1">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Task"
              required={true}
              name="task"
            />
            <button className="btn btn-primary"> Submit</button>
          </div>
        </form>
      </main>
      {taskList.length > 0 &&
      <div className="container  rounded-2 p-3  tasks">
        
          {taskList.map((task) => {
            return <Task key={task.id} {...task} />
          })}
      </div>}
    </div>
  )
}

export default App
