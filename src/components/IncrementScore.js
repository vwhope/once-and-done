import React from "react";

// IncrementScore defined as a class instead of a function
// local state feature is only available to Classes
// state is private
// state is fully controlled by the component
// a change in state causes re-rendering

class IncrementScore extends React.Component {
    // Setting the initial state of the Counter component
    state = {
      score: 0
    };

    // handleIncrement increments this.state.score by 1
    handleIncrementScore = () => {
      // We always use the setState method to update a component's state
      this.setState({ score: this.state.score + 1 });
    };

    // The render method returns the JSX that should be rendered
    // MY ISSUE is that the onClick happens in the ImageCard for EACH image
    // so the score is forEACH image - not total clicks
    render() {
      return (
        <div>
          <h1>Score: {this.state.score}</h1>
          <button className="btn btn-primary" onClick={this.handleIncrementScore}>
              Increment
            </button>
        </div>
      );
    }
  }

  export default IncrementScore;



