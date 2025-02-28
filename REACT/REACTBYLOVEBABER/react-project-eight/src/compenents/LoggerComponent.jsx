
import React,{useState,useEffect} from "react";

function LoggerComponent(){
    const[count , setCount] =  useState(0);
    useEffect(() => {
      console.log('component rendered or count changed', count);
    //   ye dekhne ke liye tumko inspect ke consle me milega

    });
    // eg of variation 1 runs on every render
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=> setCount(count+1)}>Increment</button>
        </div>
    );
    
}
export default LoggerComponent