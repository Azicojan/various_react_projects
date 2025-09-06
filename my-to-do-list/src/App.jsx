import { useState } from 'react'
import './App.css'

const App = () => {

  const [task, setTask] = useState('')
  const [list, setList] = useState([])
  const [taskId, setTaskId] = useState(0)
  

  const handleChange = (e) => {
    e.preventDefault()
    setTask(e.target.value)
  }

  const handleInput = (e) => {
   e.preventDefault()
   
   setList([...list,{id: taskId, task: task}])
   setTaskId(() => taskId + 1)
   
   setTask('')
    
  }

  const handleDelete = (id) => {
    setList((oldValues) => {
       return oldValues.filter(task => task.id !== id)
    })
  
  }

  //console.log(list)
  
  return(
    <div>
      <h2>My To do list</h2>
      <form onSubmit={handleInput}>
      <input 
        type='text'
        onChange={handleChange}
        value={task}
      />
      <button type='submit'>Add a task</button>
      </form>
      
        <ul style={{listStyle:'none'}}>
          {list.map((todo) => <li key={todo.id}>{todo.task}<button onClick={() => handleDelete(todo.id)}>delete</button></li>)}
        </ul>
        
    </div>
  )
}

export default App
