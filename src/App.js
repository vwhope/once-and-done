import React, { Component } from "react";

import Header from './components/Header';
// import Game from './components/Game';
import SubHeader from './components/SubHeader';
import SubFooter from './components/SubFooter';
import ImageCard from './components/ImageCard';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import characters from './characters.json';

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
  // Setting this.state.characters to the characters.json array
  state = {
    characters,
  };

  // Map over this.state.characters and render an ImageCard component for each characterImage object
  render() {
    return (
        <Wrapper>
          <Header />
              {/* <Game /> */}
            <SubHeader />
            {this.state.characters.map(character => (
            <ImageCard
                id={character.id}
                key={character.id}
                name={character.name}
                path={character.path}
            />
            ))}
            <SubFooter />
          <Footer />
        </Wrapper>
    );
  }
}

export default App;
