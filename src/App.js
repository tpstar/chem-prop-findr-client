import React, { Component } from 'react';
// import Chemical from './components/Chemical'
import SearchChemical from './components/SearchChemical';
import ChemicalService from './services/ChemicalService';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      chemical: {}
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
      <div className="App">

        <h1>Chemical Property Search App</h1>

        <div className="searchbar">
          <SearchChemical qChemical={this.searchChemical}/>
        </div>

        {/*<div className="chemical">
          <Chemical chemical={this.state.chemical}/>
        </div>*/}

      </div>
    );
  }
}

export default App;
