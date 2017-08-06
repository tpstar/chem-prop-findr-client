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

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.props.qChemical(this.state.term)
      console.log(this.state.term)
    }
  }

  render() {
    return (
      <div className="search-chemical">
        <div className="row">
          <div className="col-md-8 offset-md-4 col-sm-8 offset-sm-4">

              <FormControl
                bsSize="lg"
                value={this.state.term}
                type="text"
                className="form-control"
                placeholder="Enter the name of a chemical"
                onChange={this.handleOnChange}
                onKeyPress={this.handleKeyPress}
              />
          </div>
        </div>
      </div>
    )
  }
}

export default SearchChemical;
