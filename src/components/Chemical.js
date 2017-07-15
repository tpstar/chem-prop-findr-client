import React from 'react';

const Chemical = ({chemical}) => {
  return (
    <div>
      <p>name: {chemical.name}</p>
      <p>formula: {chemical.formula} </p>
    </div>
  )
}

export default Chemical;
