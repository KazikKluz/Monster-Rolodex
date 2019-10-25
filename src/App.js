import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Frankenstein",
          id: 1
        },
        {
          name: "Banshee",
          id: 2
        },
        {
          name: "Black Smoke",
          id: 3
        }
      ]
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}/>>
      </div>
    );
  }
}

export default App;
