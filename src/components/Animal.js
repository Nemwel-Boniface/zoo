import React from 'react';
import Proptypes from 'prop-types';

const Animal = (props) => {
  const { animal } = props;
  const {
    id, name, image, animalType,
  } = animal;
  return (
    <div id={id} className="animal">
      <div className='imgroute'>
      <img src={image} alt="Zoo animal" />
      <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
      </div>
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
    image: Proptypes.string.isRequired,
  }).isRequired,
};
export default Animal;
