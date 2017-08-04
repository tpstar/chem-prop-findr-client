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
          <p key={key}> {key}: {propObj[key]} </p>
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
      {properties()}
    </div>
  )
}

export default Chemical;
