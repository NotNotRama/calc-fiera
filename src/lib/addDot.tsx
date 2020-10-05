export default function addDot(dot: string, operation: any, setOperation: any) {
  //prevent user from using dot if there's
  if (operation.input === null) return;

  const includesDot = operation.input.split('').includes('.');

  //first check if there's an input
  //if there's, make sure said string doesn't include a dot
  if (typeof operation.input === 'string' && !includesDot) {
    setOperation((prevState: any) => ({
      ...prevState,
      input: prevState.input + dot,
    }));
  }
}
