export default function addNum(num: string, operation: any, setOperation: any, setDisplay: any, setResult: any) {
  //reset result display after adding another number to the operation
  setResult('');

  //avoid 0 as the first digit but not if there's already an input
  if (num === '0' && !operation.input) return;

  //combine previous - with the new number
  //return is a must so the other conditionals don't run
  if (operation.operator === '-' && !operation.input && !operation.prevNum) {
    console.log(operation.operator + num);
    setOperation((prevState: any) => ({
      input: prevState.operator + num,
      prevNum: null,
      operator: null,
    }));
    setDisplay(operation.operator + num);
    return;
  }

  //if there's already an input, add digit to said input
  if (operation.input) {
    setOperation((prevState: any) => ({
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
    setOperation((prevState: any) => ({
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
