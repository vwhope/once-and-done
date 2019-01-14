import React from "react";
import "./style.css";


// import frank_200 from "../../images/frank_200.png";
// import gary_200 from "../../images/gary_200.png";
// import gus_200 from "../../images/gus_200.png";
// import patrick_200 from "../../images/patrick_200.png";

// import harold_200 from "../../images/harold_200.png";
// import mrkrabs_200 from "../../images/mrkrabs_200.png";
// import mrspuff_200 from "../../images/mrspuff_200.png";
// import nancysuzy_200 from "../../images/nancysuzy_200.png";

// import sheldon from "../../images/sheldon_200.png";
// import spongebob_200 from "../../images/spongebob_200.png";
// import squidward_200 from "../../images/squidward_200.png";
// import pearl_200 from "../../images/pearl_200.png";

// import IncrementScore from "../IncrementScore";
// var totalScore = Number;

class ImageCard extends React.Component {

  // Set initial state for number of clicks for EACH image
  state = {
    clickCount: 1,
    totalScore: 0,
    statusMsg: ""
  };

  // increments this.state.clickCount by 1
  handleIncrementClickCount = () => {
  // using setState method to update state causing a re-render of data
    this.setState({ clickCount: this.state.clickCount + 1 });
  };

  winOrLose = (clickCount) => {
    // parse string clickCount into an integer
    let clickCountNbr = parseInt(clickCount);
    // if clickCount is > 1 for any image, the game is over, send Game Over message
    // ??? but question is how do I render this on the page - it doesn't go on the image card
    if (clickCountNbr > 1) {
      //  let statusMsg;
       let statusMsg = "You clicked an image more than once, Game Over!";
      // this.setState({ statusMsg: this.state.statusMsg });
      this.setState({ statusMsg: "You clicked an image more than once, Game Over!" });
      console.log (statusMsg);
      // ??? how do I get statusMsg onto page - I have changed its state
      return statusMsg ;
    } else {
      let totalScore =  Number;
      totalScore = totalScore + 1;
      console.log("Total Score: " + totalScore);
    };
  };


  render() {
    return (
      <div className="container">
        <div className="imagewrapper">
          <div className="imagerow">
            <img className="characterImage"
              style={{ backgroundImage: `url("${this.props.path}")` }}
              aria-label={this.props.name}
              // alt={this.props.name}
                 alt=""
              // src={this.props.path}
                onClick = {() => {
                this.handleIncrementClickCount();
                this.winOrLose(this.state.clickCount);
                // console.log(this.props.path);
                console.log("# of Clicks for " + this.props.name + ": " + this.state.clickCount);
              }}
            />
          </div>
        </div>
      </div>
  );
}}

export default ImageCard;


// /// working original
// function ImageCard(props) {

//   return (
//       <div className="container">
//         <div className="imagewrapper">
//           <div className="imagerow">
//             <img className="characterImage"
//               alt={props.name}
//               src={props.path}
//               onClick = {() => {
//                 this.handleIncrementScore();
//                 console.log(props.path);
//               }}
//             />
//           </div>
//         </div>
//       </div>
//   );
// }

// export default ImageCard;


// function Shuffle(characters) {
  //   var currentIndex = characters.length, temporaryValue, randomIndex;

  //   // While there remain elements to shuffle...
  //   while (0 !== currentIndex) {

  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;

  //     // And swap it with the current element.
  //     temporaryValue = characters[currentIndex];
  //     characters[currentIndex] = characters[randomIndex];
  //     characters[randomIndex] = temporaryValue;
  //   }

  //   return characters;
  // }

  // Another shuffle option to consider
  // function Shuffle() {
  // characters.sort(function() { return 0.5 - Math.random() });
  // };

