const API_URL = process.env.REACT_APP_API_URL;
//console.log(API_URL);

const ChemicalService = {
  search: (chemical) => {
    return fetch(`${API_URL}/api/chemicals/search/${chemical}`)
            .then(response => response.json())
  },

  convert: (inputUnit, inputValue, outputUnit, fw) => {
    console.log(inputUnit, inputValue, outputUnit)
    let outputValue;
    switch (inputUnit) {
      case "g":
        if (outputUnit === "mol") { outputValue = (inputValue/fw).toFixed(2) }
        break;
      case "mol":
      if (outputUnit === "g") { outputValue = (inputValue*fw).toFixed(2) }
      break;
      default:
       outputValue = "Don't know what you are trying to do";
    }
    console.log(outputValue)
    return outputValue;
  }
}

export default ChemicalService;
