import React, { Component } from "react";

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import SubFooter from './components/SubFooter';
import ImageCard from './components/ImageCard';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import characters from './characters.json';

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
