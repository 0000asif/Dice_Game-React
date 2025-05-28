import { styled } from 'styled-components';
const Rules = () => {
  return (
    <Rule>
      <h2>How to play dice game</h2>
      <ol>
        <li>select any number</li>
        <li>Click on dice image</li>
        <li>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </li>
        <li>if you get wrong guess then 2 point will be dedcuted </li>
      </ol>
    </Rule>
  );
};

export default Rules;

const Rule = styled.div`
  background-color: #fbf1f1;
  padding: 10px;
`;
