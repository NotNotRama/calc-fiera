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
    if (num === '0' && !operation.input) return;

    if (!operation.input && !operation.operator) {
      setOperation((prevState) => ({
        input: num,
        prevNum: null,
        operator: null,
      }));
      return;
    }

    if (!operation.input && operation.operator) {
      setOperation((prevState) => ({
        input: num,
        prevNum: prevState.prevNum,
        operator: prevState.operator,
      }));
      return;
    }

    if (operation.input) {
      setOperation((prevState) => ({
        input: prevState.input + num,
        prevNum: null,
        operator: prevState.operator,
      }));
      return;
    }
  }

  function addOperation(userInput: string) {
    if (!operation.prevNum) {
      setOperation((prevState) => ({
        input: null,
        prevNum: prevState.input,
        operator: userInput,
      }));
      return;
    }

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
