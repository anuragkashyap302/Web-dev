import React from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {
    const navigate = useNavigate();
    function handleClick(){
       navigate('/dashboard');
    }
  return (
    <div style={{fontSize:"50px" ,display:"flex",flexDirection:"row", justifyContent:"space-evenly" }}>
     About Page 
     <button style={{color:"Blue", fontSize:"20px"}} onClick={handleClick}>
        Move To DashBoard Page
      </button>
    </div>
  )
}

export default About
