import React from "react";
import "./style.css";
import "../../App.js";

function SubHeader(props) {
    return (
        <div className="sub-header-background">
            <p className="sub-header-static-text">Click each image, but ONLY ONCE or the game is over!</p>
            <p className="status-message">{props.statusMessage}</p>
            <p className="score">Score: {props.currentScore}</p>
            <p className="top-score">Top Score: {props.topScore}</p>
        </div>
    );
}

export default SubHeader;