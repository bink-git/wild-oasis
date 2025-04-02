import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';

const StyledApp = styled.div`
  background-color: orangered;
  padding: 2rem;
`;

function App() {
  return (
    <>
      <StyledApp>
        <GlobalStyles />
        <Heading as="h1">Hello world</Heading>
        <Heading as="h2">Hello world</Heading>
        <Button>Click me</Button>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
