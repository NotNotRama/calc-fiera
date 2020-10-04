import React, { useState } from 'react';

function App() {
  interface State {
    input: null | string;
    prevNum: null | string | number;
    operator: null | string;
  }

  function calculate(operator: string | null, input: any, prevNum: any) {
    if (operator === '-') {
      return parseInt(prevNum) - parseInt(input);
    }
    if (operator === '+') {
      return parseInt(prevNum) + parseInt(input);
    }
  }

  const initialState = { input: null, prevNum: null, operator: null };
  const [operation, setOperation] = useState<State>(initialState);

  function addNum(num: string) {
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
      return;
    }

    //if there's already an input, add digit to said input
    if (operation.input) {
      setOperation((prevState) => ({
        input: prevState.input + num,
        prevNum: prevState.prevNum,
        operator: prevState.operator,
      }));
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
      return;
    }

    //if there's no input nor operator, add the first input
    if (!operation.input && !operation.operator) {
      setOperation((prevState) => ({
        input: num,
        prevNum: null,
        operator: null,
      }));
      return;
    }
  }

  function addOperation(userInput: string) {
    //first input is -
    if (operation.input === '-') {
      setOperation((prevState) => ({
        ...prevState,
        input: '-',
      }));
      return;
    }

    //prevent consecutives operators if there's no input
    if (operation.operator && !operation.input) return;

    //asign the previous input to the prevNum, clear the input and set
    //the operator
    if (!operation.prevNum) {
      setOperation((prevState) => ({
        input: null,
        prevNum: prevState.input,
        operator: userInput,
      }));
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
      return;
    }
  }

  function reset() {
    setOperation(initialState);
  }

  return (
    <div>
      <div></div>
      <button onClick={() => addNum('0')}>0</button>
      <button onClick={() => addNum('1')}>1</button>
      <button onClick={() => addNum('2')}>2</button>
      <button onClick={() => addOperation('+')}>+</button>
      <button onClick={() => addOperation('-')}>-</button>
      <button onClick={reset}>AC</button>
    </div>
  );
}

export default App;
