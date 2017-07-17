import React, { Component } from 'react';
import Chemical from './components/Chemical'
import ChemicalService from './services/ChemicalService';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      chemicals: []
    }
  }

  componentDidMount() {
    ChemicalService.fetchChemical().then(chemicals => this.setState({chemicals}))
  }

  render() {
    return (
      <div className="App">

        <h1>Chemical Property Search App</h1>

        <div className="searchbar">
          SearchBar
        </div>

        <div className="chemicals">
          <Chemical chemicals={this.state.chemicals}/>
        </div>

      </div>
    );
  }
}

export default App;
