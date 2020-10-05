type paramTypes = string | number;

export default function calculate(operator: paramTypes, input: paramTypes, prevNum: paramTypes) {
  if (operator === '-') {
    return (Number(prevNum) - Number(input)).toString();
  }
  if (operator === '+') {
    return (Number(prevNum) + Number(input)).toString();
  }
  if (operator === '/') {
    return (Number(prevNum) / Number(input)).toString();
  }
  if (operator === '*') {
    return (Number(prevNum) * Number(input)).toString();
  }
}
