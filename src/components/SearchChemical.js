import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap'

class SearchChemical extends Component {
  constructor(props) {
    super(props)

    this.state = { term: ""};

  }

  handleOnChange = event => {
    this.setState({term: event.target.value})
  }

  handleOnSubmit = event => {
    event.preventDefault(); // prevent the page from refreshing
    this.props.qChemical(this.state.term)
    this.setState({term: ""})
                  // initialize the search term
  }

  render() {
    return (
      <div className="search-chemical">
        <h3>Search</h3>
        <form onSubmit={this.handleOnSubmit}>
          <FormControl
            bsSize="lg"
            value={this.state.term}
            type="text"
            className="form-control"
            placeholder="Enter the name of a chemical"
            onChange={this.handleOnChange}
            // onKeyPress={this.handleKeyPress}
          />
        </form>
      </div>
    )
  }
}

export default SearchChemical;
