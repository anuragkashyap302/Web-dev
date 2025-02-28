import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='div' >
      {/* is line se hoga yahi ki jo bhi tum input me change kargoe wo sate varible me change hota chala jyega by cllaing setName function on event */}
      {/* value isliye diye ki do imput ek sath kaam kar raha hi ui dekho aur doucmentatioon padho */}
     <input type='text' className='input'value= {props.name}  onChange={(e)=> props.setName(e.target.value)}/>
     <p>Name state vaible ki value inside Card {props.title}:{props.name}</p>
    </div>
  )
}

export default Card
