import React, { Component } from 'react';
import Chemical from './components/Chemical'
import SearchChemical from './components/SearchChemical';
import Conversion from './components/Conversion'
import ChemicalService from './services/ChemicalService';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      chemical: {name: " "}
    }
  }

  searchChemical = chemical => {
    ChemicalService.search(chemical)
      .then(chemical => {
        this.setState({chemical})
        console.log(this.state.chemical)
      });

  }

  render() {
    return (
      <div className="App container">

          <h2>Chemical Property Search App</h2>

          <SearchChemical qChemical={this.searchChemical}/>

          <Chemical chemical={this.state.chemical}/>

          <Conversion chemical={this.state.chemical}/>

      </div>
    );
  }
}

export default App;
