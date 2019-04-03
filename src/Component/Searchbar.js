import React from "react";
import Characters from "../Data/Characters.json";
import Present from "../Present";
import { Link } from 'react-router-dom';

class Searchbar extends React.Component {
  state = {
      search: "",
      characters: []
    }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  allCharacters = () => {
    return this.setState({characters : Characters.results})
}

  mortySearch = rickSearch => {
    return rickSearch.map(character => <Link to={`/characters/${character.id}`} ><Present results={character}/></Link>);

  };

  searchFilter = searchCharacter => {
    return Characters.results.filter(
      person =>
        person.name.includes(searchCharacter) ||
        person.species.includes(searchCharacter)
    );
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              placeholder="Search by name"
              value={this.state.search}
              name="search"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Search" />
        </form>
        <h3>{this.mortySearch(this.searchFilter(this.state.search))}</h3>
        <hr />
      </React.Fragment>
    );
  }
}
export default Searchbar;
// {this.mortySearch(this.searchFilter(this.state.search))}