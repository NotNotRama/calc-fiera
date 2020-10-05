import React, { useState } from 'react';

function App() {
  interface State {
    input: null | string;
    prevNum: null | string | number;
    operator: null | string;
  }

  type test = string | number | null;

  function calculate(operator: string | null, input: test, prevNum: test) {
    if (operator === '-') {
      return Number(prevNum) - Number(input);
    }
    if (operator === '+') {
      return Number(prevNum) + Number(input);
    }
    if (operator === '/') {
      return Number(prevNum) / Number(input);
    }
    if (operator === '*') {
      return Number(prevNum) * Number(input);
    }
  }

  const initialState = { input: null, prevNum: null, operator: null };
  const [operation, setOperation] = useState<State>(initialState);
  const [display, setDisplay] = useState<string>('');
  const [result, setResult] = useState<number | string>('');

  function addNum(num: string) {
    //reset result display after adding another number to the operation
    setResult('');

    //avoid 0 as the first digit but not if there's already an input
    if (num === '0' && !operation.input) return;

    //combine previous - with the new number
    //return is a must so the other conditionals don't run
    if (operation.operator === '-' && !operation.input && !operation.prevNum) {
      console.log(operation.operator + num);
      setOperation((prevState) => ({
        input: prevState.operator + num,
        prevNum: null,
        operator: null,
      }));
      setDisplay(operation.operator + num);
      return;
    }

    //if there's already an input, add digit to said input
    if (operation.input) {
      setOperation((prevState) => ({
        input: prevState.input + num,
        prevNum: prevState.prevNum,
        operator: prevState.operator,
      }));
      setDisplay(operation.input + num);
      return;
    }

    //no operation input but operator, add digit to the input
    //this is used after an operator has already been asigned
    //and there's already a previous number
    if (!operation.input && operation.operator) {
      setOperation((prevState) => ({
        input: num,
        prevNum: prevState.prevNum,
        operator: prevState.operator,
      }));
      setDisplay(num);
      return;
    }

    //if there's no input nor operator, add the first input
    if (!operation.input && !operation.operator) {
      setOperation((prevState) => ({
        input: num,
        prevNum: null,
        operator: null,
      }));
      setDisplay(num);
      return;
    }
  }

  function addOperation(userInput: string) {
    //reset result display after adding another number to the operation
    setResult('');

    //first input is -
    // if (operation.input === '-') {
    //   setOperation((prevState) => ({
    //     ...prevState,
    //     input: '-',
    //   }));
    //   setDisplay('-');
    //   return;
    // }

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
    if (operation.prevNum !== null) {
      setOperation(({ operator, input, prevNum }) => ({
        input: null,
        prevNum: calculate(operator, input, prevNum!.toString())!.toString(),
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

    //first check if there's an input
    //if there's, make sure said string doesn't include a dot
    if (typeof operation.input === 'string' && !operation.input.split('').includes('.')) {
      setOperation((prevState) => ({
        ...prevState,
        input: prevState.input + dot,
      }));
    }
  }

  function printResult() {
    if (!result && operation.input && operation.prevNum && operation.operator) {
      setOperation(({ operator, input, prevNum }) => ({
        input: calculate(operator, input, prevNum)!.toString(),
        prevNum: null,
        operator: null,
      }));

      setResult(calculate(operation.operator, operation.input, operation.prevNum)!.toString());
    }
  }

  return (
    <div>
      <div></div>
      <button onClick={() => addNum('0')}>0</button>
      <button onClick={() => addNum('1')}>1</button>
      <button onClick={() => addNum('2')}>2</button>
      <button onClick={() => addNum('3')}>3</button>
      <button onClick={() => addNum('4')}>4</button>
      <button onClick={() => addNum('5')}>5</button>
      <button onClick={() => addNum('6')}>6</button>
      <button onClick={() => addNum('7')}>7</button>
      <button onClick={() => addNum('8')}>8</button>
      <button onClick={() => addNum('9')}>9</button>
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
