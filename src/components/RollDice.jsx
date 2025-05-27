import { useState } from 'react';
import styled from 'styled-components';

const RollDice = () => {
  const [CurrentDice, setCurrentDice] = useState('1');

  const generateRandomDice = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    const randomNumber = generateRandomDice(1, 7);
    setCurrentDice( randomNumber);
  };

  return (
    <Discontainer>
      <div className="dice" onClick={rollDice}>
        <img src={`./images/dice_${CurrentDice}.png`} alt="cube" />
      </div>
      <p>Click on Dice to roll</p>
    </Discontainer>
  );
};

export default RollDice;

const Discontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
