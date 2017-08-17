import React from 'react';

const Chemical = ({chemical}) => {
  //const chemical = props.chemical;
  //const {chemical} = prop;
  const properties = () => {
    const propObj = {
      "name": chemical.name,
      "formula": chemical.formula,
      "formula weight": chemical.fw,
      "density": chemical.density,
      "boiling point": chemical.bp,
      "melting point": chemical.mp
    };

    if (!chemical.name && chemical.name !== " ") {
      return <h4 className="wrong-name">Cannot find the chemical, please try again!</h4>
    }
    
    return Object.keys(propObj).map(key => {
      if (!propObj[key] || propObj[key] === " ") {
        return null //if no property to show, return nothing
      }
      return (
        <div key={key}>
          <h4 className="col-md-8 col-sm-8 col-xs-8"> {key}: </h4>
          <h4 className="col-md-4 col-sm-4 col-xs-4"> {propObj[key]} </h4>
        </div>
      )
    })
  }



  return (
    <div className="chemical">
      <div className="row">
        <div className="col-md-8 offset-md-4 col-sm-8 offset-sm-8 col-xs-8 offset-xs-8">
          {properties()}
        </div>
      </div>
    </div>
  )
}

export default Chemical;
