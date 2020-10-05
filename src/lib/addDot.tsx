import State from '../types/State';

export default function addDot(dot: string, operation: State, setOperation: Function, setDisplay: Function) {
  if (operation.input === null) return;

  const includesDot = operation.input.split('').includes('.');

  if (typeof operation.input === 'string' && !includesDot) {
    setOperation((prevState: any) => ({
      ...prevState,
      input: prevState.input + dot,
    }));

    setDisplay(operation.input + dot);
  }
}
