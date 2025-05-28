import styled from 'styled-components';
import NumberSelector from './NumberSelector';
import TotalScore from './TotalScore';
import RollDice from './RollDice';
import { useState } from 'react';
import Rules from './Rules';

const GamePlay = () => {
  const [SelectedNumber, setSelectedNumber] = useState();
  const [CurrentDice, setCurrentDice] = useState('1');
  const [Score, setScore] = useState('0');
  const [Error, setError] = useState();
  const [ShowRule, setShowRule] = useState();

  const generateRandomDice = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const rollDice = () => {
    if (!SelectedNumber) {
      setError('Select First a Number');
      return;
    }

    const randomNumber = generateRandomDice(1, 6);
    setCurrentDice(randomNumber);

    if (SelectedNumber == randomNumber) {
      setScore(prev => Number(prev) + randomNumber);
    } else {
      setScore(prev => Number(prev) - 1);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore('0');
    return;
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={Score} />
        <NumberSelector
          error={Error}
          setError={setError}
          SelectedNumber={SelectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice
        CurrentDice={CurrentDice}
        setCurrentDice={setCurrentDice}
        rollDice={rollDice}
      />
      <div className="btns">
        <OuterlineButton onClick={resetScore}>Reset Score</OuterlineButton>
        
        <Button onClick={() => setShowRule((prev) => !prev)}>
          {ShowRule ? "Hide Rules" : "Show Rules"}
        </Button>
        {ShowRule && <Rules />}

      </div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 40px;
  }
`;
const Button = styled.main`
padding: 10px 18px;
min-width: 220px;
font-size: 16px;
text-align: center;
font-weight: 600;
background-color:black;
color: white;
border: 1px solid black;
border-radius: 5px;
cursor: pointer;
transition: all 0.3s ease-in-out;
&:hover{
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: all 0.3s ease-in-out;
`;
const OuterlineButton = styled(Button)`
  background-color: white;
  color: black;
  &:hover {
    background-color: black;
    color: white;
  }
`;
