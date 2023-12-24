import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Nabbar.css'
import ReorderIcon from '@material-ui/icons/Reorder'
function Navbar() {

  const [expandNabvar, setExpandNavbar]=useState(false);
  
  const location=useLocation();

  useEffect(()=>{
    setExpandNavbar(false);
  },[location])

  return (
    <div className='navbar' id={expandNabvar ? 'open':'close'}> 
        <div className='toggleButton'>
            <button onClick={()=>{
              setExpandNavbar((prev)=>!prev)
              }}>
                <ReorderIcon/>
            </button>
        </div>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/experience'>Experience</Link>
        </div>
    </div>
  )
}

export default Navbar