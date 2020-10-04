import React, { useState } from 'react';

function App() {
  interface State {
    input: null | string;
    operator: null | string;
  }
  const initialState = { input: null, operator: null };
  const [operation, setOperation] = useState<State>(initialState);

  function addNum(num: string) {
    if (num === '0') return;

    if (!operation.input && !operation.operator) {
      setOperation((prevState) => ({
        input: num,
        operator: null,
      }));
    }

    if (operation.input) {
      setOperation((prevState) => ({
        input: prevState.input + num,
        operator: prevState.operator,
      }));
    }
  }

  function addOperation(userInput: string) {}

  return (
    <div>
      <div></div>
      <button onClick={() => addNum('0')}>0</button>
      <button onClick={() => addNum('1')}>1</button>
      <button onClick={() => addNum('2')}>2</button>
      <button onClick={() => addOperation('+')}>+</button>
      <button onClick={() => addOperation('-')}>-</button>
    </div>
  );
}

export default App;
