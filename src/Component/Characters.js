import React, { Component } from "react";
import Characters from "../Data/Characters";
import { Link } from 'react-router-dom';
// import Present from "../Present";

class characters extends Component {
    state = {
        characters: []
    }

    allCharacters = () => {
        return this.setState({characters : Characters.results})
    }

  males = () => {
    const males = Characters.results.filter(character => character.gender === 'Male');
    return this.setState({characters : males});
  };
  females = () => {
    const females = Characters.results.filter(character => character.gender === 'Female');
    return this.setState({characters : females });
  };

  statusFilter = status => {
    return Characters.results.filter(character => character.status === status);
  };

  alive = () => {
    const alive = Characters.results.filter(character => character.status === 'Alive');
    return this.setState({characters : alive})
  }
  
  dead = () => {
    const dead = Characters.results.filter(character => character.status === 'Dead');
    return this.setState({characters : dead})
  }

  componentDidMount() {
      this.allCharacters()
  }
  render() {
    return (
      <div>
          <ul>
              <li><button onClick={this.allCharacters} >Display all characters</button></li>
              <li><button onClick={this.males} >Display Males</button></li>
              <li><button onClick={this.females}>Display Females</button></li>
              <li><button onClick={this.alive}>Who's Alive?</button></li>
              <li><button onClick={this.dead}>Who's Dead?</button></li>
          </ul>
        <ul>
          {this.state.characters.map(character => (<li><Link to={`/characters/${character.id}`} >{character.name}</Link></li>))}
        </ul>
      </div>
    );
  }
}

export default characters;
