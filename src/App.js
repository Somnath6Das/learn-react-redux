import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();


  const increment = () => {
    dispatch({type: 'INC'})
  }

  
  const decrement = () => {
    dispatch ({type: 'DEC'})
  }
  const addedbytwo =() => {
    dispatch ({type: 'ADDTWO', payload: 2 })
  }

  return (
  <div>
    <h1>counter</h1>
    <h2>{ counter }</h2>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={addedbytwo}>addedbytwo</button>
  </div>
  );
}

export default App;
