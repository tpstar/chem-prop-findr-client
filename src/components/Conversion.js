import React, {Component} from 'react'
import { DropdownButton, MenuItem, FormGroup, InputGroup, FormControl } from 'react-bootstrap'

class Conversion extends Component {
  constructor(props) {
    super(props)

    this.state = {
      grams: 0,
      inputUnit: "unit"
    }
  }

  handleOnClick = inputUnit => {
    this.setState({inputUnit})
    console.log(inputUnit);
  }

  // onVideoSelect={selectedVideo => this.setState({ selectedVideo })}

  render() {

    if (!this.props.chemical.fw) {
      return null //if formula weight not present, return nothing
    }

    return (
      <div className="row">
        <h3> Conversion </h3>
        <div className="conversion col-md-8 offset-md-4 col-sm-8 offset-sm-4">
          <FormGroup>
            <InputGroup>
              <FormControl type="text" />
              <DropdownButton
                componentClass={InputGroup.Button}
                id="input-dropdown-addon"
                title={this.state.inputUnit}
              >
                <MenuItem
                  onClick={() => this.handleOnClick("g")}
                  key="grams"
                  >g
                </MenuItem>
                <MenuItem
                  onClick={() => this.handleOnClick("mol")}
                  key="mol"
                  >mol
                </MenuItem>
              </DropdownButton>
            </InputGroup>
          </FormGroup>
        </div>
      </div>
    )
  }
}

export default Conversion;
