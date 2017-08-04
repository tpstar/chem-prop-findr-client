import React from 'react';

const Chemical = ({chemical}) => {
  return (
    <div className="chemical">
      <p>name: {chemical.name}</p>
      <p>formula: {chemical.formula} </p>
      <p>formula weight: {chemical.fw} </p>
      <p>density: {chemical.density} </p>
      <p>boiling point: {chemical.bp} </p>
      <p>melting point: {chemical.mp} </p>
    </div>
  )
}

export default Chemical;
