import React  , {useState , useContext}from 'react'
import UserContext from '../Context/User'


function Login() {
    const [username , SetUsername] = useState('');
    const [password , SetPassword] = useState('');
    const {setUser} = useContext(UserContext);
    // setUserr ko userconstex componet se laye joki durse file me hai 
    const handleSubmit = (e)=>{
      e.preventDefault()
      setUser({username , password});
      // ab yaha se data dure file me chlay gaya though usecontext
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='Username' value={username} onChange={(e)=> SetUsername(e.target.value)}
         className='border-2 border-solid border-red-700 '/>
      {"  "}

        <input type="text" placeholder='password'value={password} onChange={(e)=> SetPassword(e.target.value)} 
        className='border-2 border-solid border-red-700'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login