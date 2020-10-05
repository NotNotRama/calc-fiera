import React, { useState } from 'react';
import calculate from './lib/calculate';
import addNum from './lib/addNum';
import addOperation from './lib/addOperation';
import printResult from './lib/printResult';
import addDot from './lib/addDot';
import reset from './lib/reset';

function App() {
  interface State {
    input: null | string;
    prevNum: null | string | number;
    operator: null | string;
  }

  const initialState = { input: null, prevNum: null, operator: null };
  const [operation, setOperation] = useState<State>(initialState);
  const [display, setDisplay] = useState<string>('');
  const [result, setResult] = useState<string>('');

  return (
    <div>
      <div></div>
      <button onClick={() => addNum('0', operation, setOperation, setDisplay, setResult)}>0</button>
      <button onClick={() => addNum('1', operation, setOperation, setDisplay, setResult)}>1</button>
      <button onClick={() => addNum('2', operation, setOperation, setDisplay, setResult)}>2</button>
      <button onClick={() => addNum('3', operation, setOperation, setDisplay, setResult)}>3</button>
      <button onClick={() => addNum('4', operation, setOperation, setDisplay, setResult)}>4</button>
      <button onClick={() => addNum('5', operation, setOperation, setDisplay, setResult)}>5</button>
      <button onClick={() => addNum('6', operation, setOperation, setDisplay, setResult)}>6</button>
      <button onClick={() => addNum('7', operation, setOperation, setDisplay, setResult)}>7</button>
      <button onClick={() => addNum('8', operation, setOperation, setDisplay, setResult)}>8</button>
      <button onClick={() => addNum('9', operation, setOperation, setDisplay, setResult)}>9</button>
      <button onClick={() => addOperation('+', operation, setOperation, setDisplay, setResult, calculate)}>+</button>
      <button onClick={() => addOperation('-', operation, setOperation, setDisplay, setResult, calculate)}>-</button>
      <button onClick={() => addOperation('*', operation, setOperation, setDisplay, setResult, calculate)}>*</button>
      <button onClick={() => addOperation('/', operation, setOperation, setDisplay, setResult, calculate)}>/</button>
      <button onClick={() => printResult(result, operation, setOperation, setResult, calculate)}>=</button>
      <button onClick={() => addDot('.', operation, setOperation)}>.</button>
      <button onClick={() => reset(setOperation, setDisplay, setResult, initialState)}>AC</button>
      <div>{display}</div>
      <div>{result}</div>
    </div>
  );
}

export default App;
