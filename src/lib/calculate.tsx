type numType = string | number | null;

export default function calculate(operator: string | null, input: numType, prevNum: numType) {
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
