import React, { Component } from "react";
import "./style.css";

import SubHeader from '../SubHeader';
import SubFooter from '../SubFooter';
import ImageCard from './ImageCard';
import characters from '../../characters';

function Game(props) {
    return (
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
    );
}

export default Game;