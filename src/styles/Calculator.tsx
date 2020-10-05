import styled from '@xstyled/styled-components';

const Calculator = styled.div`
  position: absolute;
  display: grid;
  align-self: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 4rem 4rem repeat(5, 1fr);
  width: 40rem;
  height: 50rem;
  background-color: black;
`;

export default Calculator;
