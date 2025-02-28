import React, {useState,useEffect } from "react";

function MultiEffectComponent(){
    const [count , setCount ]= useState(0);
    const[seconds , setSeconds ] = useState(0);

    useEffect(() => {
       console.log('count changed',count);
      }, [count]);
      // side effect logic will run evrey time when count change kyki waht count ka logic laga hua hai
    
      //2nd use effect 
   useEffect(()=>{
    const intervaLId = setInterval(()=>{
        setSeconds(prevSeconds => prevSeconds+1);
    }, 1000)
    // har ek seconds ke badd ye effect chalega
        
    return ()=> clearInterval(intervaLId)
   },[]);
    // it will run only on first render
    return (
        <div>
            <h1>Count :{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment Count</button>
            <h2>Seconds :{seconds}</h2>
        </div>
    )
    
}
export default MultiEffectComponent;