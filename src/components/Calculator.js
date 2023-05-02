import React, { useState } from 'react';
import Result from './Result';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [output, setOutput] = useState(0);
  const handleClick = (e) => {
    setOutput((obj) => calculate(obj, e.target.innerText));
  };
  return (
    <>
      <div className="calculator-heading">
        <h1>Let&apos;s Do Some Math!</h1>
      </div>
      <div className="grid-container">
        <Result result={output} />
        <button onClick={handleClick} type="button" className="item">AC</button>
        <button onClick={handleClick} type="button" className="item">+/-</button>
        <button onClick={handleClick} type="button" className="item">%</button>
        <button onClick={handleClick} type="button" className="item color">÷</button>
        <button onClick={handleClick} type="button" className="item">7</button>
        <button onClick={handleClick} type="button" className="item">8</button>
        <button onClick={handleClick} type="button" className="item">9</button>
        <button onClick={handleClick} type="button" className="item color">x</button>
        <button onClick={handleClick} type="button" className="item">4</button>
        <button onClick={handleClick} type="button" className="item">5</button>
        <button onClick={handleClick} type="button" className="item">6</button>
        <button onClick={handleClick} type="button" className="item color">-</button>
        <button onClick={handleClick} type="button" className="item">1</button>
        <button onClick={handleClick} type="button" className="item">2</button>
        <button onClick={handleClick} type="button" className="item">3</button>
        <button onClick={handleClick} type="button" className="item color">+</button>
        <button onClick={handleClick} type="button" className="item span2">0</button>
        <button onClick={handleClick} type="button" className="item">.</button>
        <button onClick={handleClick} type="button" className="item color">=</button>
      </div>
    </>
  );
}
