import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

const H1 = styled.h1`
  color: var(--color-primary);
  font-size: 2.4rem;
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 1.6rem;
  background-color: purple;
  color: white;
  border: none;
  font-weight: 500;
  border-radius: 7px;
  padding: 1.2rem 1.6rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <H1>Hello world</H1>
      <Button>Click me</Button>
    </>
  );
}

export default App;
