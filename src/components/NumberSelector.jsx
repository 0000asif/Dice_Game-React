import styled from 'styled-components';

const NumberSelector = ({
  SelectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const BoxNumber = [1, 2, 3, 4, 5, 6];

  const selectedNumber = (value) => {
    setSelectedNumber(value);
    setError('');
  };
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex-area">
        {BoxNumber.map((value, i) => (
          <Box
            key={i}
            selected={SelectedNumber === value}
            onClick={() => selectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};
export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex-area {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
    font-weight: 500;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  background-color: ${({ selected }) => (selected ? 'black' : 'white')};
  color: ${({ selected }) => (!selected ? 'black' : 'white')};
`;
