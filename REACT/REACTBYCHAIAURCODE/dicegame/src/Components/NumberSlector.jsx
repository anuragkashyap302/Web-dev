import React from 'react'
import styled from 'styled-components'
const NumberSlector = ({ setError , error, selectedNumber, setSelectedNumber,}) => {
    const numbers = [1, 2, 3, 4, 5, 6];
   const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
   };
  return (
    <Container>
         <p className="error">{error}</p>
        <div className='number-selector'>
            {numbers.map((value , i) => (
            <Box 
            style={{backgroundColor: selectedNumber === value ? '#FF5733' : '#4CAF50'}}
            key={i} onClick={() => numberSelectorHandler(value)}>
                {value}
            </Box>
        ))}
        </div>
        <p>Select Number</p>
    </Container>  
  );
};

export default NumberSlector
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
 .number-selector{
    display: flex;
    gap:24px
}
    p{
        font-size: 24px;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }
    
`
const Box = styled.div`
   height: 72px;
   width: 72px;
   background-color: #4CAF50; /* Green */
    border: 1px solid black;
    display :grid;
    place-items: center;
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        background-color: #45a049; /* Darker green */
        color: white;
        transform: scale(1.1);
    }`