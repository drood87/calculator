import React, { Component } from 'react';
import './calculator.scss';
import Display from './components/Display/Display';
import Numpad from './components/NumPad/Numpad';
import numpadButtons from './numpad-buttons';

class App extends Component {
  state = {
    numpadButtons: []
  };

  loadButtons = () => {
    this.setState({ numpadButtons });
  };

  render() {
    return (
      <div className="calculator">
        <Display />
        <ul className="calculator__numpad">
          <Numpad />
        </ul>
      </div>
    );
  }
}

export default App;
