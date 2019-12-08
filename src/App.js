import React, {Component} from 'react';

import "./App.css";

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters: [
        {name: "Frankenstein", id: 1},
        {name: "Black Smoke", id: 2},
        {name: "Chaka Zulu", id: 3},
        {name: "It", id: 4},
        {name: "Godzilla", id: 5},
        {name: "Big Fat Guy", id: 6}
      ]
    }
  
  }

  render(){
    return (
      <div className="App">
        {this.state.monsters.map(monster=>
          <h1 id={monster.id}>{monster.name}</h1>
          )}
      </div>
    );
  }
  
}

export default App;
