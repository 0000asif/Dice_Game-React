import styled from "styled-components";

const StartGame = () => {
  return (
    <container>
      <div>
        <img src="/images/dice.png" alt="dice image" />
      </div>
      <div>
        <h1>DICE GAME</h1>
        <button>Play Now</button>
      </div>
    </container>
  );
};

export default StartGame;


const container = styled.div`
`