// Code ClickityClick Component Here
import React from 'react';
export default class ClickityClick extends React.Component {
  constructor() {
    super();
    this.state = {
      hasBeenClicked: false
    };

  }
  handleClick = () => {
    this.setState({
      hasBeenClicked: !this.state.hasBeenClicked
    });
  };

  render(){
    return(
      <div>
        
        <button onClick={this.handleClick}>{this.state.hasBeenClicked ? `ON` : `OFF`}</button>
      </div>
    );
  }
}
