import React from 'react'

const Button = (props) => {
  return (
    <div>
        {/* props ke rup me jo aaya usko recive kar ke kaam kar sakte ho */}
        {props.children}
        <button onClick={props.handleClick}>
        {props.text} 
   </button>
    </div>
  
  )
}

export default Button
