import React from 'react'

const Card = (props) => {
    // you can try props ke jagh only children also {children }
  return (
    <div>
        {/* koi ek component ke all children ko ek sath recive karke print kar sakte hai */}
      {props.children}
    </div>
  )
}

export default Card
