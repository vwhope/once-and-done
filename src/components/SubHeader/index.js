import React from "react";
import "./style.css";
import StatusMsg from "../StatusMsg";

function SubHeader(props) {
    return (
        <div className="sub-header-background">
            <p className="sub-header-static-text">Click each image, but ONLY ONCE or the game is over!</p>
            <StatusMsg />
        </div>
    );
}

export default SubHeader;