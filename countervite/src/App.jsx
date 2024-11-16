import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  let [counter, setCounter] = useState(15);

  // Correctly closing the addValue function
  const addValue = () => {
    setCounter(counter + 1);  
  };

  const subtractValue = () => {
    setCounter(counter - 1);  
  };

  return (
    <>
      <h1>chai or react</h1>
      <h2>Counter value: {counter} </h2>

      <button onClick={addValue}>Add value</button>
      <button onClick={subtractValue}>Subtract value</button>
    </>
  );
}

export default App;
