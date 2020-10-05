import styled from '@xstyled/styled-components';

const Operators = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  grid-column: 4 / -1;
  grid-row: 3 / -1;

  button {
    margin-top: 2px;
    width: 10rem;
    height: 8.5rem;
    background-color: #ff8c20;
  }
`;

export default Operators;
