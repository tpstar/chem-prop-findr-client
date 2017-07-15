import React, { Component } from 'react';
import Chemical from './components/Chemical'
import ChemicalService from './services/ChemicalService';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      chemical: {}
    }
  }

  componentDidMount() {
    ChemicalService.fetchChemical().then(chemical => this.setState({chemical}))
  }

  render() {
    return (
      <div className="App">

        <h1>Chemical Property Search App</h1>

        <div className="searchbar">
          SearchBar
        </div>

        <div className="chemical">
          <Chemical chemical={this.state.chemical}/>
        </div>

      </div>
    );
  }
}

export default App;
