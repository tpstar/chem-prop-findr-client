import React, { Component } from 'react';

class SearchChemical extends Component {
  constructor(props) {
    super(props)

    this.state = { term: ""};

  }

  hanleOnChange = event => {
    this.setState({term: event.target.value})
  }

  handleOnClick = event => {
    this.props.qChemical(this.state.term)
  }

  render() {
    return (

      <div className="search-chemical">
        <label htmlFor="chemical_search">Search Chemical: </label>
        <input
          value={this.state.term}
          placeholder="Chemical name"
          onChange={this.hanleOnChange}
        />
        <button onClick={this.handleOnClick}>Search</button>
      </div>

    )
  }
}

export default SearchChemical;
