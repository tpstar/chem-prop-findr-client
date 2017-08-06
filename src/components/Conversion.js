import React, {Component} from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'

class Conversion extends Component {
  constructor(props) {
    super(props)

    this.state = {
      grams: 0
    }
  }

  render() {

    if (!this.props.chemical.fw) {
      return null //if formula weight not present, return nothing
    }

    return (
      <div className="row">
        <h3> Conversion </h3>
        <div className="conversion col-md-8 offset-md-4 col-sm-8 offset-sm-4">
          <DropdownButton title="Dropdown">
            <MenuItem href="#books">Books</MenuItem>
            <MenuItem href="#podcasts">Podcasts</MenuItem>
            <MenuItem href="#">Tech I Like</MenuItem>
            <MenuItem href="#">About me</MenuItem>
            <MenuItem href="#addBlog">Add a Blog</MenuItem>
          </DropdownButton>
        </div> {/* col-md-8 */}
      </div>
    )
  }
}

export default Conversion;
