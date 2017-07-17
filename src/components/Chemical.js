import React from 'react';

const Chemical = ({chemicals}) => {
  const renderChemicals = chemicals.map(chemical => {
    return ([
      <p>name: {chemical.name}</p>,
      <p>formula: {chemical.formula} </p>
    ])
  })
  return (
    <div>
      {renderChemicals}
    </div>
  )
}

export default Chemical;
