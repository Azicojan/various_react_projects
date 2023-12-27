import '../styles/navbar.css'
import React from 'react'
import { useState } from 'react'
import links from './navbarLinks'


const Navbar= ()=>{
    const [isShown, setIsShown]=useState(true)

    const handleShown = ()=>{
        setIsShown(!isShown)
    }

    return(
        <>
        <div className='navbar'>
            <div className='react_title'>
               <h3>React<i className='fa-brands fa-react'></i></h3>                         
            </div>
            
            <div className="links">
                          
             {links.map((link, index)=><button className='link' key={index}>{link}</button>)}
              
            </div>
             
             <button className='signup'>Sign Up</button>

                <div className='hamburger'>
                  <h3 onClick={handleShown}>{isShown?<i className="fa-solid fa-bars"></i>:<i className='fa-solid fa-xmark'></i>}</h3>
                </div>             
               
        </div>
        <div className={`links${isShown ? 'hidden':'shown' }`}>
             <button className='link'>Home</button>
             <button className='link'>Services</button>
             <button className='link'>Products</button>
             <button className='link'>Contact Us</button>
             <button className={`signup${isShown ? 'hidden':'shown'}`}>Sign Up</button>
        </div>
        </>
       
    )
}
export default Navbar



