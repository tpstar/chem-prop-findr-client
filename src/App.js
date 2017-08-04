import React, { Component } from 'react';
// import Chemical from './components/Chemical'
import SearchChemical from './components/SearchChemical';
import ChemicalService from './services/ChemicalService';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      // chemicals: [],
      chemical: {
        name: '',
        formula: '',
        fw: '',
        bp: '',
        mp: ''
      }
    }
  }

  // componentDidMount() {
  //   ChemicalService.fetchChemical().then(chemicals => this.setState({chemicals}))
  // }

  // searchChemical = chemical => {
  //   ChemicalService.searchChemical.then(chemical => this.setState({
  //     chemical: this.state.chemical
  //   }))
  // }
  searchChemical = chemical => {
    console.log(chemical)
  }

  render() {
    return (
      <div className="App">

        <h1>Chemical Property Search App</h1>

        <div className="searchbar">
          <SearchChemical qChemical={this.searchChemical}/>
        </div>

        {/*<div className="chemicals">
          <Chemical chemicals={this.state.chemicals}/>
        </div>*/}

      </div>
    );
  }
}

export default App;
