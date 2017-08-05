import React from 'react';

const Chemical = ({chemical}) => {
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
      if (propObj[key] && propObj[key] !== " ") {
        return (
          <div key={key}>
            <span className="col-md-6 col-sm-6 col-xs-6"> {key}: </span>
            <span className="col-md-6 col-sm-6 col-xs-6"> {propObj[key]} </span>
          </div>
        )
      }
    })
  }

  // console.log(chemical.name)
  if (!chemical.name && chemical.name !== " ") {
    return <p>Cannot find the chemical, please try again!</p>
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
