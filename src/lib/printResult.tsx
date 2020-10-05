import State from '../types/State';

export default function printResult(result: string, operation: State, setOperation: Function, setResult: Function, calculate: Function) {
  if (!result && operation.input && operation.prevNum && operation.operator) {
    setOperation(({ operator, input, prevNum }: State) => ({
      input: calculate(operator, input, prevNum)!,
      prevNum: null,
      operator: null,
    }));

    setResult(calculate(operation.operator, operation.input, operation.prevNum)!);
  }
}
