import React, { useState } from 'react';
import calculate from './lib/calculate';
import addNum from './lib/addNum';
import addOperation from './lib/addOperation';
import printResult from './lib/printResult';
import addDot from './lib/addDot';
import reset from './lib/reset';
import State from './types/State';

function App() {
  const initialState = { input: null, prevNum: null, operator: null };
  const [operation, setOperation] = useState<State>(initialState);
  const [display, setDisplay] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operatorsArr = ['+', '-', '*', '/'];

  return (
    <div>
      <div></div>
      {numArr.map((num) => (
        <button onClick={() => addNum(num, operation, setOperation, setDisplay, setResult)}>{num}</button>
      ))}
      {operatorsArr.map((operator) => (
        <button onClick={() => addOperation(operator, operation, setOperation, setDisplay, setResult, calculate)}>{operator}</button>
      ))}
      <button onClick={() => printResult(result, operation, setOperation, setResult, calculate)}>=</button>
      <button onClick={() => addDot('.', operation, setOperation)}>.</button>
      <button onClick={() => reset(setOperation, setDisplay, setResult, initialState)}>AC</button>
      <div>{display}</div>
      <div>{result}</div>
    </div>
  );
}

export default App;
