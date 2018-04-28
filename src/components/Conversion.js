import React, { Component } from 'react'
import { DropdownButton, MenuItem, FormGroup, InputGroup, FormControl, Panel } from 'react-bootstrap'
import ChemicalService from '../services/ChemicalService';

class Conversion extends Component {
  constructor(props) {
    super(props)

    this.state = {
      grams: 0,
      inputUnits: ["g", "mol", "mL"],
      selectedInputUnit: "unit",
      outputUnits: [],
      selectedOutputUnit: "unit",
      inputValue: "",
      outputValue: " ",
      open: false
    }
  }

  handleOnClickInput = selectedInputUnit => {
    const index = this.state.inputUnits.indexOf(selectedInputUnit);
    // when input unit is selected that unit is removed from output unit
    const outputUnits = JSON.parse(JSON.stringify(this.state.inputUnits));
    outputUnits.splice(index, 1);
    this.setState({selectedInputUnit, outputUnits})
  }

  handleOnChange = inputValue => {
    this.setState({inputValue})
    // console.log(inputValue)
  }

  handleOnClickOutput = selectedOutputUnit => {

    const outputValue =
      ChemicalService.convert(this.state.selectedInputUnit, this.state.inputValue,
                              selectedOutputUnit, this.props.chemical.fw, this.props.chemical.density)

    this.setState({selectedOutputUnit,
                   outputValue,
                   open: true })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isNew) {
      this.setState({
        selectedInputUnit: "unit",
        outputUnits: [],
        selectedOutputUnit: "unit",
        inputValue: "",
        outputValue: " ",
        open: false
      })
    }
    if (!nextProps.chemical.density) {
      this.setState({inputUnits: ["g", "mol"]})
      //if no density present, then remove mL from units
    }
  }

  render() {

    const inputDropdown = this.state.inputUnits.map(inputUnit => {
      return (
        <MenuItem
          onClick={() => this.handleOnClickInput(inputUnit)}
          key={inputUnit}
          >{inputUnit}
        </MenuItem>
      )
    })

    const outputDropdown = this.state.outputUnits.map(outputUnit => {
      return (
        <MenuItem
          onClick={() => this.handleOnClickOutput(outputUnit)}
          key={outputUnit}
          >{outputUnit}
        </MenuItem>
      )
    })

    if (!this.props.chemical.fw) {
      return null //if formula weight not present, return nothing
    }



    return (
      <div className="conversion">

            <h4> Conversion </h4>
            <FormGroup>
              <InputGroup>
                <FormControl
                  type="text"
                  onChange={event => this.handleOnChange(event.target.value)}
                  value={this.state.inputValue}
                />
                <DropdownButton
                  componentClass={InputGroup.Button}
                  id="input-dropdown-addon"
                  title={this.state.selectedInputUnit}
                >
                  {inputDropdown}
                </DropdownButton>
              </InputGroup>
            </FormGroup>

            <DropdownButton
              componentClass={InputGroup.Button}
              id="input-dropdown-addon"
              title={this.state.selectedOutputUnit}
            >
              {outputDropdown}
            </DropdownButton>
            <Panel collapsible expanded={this.state.open} className="panel">
              {this.state.outputValue}
            </Panel>

      </div>
    )
  }
}

export default Conversion;
