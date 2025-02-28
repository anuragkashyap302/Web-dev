import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
const Dashboard = () => {
    const navigate = useNavigate();
    function handleClick(){
       navigate('/');
    }
  return (
    <div style={{fontSize:"50px" ,display:"flex",flexDirection:"row", justifyContent:"space-evenly" }}>
    DashBoard Page
    <button style={{color:"Blue", fontSize:"20px"}} onClick={handleClick}>
       Move To Home Page
     </button>
     {/* agaaar chidren ko route karna hai to outlet ka use karna padega parnet ke ander 
     */}
     <Outlet/>
   </div>
  )
}

export default Dashboard
