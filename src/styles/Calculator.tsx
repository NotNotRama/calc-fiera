import styled from '@xstyled/styled-components';

const Calculator = styled.div`
  position: absolute;
  display: grid;
  align-self: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(7, 1fr);
  width: 50rem;
  height: 60rem;
  background-color: yellow;
`;

export default Calculator;
