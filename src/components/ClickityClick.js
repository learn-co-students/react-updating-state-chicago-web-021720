// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      toggle: false
    };
  }
 
  handleClick = () => {
    this.setState(prevState => {
        return {
            toggle: !prevState.toggle
        }
    })
  };
 
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.toggle ? "ON" : "OFF"}</button>
      </div>
    );
  }
}
 
export default ClickityClick;