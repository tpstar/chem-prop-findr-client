import React from 'react';

const Chemical = ({chemicals}) => {
  const renderChemicals = chemicals.map(chemical => {
    return ([
      <p>name: {chemical.name}</p>,
      <p>formula: {chemical.formula} </p>,
      <p>formula weight: {chemical.fw} </p>,
      <p>boiling point: {chemical.bp} </p>,
      <p>melting point: {chemical.mp} </p>
    ])
  })
  return (
    <div>
      {renderChemicals}
    </div>
  )
}

export default Chemical;
