const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);

const ChemicalService = {
  fetchChemical: () => {
    return fetch('${API_URL}/chemicals')
      .then(response => response.json())
  }
}

export default ChemicalService;
