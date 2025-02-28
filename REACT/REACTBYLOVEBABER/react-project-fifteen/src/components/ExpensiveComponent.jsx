import React ,{useState, useCallback, useRef,useEffect} from 'react'

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [text , setText] = useState("");
  const priviousFunction = useRef(null);


  const expensiveCalculation =useCallback(()=>{
    console.log("Running expensive calculation..");
    let result = 0;
    // ye expensive function ko recreation se bachhna hai to usecallback ki har baar rerender hoone par ye recreate na ho
    //yaha tum coount inc karo ya kucah type karo input filed me phir bhi ye page render hoga and funvtion recreate ho jayga
    // to usecallback ke anadr function ko wrap kar bach jayega
    for(let i = 0; i< 1000000000; i++){
        result+=i;
    }
    return result;
  }, [count]);

  // ab isko check karne ke liye tum useefect ka use kar lo
  useEffect(() => {
    if(priviousFunction){
        if(priviousFunction.current === expensiveCalculation){
            console.log("function not re-crated")
        }
        else{
            console.log("function got recrated")
        }

    }
  else{
    priviousFunction.current = expensiveCalculation;
  }
  }, [expensiveCalculation])
  

  return (
    <div>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='type something' />
      <p>ExpensiveCalculation Result: {expensiveCalculation()}</p>

      <button onClick={()=>setCount(count+1)}>Increment Count</button>
    </div>
  )
}

export default ExpensiveComponent
