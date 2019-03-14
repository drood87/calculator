import React from 'react';
import './numpad.scss';

class Numpad extends React.Component {
  targetValue = React.createRef();

  boopboop = e => {
    console.log(this.targetValue.current.value);
  };

  render() {
    return (
      <li
        className={`numpad__button numpad__button--${this.props.buttons}`}
        onClick={this.boopboop}
        ref={this.targetValue}
        value={this.props.buttons}
      >
        {this.props.buttons}{' '}
        {/*put a unique class for each button for styling purposes and receive the state from App.js to render the buttons onto page*/}
      </li>
    );
  }
}

export default Numpad;
