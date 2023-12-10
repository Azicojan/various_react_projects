import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import 'bulma/css/bulma.min.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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