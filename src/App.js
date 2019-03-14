import React, { Component } from 'react';
import './app.scss';
import Display from './components/Display/Display';
import Numpad from './components/NumPad/Numpad';
import buttons from './numpad-buttons';

class App extends Component {
  state = {
    numpadButtons: []
  };

  loadButtons = () => {
    this.setState({ numpadButtons: buttons }); // get buttons from the helper numpad-buttons.js file and get them into state
  };

  boop = e => {};

  componentDidMount() {
    this.loadButtons(); // will mount will run before the render method, as we just need the buttons to be rendered once on the numpad
  }

  render() {
    return (
      <div className="calculator">
        <Display />
        <ul className="calculator__numpad">
          {/* loop over the numpad buttons array to render them onto page */}
          {this.state.numpadButtons.map(button => (
            <Numpad buttons={button} key={button} boop={this.boop} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
