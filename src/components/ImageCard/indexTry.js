import React from "react";
import "./style.css";

import frank_200 from "../../images/frank_200.png";
import gary_200 from "../../images/gary_200.png";
import gus_200 from "../../images/gus_200.png";
import patrick_200 from "../../images/patrick_200.png";

import harold_200 from "../../images/harold_200.png";
import mrkrabs_200 from "../../images/mrkrabs_200.png";
import mrspuff_200 from "../../images/mrspuff_200.png";
import nancysuzy_200 from "../../images/nancysuzy_200.png";

import sheldon_200 from "../../images/sheldon_200.png";
import spongebob_200 from "../../images/spongebob_200.png";
import squidward_200 from "../../images/squidward_200.png";
import pearl_200 from "../../images/pearl_200.png";

function ImageCard(props) {

    return (
      <div className="container">
        <div className="imagewrapper">
          <div className="imagerow">
            <img className="characterImage" alt={props.name} src={frank_200} />
            <img className="characterImage" alt={props.name} src={gary_200} />
            <img className="characterImage" alt={props.name} src={gus_200} />
            <img className="characterImage" alt={props.name} src={patrick_200} />
          </div>
          <div className="imagerow">
            <img className="characterImage" alt={props.name} src={harold_200} />
            <img className="characterImage" alt={props.name} src={mrkrabs_200} />
            <img className="characterImage" alt={props.name} src={mrspuff_200} />
            <img className="characterImage" alt={props.name} src={nancysuzy_200} />
          </div>
          <div className="imagerow">
            <img className="characterImage" alt={props.name} src={sheldon_200} />
            <img className="characterImage" alt={props.name} src={spongebob_200} />
            <img className="characterImage" alt={props.name} src={squidward_200} />
            <img className="characterImage" alt={props.name} src={pearl_200} />
          </div>
        </div>
      </div>
    );
}

export default ImageCard;