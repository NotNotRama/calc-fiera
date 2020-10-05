export default function printResult(result: any, operation: any, setOperation: any, setResult: any, calculate: any) {
  if (!result && operation.input && operation.prevNum && operation.operator) {
    setOperation(({ operator, input, prevNum }: any) => ({
      input: calculate(operator, input, prevNum)!,
      prevNum: null,
      operator: null,
    }));

    setResult(calculate(operation.operator, operation.input, operation.prevNum)!);
  }
}
