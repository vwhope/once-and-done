import React from "react";
import "./style.css";

function Score(props) {

    return (
      <div className="current-score">
        Score: {props.score}
      </div>
    );
}

export default Score;