import React from 'react'

const ChildComponent = React.memo(
    (props) =>{
        console.log("Child Component go re-rendered again");
        // lkie jitne baar hum increament pe click karnge ye component bhi rerender ho jayega isliye isko 
        // usememo ke andar wrap kar diye ab jab tak button name chane nahi hoga tab tak rerendeer nahi hoga
        // matlaab jab tak props change nahi hoga hre props is button name
        // but reactmemo ka limitation hai seacrj karo
      return (
        <div>
          <button onClick={props.handleClick}>{props.buttonName}</button>
        </div>
      )
    }
)

export default ChildComponent
// if you are sending  a funtion in propas then react.memo wont save you from rending
