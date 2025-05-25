import React from 'react'
import styled from 'styled-components'
const StartGame = ({toggle}) => {
  return (
    <Container>
     <div>
         <img src="/images/image.png" alt="logo" />
     </div>
      <div className='content'>
        <h1>Dice Game</h1>
        <p>Click the button below to start the game.</p>
        <Button className='start-button' onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame
const Container = styled.div`
   max-width: 1200px;
   height: 100vh;
   display: flex;
   margin: 0 auto;
   align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    img{
     width: 100%;
     height: 100%;
     object-fit: cover;
    }
    .content{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      h1{
          font-size: 96px;
          white-space: nowrap;
          font-family: 'Poppins', sans-serif;
          color: #4CAF50; /* Green */
      }
      p{
          font-size: 24px;
          color: #333;
      }
`;
const Button = styled.button`
    font-family: 'Poppins', sans-serif;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  background-color: #4CAF50; /* Green */
  padding: 10px 18px;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
   width: 220px;
   height : 44px;
   border-radius: 8px;
   &:hover{
    background-color: #45a049; /* Darker green */
    color: white;
    transition: 0.3s background ease-in-out;
    }

`;
