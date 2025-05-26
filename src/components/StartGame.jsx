import styled from 'styled-components';

const StartGame = ({ toogle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dice.png" alt="dice image" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <button onClick={toogle}>Play Now</button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  height: 100vh;
  align-items: center;

  .content{
  display: flex;
  flex-direction: column;
  align-items: end;
  h1{
  font-size: 96px;
  white-space: nowrap;
  }
  button{
    padding: 10px 18px;
    min-width: 220px;
    font-size: 16px;
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
}
  }

`;
