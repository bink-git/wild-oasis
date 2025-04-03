import styled, { css } from 'styled-components';

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === 'horizontal' &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `};

  ${(props) =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `};
  gap: 1rem;
  margin-bottom: 2rem;
`;

Row.defaultProps = {
  type: 'vertical',
};

export default Row;
