import React from "react";
import "./style.css";

function StatusMsg(props) {

    return (
      <div className="game-status-message">
        This is where I want the WIN or LOSE StatusMsg to go {props.statusMsg}
      </div>
    );
}

export default StatusMsg;