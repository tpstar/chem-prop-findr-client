const ChemicalService = {
  fetchChemical: () => {
    return fetch('/chemical')
      .then(response => response.json())
  }
}

export default ChemicalService;
