import React, {Component} from 'react'
import { DropdownButton, MenuItem, FormGroup, InputGroup, FormControl } from 'react-bootstrap'

class Conversion extends Component {
  constructor(props) {
    super(props)

    this.state = {
      grams: 0,
      startUnit: "unit",
      startValue: 0
    }
  }

  handleOnClick = startUnit => {
    this.setState({startUnit})
    // console.log(startUnit);
  }

  handleOnChange = startValue => {
    this.setState({startValue})
    // console.log(startValue)
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
              <FormControl
                type="text"
                onChange={event => this.handleOnChange(event.target.value)}
              />
              <DropdownButton
                componentClass={InputGroup.Button}
                id="input-dropdown-addon"
                title={this.state.startUnit}
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
