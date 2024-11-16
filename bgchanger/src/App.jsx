import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('olive'); // Color should be a string

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'red' }} // Make sure the color is a string
            onClick={() => setColor('red')} // Change color on click
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'green' }}
            onClick={() => setColor('green')} // Change color on click
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'yellow' }}
            onClick={() => setColor('yellow')} // Change color on click
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'blue' }}
            onClick={() => setColor('blue')} // Change color on click
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'pink' }}
            onClick={() => setColor('pink')} // Change color on click
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'black' }}
            onClick={() => setColor('black')} // Change color on click
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
