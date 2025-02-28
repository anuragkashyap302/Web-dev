/* react component ke liye Rafce ka use karo strrrue tumko mil jayga */
import React from 'react'
import anu from '../assets/anu.jpeg'
import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={anu} alt="anu"  />
      <p id='user-desc'>{props.name} ka paricahya</p>
    </div>
  )
}

export default UserCard

// html with javascript jsx
// agar usercard ke ander koi data aa raha hai to usko props ke through recive kar sakte ho
// like app.jsx me usercard ka naam de diye and usko yaha props.name se ui par dikha diye