export default function reset(setOperation: any, setDisplay: any, setResult: any, initialState: any) {
  setOperation(initialState);
  setDisplay('');
  setResult('');
}
