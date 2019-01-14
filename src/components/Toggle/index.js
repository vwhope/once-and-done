import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // you must bind to make "this" work in the callback
    this.handleClick = this.handleClick.bind(this);
}

handleClick() {
    this.setState(state => ({
        isToggleOn: !state.isToggleOn
    }));
}

render() {
    return (
        <button onClick={this.handleClick}>
            {this.state.isToggleon ? 'ON' : 'OFF'}
        </button>
    );
  }
}

export default Toggle;
// <Toggle /> render in the DOM ReactDOM.render