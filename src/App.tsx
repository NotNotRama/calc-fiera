import React from 'react';

function App() {
  function addNum(num: string) {
    console.log('some test');
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
