import React, { Component } from 'react';

class ToggleClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      display: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ display: !this.state.display });
  }

  render() {
    return (
      <div>
        <button onClick={this.IncrementItem}>+1</button>
        <button onClick={this.DecreaseItem}>-1</button>
        <button onClick={this.ToggleClick}>
          { this.state.display ? 'Hide' : 'Show' }
        </button>
        { this.state.display ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default ToggleClick;