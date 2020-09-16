import React, { useState } from 'react';
import './App.css';
import * as math from 'mathjs';

function App() {
  const [state, setState] = useState('');

  // After setting up of the state

  const handleValueChange = (no) => {
    console.log(no, 'this is the event recieved');

    setState(state + no);
  };

  const handleClear = () => {
    setState('');
  };

  const handleSubmission = () => {
    console.log(math.evaluate(state));

    try {
      if (state) setState(math.evaluate(state));
      else setState('');
    } catch (error) {
      setState('');
    }
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="heading">Calculator</div>
        <hr />

        <div className="display">{state}</div>

        <div className="buttons-section">
          <button onClick={() => handleValueChange('7')}>7</button>
          <button onClick={() => handleValueChange('8')}>8</button>
          <button onClick={() => handleValueChange('9')}>9</button>
          <button onClick={() => handleValueChange('/')}>/</button>
          <button onClick={() => handleValueChange('4')}>4</button>
          <button onClick={() => handleValueChange('5')}>5</button>
          <button onClick={() => handleValueChange('6')}>6</button>
          <button onClick={() => handleValueChange('*')}>*</button>
          <button onClick={() => handleValueChange('1')} className="">
            1
          </button>
          <button onClick={() => handleValueChange('2')}>2</button>
          <button onClick={() => handleValueChange('3')}>3</button>
          <button onClick={() => handleValueChange('+')}>+</button>
          <button onClick={() => handleValueChange('.')} className="">
            .
          </button>
          <button onClick={() => handleValueChange('0')}>0</button>
          <button onClick={handleSubmission}>=</button>
          <button onClick={() => handleValueChange('-')}>-</button>
        </div>

        <div className="clear-section">
          <button onClick={handleClear}>Clear</button>
        </div>

        <div className="footer">Made Using react</div>
      </div>
    </div>
  );
}

export default App;
