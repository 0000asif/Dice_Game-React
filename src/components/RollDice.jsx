import styled from 'styled-components';

const RollDice = ({ CurrentDice, rollDice }) => {
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
