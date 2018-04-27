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
      chemical: {name: " "},
      isNew: true
    }

    //this.searchChemical = this.searchChemical.bind(this)
  }

  //searchChemical(chemical) {
  searchChemical = chemical => {
    ChemicalService.search(chemical)
      .then(chemical => {
        this.setState({chemical,
                       isNew: true})
      });

  }

  render() {
    return (
      <div className="App container">
        <img src={require('./img/hanlee_logo.png')} alt="hanlee logo" className="logo"/>
        <div className='row'>
          <div className='col span-1-of-2'>
            <h3>Chemical Search App</h3>
          </div>
          <div className='col span-1-of-2'>
            <SearchChemical qChemical={this.searchChemical}/>

            <Chemical chemical={this.state.chemical}/>

            <Conversion chemical={this.state.chemical} isNew={this.state.isNew}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
