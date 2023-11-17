import styled, { css } from 'styled-components';

const Heading = styled.h1`
  color: red;

  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 2rem;
      font-weight: 600;
      color: green;
    `}
`;

export default Heading;
