import React, { Component } from "react";
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import SubFooter from './components/SubFooter';
import ImageCard from './components/ImageCard';
import Footer from './components/Footer';
import Characters from './characters.json';

// on click of any image - reshuffle the order in which the images are displayed
const shuffleArray = (array) => {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
};

class App extends Component {
  // Set initial state for all variable used in game
  state = {
    currentScore: 0,
    topScore: 0,
    result: "",
    clicked: [],
    Characters,
    gameOver: false
  };

  componentDidMount() {
    this.setState({result: "To begin, CLICK any character"});
  }

  clickedImage = (id) => {
    if(!this.state.clicked.includes(id)) {
      this.pointIncrease();
      this.state.clicked.push(id);
      this.setState({
        gameOver: false
      });
    } else {
      this.resetGame();
    }
  }

  pointIncrease = () => {
    let score = this.state.currentScore + 1;

    if(score === this.state.Characters.length) {
      this.setState({
        result: "Winner!",
        topScore: score,
        currentScore: 0,
        clicked: [],
        Characters,
        gameOver: false
      });
    } else if (score > this.state.topScore) {
      this.setState({
        topScore: score,
        currentScore: score,
        result: "A NEW High Score!",
      });
    } else {
      this.setState({
        currentScore: score,
        result: "You did it! Can You Do It Again?"
      });
    }
     this.resetCharacterArray();
  }

  resetGame = () => {
    this.setState({
      points: 0,
      currentScore: 0,
      topScore: this.state.topScore,
      result: "SORRY, you clicked a character twice, GAME OVER!",
      clicked: [],
      Characters,
      gameOver: true
    });
    this.resetCharacterArray();
  }

  resetCharacterArray = () => {
    let newScramble = shuffleArray(Characters);
    this.setState({Characters: newScramble})
  }

  // Map this.state.characters, render an ImageCard component for each character object
  render() {
    return (
      <div className="container">
        <Header />
        <SubHeader topScore={this.state.topScore} currentScore={this.state.currentScore} statusMessage={this.state.result} />
        {this.state.Characters.map(character => (
        <ImageCard
                    id={character.id}
                    key={character.id}
                    name={character.name}
                    path={character.path}
                    clickedImage={this.clickedImage}
        />
        ))}
        <SubFooter />
        <Footer />
      </div>
    );
  }
}

export default App;
