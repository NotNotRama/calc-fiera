import State from '../types/State';

export default function addOperation(
  userInput: string,
  operation: State,
  setOperation: Function,
  setDisplay: Function,
  setResult: Function,
  calculate: Function
) {
  setResult('');

  if (!operation.input && operation.prevNum && operation.operator && userInput === '-') {
    setOperation((prevState: State) => ({
      ...prevState,
      input: '-',
    }));
    return;
  }

  if (operation.operator && !operation.input) return;

  const inputStr = operation.input?.split('');

  const checkDot = inputStr && inputStr[inputStr.length - 1] === '.';

  if (!operation.prevNum && !checkDot) {
    setOperation((prevState: State) => ({
      input: null,
      prevNum: prevState.input,
      operator: userInput,
    }));
    setDisplay(userInput);
    return;
  }

  if (operation.prevNum !== null && operation.input !== '-') {
    setOperation(({ operator, input, prevNum }: State) => ({
      input: null,
      prevNum: calculate(operator, input, prevNum)!,
      operator: userInput,
    }));
    setDisplay(userInput);
    return;
  }
}
