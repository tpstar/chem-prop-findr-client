import React, { Component } from 'react'
import { DropdownButton, MenuItem, FormGroup, InputGroup, FormControl, Panel } from 'react-bootstrap'
import ChemicalService from '../services/ChemicalService';

class Conversion extends Component {
  constructor(props) {
    super(props)

    this.state = {
      grams: 0,
      inputUnit: "unit",
      outputUnit: "unit",
      inputValue: 0,
      outputValue: " ",
      open: false
    }
  }

  handleOnClickInput = inputUnit => {
    this.setState({inputUnit})
    // console.log(inputUnit);
  }

  handleOnChange = inputValue => {
    this.setState({inputValue})
    // console.log(inputValue)
  }

  handleOnClickOutput = outputUnit => {

    const outputValue =
      ChemicalService.convert(this.state.inputUnit, this.state.inputValue,
                              outputUnit, this.props.chemical.fw, this.props.chemical.density)

    this.setState({outputUnit,
                   outputValue,
                   open: true })
  }



  render() {

    if (!this.props.chemical.fw) {
      return null //if formula weight not present, return nothing
    }

    return (
      <div className="conversion">
        <div className="row">
          <div className="col-md-8 offset-md-4 col-sm-8 offset-sm-4">
            <h3> Conversion </h3>
            <FormGroup>
              <InputGroup>
                <FormControl
                  type="text"
                  onChange={event => this.handleOnChange(event.target.value)}
                />
                <DropdownButton
                  componentClass={InputGroup.Button}
                  id="input-dropdown-addon"
                  title={this.state.inputUnit}
                >
                  <MenuItem
                    onClick={() => this.handleOnClickInput("g")}
                    key="grams"
                    >g
                  </MenuItem>
                  <MenuItem
                    onClick={() => this.handleOnClickInput("mol")}
                    key="mol"
                    >mol
                  </MenuItem>
                  <MenuItem
                    onClick={() => this.handleOnClickInput("mL")}
                    key="mL"
                    >mL
                  </MenuItem>
                </DropdownButton>
              </InputGroup>
            </FormGroup>

            <DropdownButton
              componentClass={InputGroup.Button}
              id="input-dropdown-addon"
              title={this.state.outputUnit}
            >
              <MenuItem
                onClick={() => this.handleOnClickOutput("g")}
                key="grams"
                >g
              </MenuItem>
              <MenuItem
                onClick={() => this.handleOnClickOutput("mol")}
                key="mol"
                >mol
              </MenuItem>
              <MenuItem
                onClick={() => this.handleOnClickOutput("mL")}
                key="mL"
                >mL
              </MenuItem>
            </DropdownButton>
            <Panel collapsible expanded={this.state.open} className="panel">
              {this.state.outputValue}
            </Panel>

          </div>
        </div>
      </div>
    )
  }
}

export default Conversion;
