import React, { useState } from 'react';
import calculate from './lib/calculate';
import addNum from './lib/addNum';
import addOperation from './lib/addOperation';
import printResult from './lib/printResult';
import addDot from './lib/addDot';
import reset from './lib/reset';
import State from './types/State';

import Container from './styles/Container';
import Calculator from './styles/Calculator';
import Result from './styles/Result';
import Display from './styles/Display';
import Operators from './styles/Operators';
import Numbers from './styles/Numbers';
import Zero from './styles/Zero';
import Dot from './styles/Dot';
import AC from './styles/AC';

function App() {
  const initialState = { input: null, prevNum: null, operator: null };
  const [operation, setOperation] = useState<State>(initialState);
  const [display, setDisplay] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operatorsArr = ['+', '-', '*', '/'];

  return (
    <Container>
      <Calculator>
        <Result>{result}</Result>
        <Display>{display}</Display>
        <Numbers>
          {numArr.map((num) => (
            <button onClick={() => addNum(num, operation, setOperation, setDisplay, setResult)}>{num}</button>
          ))}
        </Numbers>
        <Zero onClick={() => addOperation('0', operation, setOperation, setDisplay, setResult, calculate)}>0</Zero>
        <Operators>
          {operatorsArr.map((operator) => (
            <button onClick={() => addOperation(operator, operation, setOperation, setDisplay, setResult, calculate)}>{operator}</button>
          ))}
          <button onClick={() => printResult(result, operation, setOperation, setResult, calculate)}>=</button>
        </Operators>

        <Dot onClick={() => addDot('.', operation, setOperation)}>.</Dot>
        <AC onClick={() => reset(setOperation, setDisplay, setResult, initialState)}>AC</AC>
      </Calculator>
    </Container>
  );
}

export default App;
