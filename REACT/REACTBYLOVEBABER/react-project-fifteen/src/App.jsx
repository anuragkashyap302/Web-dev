import { useCallback, useState } from 'react'

import './App.css'
import ChildComponent from './components/ChildComponent';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {
 // const [count, setCount] = useState(0)
  // ye function recreate ho raha hai baar bar jab count inc ho raha kyki ye rerneder ho raha hai
  // function  handleClick(){
  //   setCount(count+1);
  // }
// usecallback unneccarssay rerender ko bachta hai yaha increamet ko click karne par childcomponet bhi phatlu ka rerender ho raha hia
// const handleClick =useCallback(()=>{
//   setCount(count+1);
// },[count]);//<- dependireas of hook
// usecallbacksnippet for gettng body of usecallback hook 
  return (
    <div >
      {/* <div className='count' >
        Count:{count}
      </div>
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      <br /> */}
      <div>
        {/* is component ko phaltu rerender hone se bachne ke liye isko usememo ke ander wrap kar do */}
        {/* <ChildComponent buttonName = "ClickMe" handleClick={handleClick}/> */}

        <ExpensiveComponent/>
      </div>
    </div>
  )
}

export default App
