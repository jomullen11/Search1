import React, { Component, Fragment } from "react";
import Characters from "../Data/Characters.json";

class character extends Component {
  render() {
    const character = Characters.results.find(
      character => character.id === parseInt(this.props.match.params.id)
    );

console.log('props', this.props)
    return (
      <div>
        <h1>
            <a href={character.url}>{character.name}</a>
        </h1>

        <Fragment>
          <img src={character.image} alt="Wubba-lubba-dub-dub!!"/>
          <div>
          {character.location.name}
          </div>
          <div>
            {character.species}
          </div>
        </Fragment>

      </div>
    );
  }
}

export default character;
