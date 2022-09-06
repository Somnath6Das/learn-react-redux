import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {actions} from './store/index'

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();


  const increment = () => {
    dispatch(actions.increment())
  }

  
  const decrement = () => {
     dispatch(actions.decrement())
  }
  const addby10 =() => {
    dispatch (actions.addby10(10))
  }

  return (
  <div>
    <h1>counter</h1>
    <h2>{ counter }</h2>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={addby10}>addedbytwo</button>
  </div>
  );
}

export default App;
