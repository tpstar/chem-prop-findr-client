import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchChemical } from "../actions/index";
import { FormControl } from 'react-bootstrap';

export class SearchChemical extends Component {
  constructor(props) {
    super(props)
    this.state = { term: ""};
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange(event) {
    this.setState({term: event.target.value})
  }

  handleOnSubmit(event) {
    console.log(this.state.term);
    event.preventDefault(); // prevent the page from refreshing
    this.props.fetchChemical(this.state.term);
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

export default connect(null,{ fetchChemical })(SearchChemical);
