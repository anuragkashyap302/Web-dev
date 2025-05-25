import React from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSlector from './NumberSlector'
import RoleDice from './RollDice'
import Rules from './Rules'
import { useState } from 'react'
import OutlineButton from './OutlineButton'
import Button from './Button'

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };
  return (
    <Maincontainer>
      <div className='top-section'>
         <TotalScore score = {score}/>
       <NumberSlector
         error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber} />
      </div>
       <RoleDice currentDice={currentDice} roleDice={roleDice} />
       <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
        </div>
        {showRules && <Rules />}
    </Maincontainer>
  )
}

export default GamePlay
 const Maincontainer = styled.main`
 padding: 70px;
 .top-section{
    display: flex;
    justify-content: space-around;
    align-items: end;
    
}
    .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 24px;
}
`
