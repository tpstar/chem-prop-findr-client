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

    return Object.keys(propObj).map(key => {
      if (!propObj[key] || propObj[key] === " ") {
        return null //if no property to show, return nothing
      }
      return (
        <div key={key}>
          <h4 className="col-md-5 col-sm-5 col-xs-5"> {key}: </h4>
          <h4 className="col-md-7 col-sm-7 col-xs-7"> {propObj[key]} </h4>
        </div>
      )
    })
  }

  // console.log(chemical.name)
  if (!chemical.name && chemical.name !== " ") {
    return <h4 className="wrong-name">Cannot find the chemical, please try again!</h4>
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
