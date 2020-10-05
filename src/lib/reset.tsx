import State from '../types/State';

export default function reset(setOperation: Function, setDisplay: Function, setResult: Function, initialState: State) {
  setOperation(initialState);
  setDisplay('');
  setResult('');
}
