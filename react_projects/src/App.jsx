//import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import 'bulma/css/bulma.min.css'
/* eslint-disable react/prop-types */

//import { toast, ToastContainer } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';


//1.Hello World App
/*
function App() {
  

  return (
   
      <div>
        <h1>Hello world</h1>
      </div>
      
    
  )
}

export default App*/

//2.Simple Counter

/*
function App() {
  const [counter, setCounter] = useState(0)

  const handleIncrement = ()=>{
    setCounter(counter+1)
  }

  const handleDecrement = ()=>{
    setCounter(counter-1)
  }

  return (
   
      <div >
        <button onClick={handleIncrement}>increment</button>
         <span>{counter}</span>
        <button onClick={handleDecrement}>decrement</button>

      </div>
      
    
  )
}

export default App
*/

//3.Temperature Control App

/*
function App() {

  const [temperature, setTemperature]=useState(0)

  const incrementTemperature = ()=>{
     setTemperature(temperature+1)
  }

  const decrementTemperature = ()=> {
    setTemperature(temperature-1)

  }

  if(temperature<0){

  }
  else if(0<=temperature<10){

  }
  else if(10<=temperature<25){

  }
  else{

  }

  return (
   
      <div className='temp_app'>
        <div className='temp' style={{backgroundColor: temperature<0?'#2b398a':temperature<15?'#449fd3': temperature<25?'green':'orange'}}>{temperature}&deg;C</div>
        <div className='buttons'>
          <button onClick={incrementTemperature}>+</button>
          <button onClick={decrementTemperature}>-</button>
        </div>
        
      </div>
      
    
  )
}

export default App
*/

//4.Search Filter
/*
function App() {

  const [userName, setUserName] = useState('')
  const [user, setUser] = useState([])

  let users = ['Azicojan','James','Jason','Paul','Helen','Christine','Chloe','Kelly']

  

  const handleInput = (e)=>{
    setUserName(e.target.value)
           
    
  }

 useEffect(()=>{
  if(userName){
   
    let newUser = users.filter((user)=>user.includes(userName[0].toUpperCase()+userName.slice(1)))
    setUser(newUser)
    
  }
  else{
    setUser([])
  }

 },[userName])
    
  
  

  
  

  return (
   
      <div>
        <form >
          Enter a username: 
           <input
          value={userName}
          type='text'
          onChange={handleInput}
          required/>
        </form>
        <ul style={{listStyle:'none'}}>{user.map((user,index)=><li key={index}>{user}</li>)}</ul>
      </div>
      
    
  )
}

export default App
*/

//5.Basic Registration Form

/*
const App = ()=>{
  const[firstName, setFirstName] = useState('')
  const[lastName, setLastName] = useState('')
  const[email,  setEmail] = useState('')

  

  const handleFirstName = (e)=>{
    setFirstName(e.target.value)
  }

  const handleLastName = (e)=>{
    setLastName(e.target.value)
  }

  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
       
    if(firstName==='Aziz'&&lastName==='Zulfikorov'&&email==='tokzor123@yahoo.com'){
      
       toast.success('The registration is successful.')
      
    }
    else{

        toast.error('The registration has failed')
    }

    setFirstName('')
    setLastName('')
    setEmail('')
   
  }


  return(
    <div className='container'>
      <form onSubmit={handleSubmit}>
    <input
    value={firstName}
    onChange={handleFirstName}
    className='input is-info'
    type='text'
    placeholder='First Name'
    required
    style={{margin:5}}
    />
    <input
    value={lastName}
    onChange={handleLastName}
    className='input is-info'
    type='text'
    placeholder='Last Name'
    required
    style={{margin:5}}

    />
    <input
    value={email}
    onChange={handleEmail}
    className='input is-info'
    type='text'
    placeholder='Email'
    required
    style={{margin:5}}

    />
    
    <button className='button is-success is-fullwidth' style={{margin:5}} type='submit'>Register</button>
      </form>
      <ToastContainer />
    </div>
   
  )
}

export default App

//6.React Quiz App

const QuestionsPart = (props)=>{

  const{random,questionList,points} = props
  

  return(
    
      <div>
         <h2 style={{marginTop:30,fontSize:25}}>Question {random+1}/5</h2>
         <ul>
          <li style={{marginTop:40}}>{questionList[random]}</li>
         </ul><br/><br/>
                  
         <p>
          You've scored: {points} points.
         </p>
         
      </div>
   
  )
}

const AnswersPart = ({random,handleQuestion,answersList})=>{

  return(
     <div>
        <ul>

        <li><button onClick={handleQuestion} className='quiz_button'>{answersList[random][0]}</button></li>
        <li><button onClick={handleQuestion} className='quiz_button'>{answersList[random][1]}</button></li>
        <li><button onClick={handleQuestion} className='quiz_button'>{answersList[random][2]}</button></li>
        <li><button onClick={handleQuestion} className='quiz_button'>{answersList[random][3]}</button></li>
           
       </ul>      
      </div>

  )
}

const App = ()=>{
  const[random, setRandom]=useState(0)
  const[points, setPoints]=useState(0)
  const[rightAnswer, setRightAnswer]=useState('')

  const cityQuiz = [
    {
      id:1,
      question:'What is the capital of France?',
      answers:['New York', 'London', 'Paris', 'Dublin']
    },
    {
      id:2,
      question:'What is the capital of Uzbekistan?',
      answers:['Moscow', 'Tashkent', 'Bishkek', 'Dushanbe']
    },
    {
      id:3,
      question:'Where is Spain located?',
      answers:['Asia', 'Africa', 'Europe', 'America']
    },
    {
      id:4,
      question:'Tbilisi is the capital of ...',
      answers:['Armenia', 'Azerbaijan', 'Chechnya', 'Georgia']
    },
    {
      id:5,
      question:'Where is New York located?',
      answers:['USA', 'Canada', 'Australia', 'New Zealand']
    },
    
  ]

  useEffect(()=>{
    if(random===0){
      setRightAnswer('Paris')
    }
    
    else if(random===1){
      setRightAnswer('Tashkent')
    }
         
    else if(random===2){
      setRightAnswer('Europe')
    }
         
    else if(random===3){
      setRightAnswer('Georgia')
    }

    else if(random===4){
      setRightAnswer('USA')
    }
  },[random])
  

  const handleQuestion = (event)=>{
    
    const randomNumber = Math.floor(Math.random()*cityQuiz.length);

    const buttonContent = event.target.textContent;
   // console.log('Clicked button text:', buttonContent)
        
      
      if(buttonContent===rightAnswer){
        setPoints(points+5)
      }
      
      if(randomNumber===random&&randomNumber<5){
        setRandom(randomNumber+1)
      }
      else if(randomNumber===random&&randomNumber===5){
        setRandom(randomNumber-1)
      }
      else{
        setRandom(randomNumber)
      }

     
  }

  let questionList = cityQuiz.map((quiz)=>quiz.question)
   //console.log(questionList)

  let answersList = cityQuiz.map((quiz)=>quiz.answers)
  // console.log(rightAnswer)
 
 

  return(
    
    <div className='quiz_container'>
      <div>
        <QuestionsPart random={random} questionList={questionList} points={points}/>
        <button className='quiz_button'onClick={()=>setPoints(0)}>reset</button>
      </div>
        <AnswersPart random={random} handleQuestion={handleQuestion} answersList={answersList}/>
      
    </div>      
    
  )
}

export default App*/

//9.Todo List 
const TasksToDo = ({tasksArray, deleteTask}) => {
  //const{tasksArray, deleteTask} = props
 

  return(
    <>
    <ul>
        {tasksArray.map((task)=>(
        <li key={task.id}>
          {task.task}
          <button onClick={()=>deleteTask(task.id)}>delete</button></li>))}
      </ul>
    </>
  )
}

const App = () => {
  const [task, setTask]= useState('')
  const [tasksArray, setTaskArray] = useState([])
  const [taskId, setTaskId] = useState(0)

     
  const addTask = (e) => {
    e.preventDefault()
    setTaskId(() => taskId + 1)
    setTaskArray([...tasksArray,{id:taskId, task: task}])
    setTask('')
    
  }

  const deleteTask = (id) => {
    setTaskArray((oldValues) => {
       return oldValues.filter(task => task.id !== id)
    })
  
  }
  
  //console.log(taskArray)
  

  return(
    <div>
      <h1>Todo list</h1>
      <form onSubmit={addTask}>
        <input
         type='text'
         value={task}
         onChange={(e) => setTask(e.target.value)}
        />
        <button>add a task</button>

      </form>
      <TasksToDo tasksArray={tasksArray} deleteTask={deleteTask}/>

    </div>
  )
}

export default App
