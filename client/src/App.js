import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Saved from "./Pages/Saved";
import Info from "./Pages/Info";
import Navbar from "./components/Navbar"


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/books/:id" component={Info} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
