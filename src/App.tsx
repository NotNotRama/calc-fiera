import React, { useState } from 'react';
import calculate from './lib/calculate';
import addNum from './lib/addNum';

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

  function addOperation(userInput: string) {
    //reset result display after adding another number to the operation
    setResult('');

    //add operations with negative numbers
    //for example: 9+-9
    if (!operation.input && operation.prevNum && operation.operator && userInput === '-') {
      setOperation((prevState) => ({
        ...prevState,
        input: '-',
      }));
      return;
    }

    //prevent consecutives operators if there's no input
    if (operation.operator && !operation.input) return;

    const inputStr = operation.input?.split('');
    //check if the last digit of the input is a dot
    const checkDot = inputStr && inputStr[inputStr.length - 1] === '.';

    //assign the previous input to the prevNum, clear the input and set the operator
    if (!operation.prevNum && !checkDot) {
      setOperation((prevState) => ({
        input: null,
        prevNum: prevState.input,
        operator: userInput,
      }));
      setDisplay(userInput);
      return;
    }

    //if there's a previous number, assign the result of the calculation
    //to the previous number, clear the input and set a new operator
    if (operation.prevNum !== null && operation.input !== '-') {
      setOperation(({ operator, input, prevNum }) => ({
        input: null,
        prevNum: calculate(operator, input, prevNum)!,
        operator: userInput,
      }));
      setDisplay(userInput);
      return;
    }
  }

  function reset() {
    setOperation(initialState);
    setDisplay('');
    setResult('');
  }
  function addDot(dot: string) {
    //prevent user from using dot if there's
    if (operation.input === null) return;

    const includesDot = operation.input.split('').includes('.');

    //first check if there's an input
    //if there's, make sure said string doesn't include a dot
    if (typeof operation.input === 'string' && !includesDot) {
      setOperation((prevState) => ({
        ...prevState,
        input: prevState.input + dot,
      }));
    }
  }

  function printResult() {
    if (!result && operation.input && operation.prevNum && operation.operator) {
      setOperation(({ operator, input, prevNum }) => ({
        input: calculate(operator, input, prevNum)!,
        prevNum: null,
        operator: null,
      }));

      setResult(calculate(operation.operator, operation.input, operation.prevNum)!);
    }
  }

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
      <button onClick={() => addOperation('+')}>+</button>
      <button onClick={() => addOperation('-')}>-</button>
      <button onClick={() => addOperation('*')}>*</button>
      <button onClick={() => addOperation('/')}>/</button>
      <button onClick={printResult}>=</button>
      <button onClick={() => addDot('.')}>.</button>
      <button onClick={reset}>AC</button>
      <div>{display}</div>
      <div>{result}</div>
    </div>
  );
}

export default App;
