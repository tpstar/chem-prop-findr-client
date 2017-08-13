const API_URL = process.env.REACT_APP_API_URL;
//console.log(API_URL);

const ChemicalService = {
  search: (chemical) => {
    return fetch(`${API_URL}/api/chemicals/search/${chemical}`)
            .then(response => response.json())
  },

  convert: (inputUnit, inputValue, outputUnit, fw, densityRaw) => {
    const density = ChemicalService.densityProcess(densityRaw);
      // convert 0.865 g/mL at 25 °C(lit.) to 0.865
    let outputValue;
    switch (inputUnit) {
      case "g":
        if (outputUnit === "mol") { outputValue = (inputValue/fw).toFixed(2) }
        if (outputUnit === "mL") {outputValue = (inputValue/density).toFixed(2)}
        break;
      case "mol":
        if (outputUnit === "g") { outputValue = (inputValue*fw).toFixed(2) }
        if (outputUnit === "mL") {outputValue = (inputValue*fw/density).toFixed(2)}
        break;
      case "mL":
        if (outputUnit === "g") { outputValue = (inputValue*density).toFixed(2) }
        if (outputUnit === "mol") {outputValue = (inputValue*density/fw).toFixed(2)}
        break;
      default:
       outputValue = "Don't know what you are trying to do";
    }
    // console.log(outputValue)
    return outputValue;
  },

  densityProcess: (raw) => {
    return raw.split(" g/mL")[0]
  }
}

export default ChemicalService;
