import React from "react";
import "./style.css";
import Score from "../Score";

function SubFooter(props) {

    return (
        <div className="subfooterbackground">
            <Score />
        </div>
    );
}

export default SubFooter;