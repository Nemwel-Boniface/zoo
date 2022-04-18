import React from 'react';
import Proptypes from 'prop-types';

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

Animal.propTypes = {
  animal: Proptypes.shape({
    id: Proptypes.number.isRequired,
  name: Proptypes.string.isRequired,
  animalType: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired
  })
}
export default Animal;
