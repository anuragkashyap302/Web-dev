import React from 'react'
import styled from 'styled-components'  

const TotalScore = ({score}) => {
  return (
     <Container>
            <h1>{score}</h1>
            <p>Total Score</p>
        </Container>
  )
}

export default TotalScore
const Container = styled.div`
max-width: 100px;
padding-left: 20px;
padding-top: 40px;
    h1{
        font-size: 96px;
        white-space: nowrap;
        font-family: 'Poppins', sans-serif;
        color: #4CAF50; /* Green */

        line-height: 0.9;
        margin: 0;
        font-weight: 700;
    }
    p{
        font-size: 24px;
        color: #333;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }
`
