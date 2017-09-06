import React, { Component } from "react";

import NavBar from "./NavBar/NavBar";

import data from '../data'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar menu={data} />
      </div>
    );
  }
}

export default App;
