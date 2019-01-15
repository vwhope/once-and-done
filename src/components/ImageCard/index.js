import React from "react";
import "./style.css";

function ImageCard (props) {
  return (
    <div id={props.id} className="image-id-clicked" value={props.id} onClick={() =>
      props.clickedImage(props.id)
      }>
      <div className="images">
          <img src={props.path} className="display-image" alt="spongebob character" />
      </div>
    </div>
  )
}

export default ImageCard;
