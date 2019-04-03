import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Searchbar from "./Component/Searchbar";
import Home from "./Component/Home";
import Characters from "./Component/Characters";
import Character from "./Component/Character"

class routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Searchbar} />
        <Route path="/characters/:id" component={Character} />
        <Route path="/characters" component={Characters} />
      </Switch>
    );
  }
}
export default routes;
