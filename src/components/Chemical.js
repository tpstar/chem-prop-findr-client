import React from 'react';

const Chemical = ({chemical}) => {
  //const chemical = props.chemical;
  //const {chemical} = prop;
  const numbers = ["2", "3", "4", "5", "6", "7", "8", "9"]
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
      return <p className="wrong-name">Cannot find the chemical, please try again!</p>
    }
    const numbers = {
                "1": '0x2081',
                "2": '0x2082',
                "3": '0x2083',
                "4": '0x2084',
                "5": '0x2085',
                "6": '0x2086',
                "7": '0x2087',
                "8": '0x2088',
                "9": '0x2089'
    };

    return Object.keys(propObj).map(key => {
      if (!propObj[key] || propObj[key] === " ") {
        return null //if no property to show, return nothing
      }
      if (key === "formula") { //make formula numbers subscripted
        let subscripted = propObj[key].split("").map(char=>{
          if (Object.keys(numbers).includes(char)) {
            return String.fromCharCode(numbers[char]);
          }
          return char;
        }).join('');
        propObj[key] = subscripted;
      }

      return (
        <div key={key} className="row">
          <p className="span-1-of-3"> {key}: </p>
          <p className="span-2-of-3">  {propObj[key]} </p>

        </div>
      )
    })
  }



  return (
    <div className="chemical">
          {properties()}
    </div>
  )
}

export default Chemical;
