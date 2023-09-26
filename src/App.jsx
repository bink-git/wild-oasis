import styled from 'styled-components';

const Heading = styled.h1`
  color: red;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  background-color: purple;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #a00ea0;
  }
`;

const StyledApp = styled.div`
  font-size: 1.4rem;
  padding: 20px;
  background-color: aliceblue;
`;

function App() {
  return (
    <StyledApp>
      <Heading>Hello</Heading>
      <Button>Hello</Button>
    </StyledApp>
  );
}

export default App;
