import { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { nanoid } from 'nanoid'
import './App.css'
import Task from './components/Task'

function App() {
  const [task, setTask] = useState({name:""})
  const [taskList, setTaskList] = useState([])
  const [btn, setBtn] = useState('Submit')
  const [change, setChange] = useState(false)
  const handleSubmit = (e)=>{
   
      e.preventDefault();
       if (!change) {
         return alert('same input')
       }
      
     if(btn==='Edit'){
          setTask({name:e.target.name.value,id:task.id})
          const newTaskList= taskList.map((item)=>{
            if(item.id===task.id){
              item.name = e.target.name.value
            }
            return item
          })
          setTask({name:''})
          setTaskList(newTaskList)
          setBtn('Submit')
          setChange(false)
          return
     }
      setTaskList([...taskList, task])
      setTask({ name: '' })
      setBtn('Submit')
      setChange(false)
  }
   const handleEdit = (id) => {
     const item = taskList.find((task)=>task.id===id)
     setTask(item)
     setBtn('Edit')
   }
   const handleDelete = (id) => {
     setBtn('Submit')
     const newList = taskList.filter((item)=>item.id!==id)
     setTaskList(newList)
     setChange(true)
    
     setTask({name:""})
   }

   const handleChange = (e)=>{
      setChange(true)
      const { name, value } = e.target

      if(btn==="Edit"){
      
       return setTask({ id: task.id, [name]: value })
       
      }
      setTask({ id: nanoid(), [name]: value })
      
   }

  return (
    <div className="wrapper p-1">
      <main className="container d-grid  bg-danger rounded-3 mt-5 mb-1 ">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3 ">
            <input
              type="text"
              className="form-control "
              placeholder="Task"
              required={true}
              name="name"
              value={task.name}
              onChange={handleChange}

            />
            <button className="btn btn-primary flex-grow-2 " type="submit">
              {btn}
            </button>
          </div>
        </form>
      </main>
      {taskList.length > 0 && (
        <div className="container  rounded-2 p-3  tasks">
          {taskList.map((task) => {
            return (
              <Task
                key={task.id}
                {...task}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default App
