import React, {Component} from 'react';
import {CardList} from "./components/card-list/card-list.component.jsx";


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
          <CardList>
              {this.state.monsters.map(
                  monster=>(<h1 key={monster.id}>{monster.name}</h1>))}
          </CardList>
      </div>
    );
  }
  
}

export default App;
