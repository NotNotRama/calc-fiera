import styled from '@xstyled/styled-components';

const Numbers = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  grid-column: 1 / 4;
  grid-row: 4 / 7;
  background-color: black;

  button {
    width: 10rem;
    height: 8.4rem;
    background-color: #e6e1dc;
  }
`;

export default Numbers;
