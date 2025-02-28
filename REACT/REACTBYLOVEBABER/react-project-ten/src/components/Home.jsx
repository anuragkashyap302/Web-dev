import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    function handleClick(){
       navigate('/about');
    }
  return (
    <div style={{fontSize:"50px" ,display:"flex",flexDirection:"row", justifyContent:"space-evenly" }}>
      Home Page
      {/* home page ke niche ek button jise hum about page pe pauch jaye */}
      <button style={{color:"Blue", fontSize:"20px"}} onClick={handleClick}>
        Move To About Page
      </button>
    </div>
  )
}

export default Home
