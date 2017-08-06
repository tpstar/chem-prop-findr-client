import React, {Component} from 'react'

class Conversion extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {

    if (!this.props.chemical.fw) {
      return null //if chemical formula weight not present, return nothing
    }

    return (
      <div className="conversion">
        <h3> Conversion </h3>
      </div>
    )
  }
}

export default Conversion;
