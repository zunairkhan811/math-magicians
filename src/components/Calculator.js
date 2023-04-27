import React from 'react';
import Result from './Result';

export default function Calculator() {
  return (
    <div className="grid-container">
      <Result />
      <button type="button" className="item">AC</button>
      <button type="button" className="item">+/-</button>
      <button type="button" className="item">%</button>
      <button type="button" className="item color">÷</button>
      <button type="button" className="item">7</button>
      <button type="button" className="item">8</button>
      <button type="button" className="item">9</button>
      <button type="button" className="item color">x</button>
      <button type="button" className="item">4</button>
      <button type="button" className="item">5</button>
      <button type="button" className="item">6</button>
      <button type="button" className="item color">-</button>
      <button type="button" className="item">1</button>
      <button type="button" className="item">2</button>
      <button type="button" className="item">3</button>
      <button type="button" className="item color">+</button>
      <button type="button" className="item span2">0</button>
      <button type="button" className="item">.</button>
      <button type="button" className="item color">=</button>
    </div>
  );
}
