import React from 'react';

const Animal = (props) => {
  const { animal } = props;
  const {
    id, name, image, animalType,
  } = animal;
  return (
    <div id={id} className="animal">
      <img src={image} alt="Zoo animal" />
      <h2>{name}</h2>
      <h3>{animalType}</h3>
    </div>
  );
};
export default Animal;
