export default function addOperation(userInput: string, operation: any, setOperation: any, setDisplay: any, setResult: any, calculate: Function) {
  //reset result display after adding another number to the operation
  setResult('');

  //add operations with negative numbers
  //for example: 9+-9
  if (!operation.input && operation.prevNum && operation.operator && userInput === '-') {
    setOperation((prevState: any) => ({
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
    setOperation((prevState: any) => ({
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
    setOperation(({ operator, input, prevNum }: any) => ({
      input: null,
      prevNum: calculate(operator, input, prevNum)!,
      operator: userInput,
    }));
    setDisplay(userInput);
    return;
  }
}
