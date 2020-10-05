import State from '../types/State';

export default function addNum(num: string, operation: State, setOperation: Function, setDisplay: Function, setResult: Function) {
  setResult('');

  if (num === '0' && operation.input === '0') return;

  if (num !== '0' && operation.input === '0') {
    setOperation((prevState: State) => ({
      input: num,
      prevNum: null,
      operator: null,
    }));
    setDisplay(num);
    return;
  }

  if (operation.operator === '-' && !operation.input && !operation.prevNum) {
    setOperation((prevState: State) => ({
      input: prevState.operator + num,
      prevNum: null,
      operator: null,
    }));
    setDisplay(operation.operator + num);
    return;
  }

  if (operation.input) {
    setOperation((prevState: State) => ({
      input: prevState.input + num,
      prevNum: prevState.prevNum,
      operator: prevState.operator,
    }));
    setDisplay(operation.input + num);
    return;
  }

  if (!operation.input && operation.operator) {
    setOperation((prevState: State) => ({
      input: num,
      prevNum: prevState.prevNum,
      operator: prevState.operator,
    }));
    setDisplay(num);
    return;
  }

  if (!operation.input && !operation.operator) {
    setOperation((prevState: any) => ({
      input: num,
      prevNum: null,
      operator: null,
    }));
    setDisplay(num);
    return;
  }
}
