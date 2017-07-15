import React, { Component } from 'react';
import Chemical from './components/Chemical'
import './App.css';

let chemical = {
  name: "Acetic acid",
  formula: "C2H4O2"
}

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>Chemical Property Search App</h1>

        <div className="searchbar">
          SearchBar
        </div>

        <div className="chemical">
          <Chemical chemical={chemical}/>
        </div>

      </div>
    );
  }
}

export default App;
