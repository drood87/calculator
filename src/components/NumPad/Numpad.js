import React from 'react';
import './numpad.scss';

class Numpad extends React.Component {
  render() {
    return (
      <div className="numpad">
        <li className="numpad__button">C</li>
        <li className="numpad__button">+/-</li>
        <li className="numpad__button">&larr;</li>
        <li className="numpad__button">/</li>
        <li className="numpad__button">7</li>
        <li className="numpad__button">8</li>
        <li className="numpad__button">9</li>
        <li className="numpad__button">X</li>
        <li className="numpad__button">4</li>
        <li className="numpad__button">5</li>
        <li className="numpad__button">6</li>
        <li className="numpad__button">-</li>
        <li className="numpad__button">1</li>
        <li className="numpad__button">2</li>
        <li className="numpad__button">3</li>
        <li className="numpad__button">+</li>
        <li className="numpad__button numpad__button--button0">0</li>
        <li className="numpad__button">.</li>
        <li className="numpad__button">=</li>
      </div>
    );
  }
}

export default Numpad;
