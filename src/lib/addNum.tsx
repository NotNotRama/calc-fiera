import State from '../types/State';

export default function addNum(num: string, operation: State, setOperation: Function, setDisplay: Function, setResult: Function) {
  //reset result display after adding another number to the operation
  setResult('');

  //avoid multiples zeros
  if (num === '0' && operation.input === '0') return;

  //avoid 0 as the first digit but not if there's already an input
  //now if you can add dot next to a 0.
  if (num !== '0' && operation.input === '0') {
    setOperation((prevState: State) => ({
      input: num,
      prevNum: null,
      operator: null,
    }));
    setDisplay(num);
    return;
  }

  //combine previous - with the new number
  //return is a must so the other conditionals don't run
  if (operation.operator === '-' && !operation.input && !operation.prevNum) {
    setOperation((prevState: State) => ({
      input: prevState.operator + num,
      prevNum: null,
      operator: null,
    }));
    setDisplay(operation.operator + num);
    return;
  }

  //if there's already an input, add digit to said input
  if (operation.input) {
    setOperation((prevState: State) => ({
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
    setOperation((prevState: State) => ({
      input: num,
      prevNum: prevState.prevNum,
      operator: prevState.operator,
    }));
    setDisplay(num);
    return;
  }

  //if there's no input nor operator, add the first input
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
