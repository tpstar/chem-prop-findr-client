const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);

const ChemicalService = {
  // fetchChemical: () => {
  //   return fetch(`${API_URL}/api/chemicals`)
  //     .then(response => response.json())
  // }

  search: (chemical) => {
    console.log("I am in Service " + chemical)
    return fetch(`${API_URL}/api/chemicals/search/${chemical}`)
            .then(response => response.json())
  }
}

export default ChemicalService;
