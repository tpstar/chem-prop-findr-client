import React, { Component } from 'react';

class SearchChemical extends Component {
  constructor(props) {
    super(props)

    this.state = { term: ""};

  }

  handleOnChange = event => {
    this.setState({term: event.target.value})
  }

  handleOnClick = event => {
    this.props.qChemical(this.state.term)
    console.log(this.state.term)
  }

  render() {
    return (

      <div className="search-chemical">
        <div className="row justify-content-center">
          <div className="col-md-8 offset-md-4 col-sm-8 offset-sm-4">
            <div className="input-group">
              <input
                value={this.state.term}
                type="text"
                className="form-control"
                placeholder="Chemical name"
                onChange={this.handleOnChange}
              />
              <span className="input-group-btn">
                <button
                  onClick={this.handleOnClick}
                  className="btn btn-primary"
                  type="button">
                  Search
                </button>
              </span>
            </div>
          </div>
        </div>
        <br></br>
      </div>

    )
  }
}

export default SearchChemical;
