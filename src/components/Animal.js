import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

const Animal = (props) => {
  const { animal, bgNum } = props;
  const {
    id, name, image, animalType,
  } = animal;

  return (
    <div id={id} className={bgNum === 2 || bgNum === 3 ? 'animal red' : 'animal green'}>
      <div className="imgroute">
        <img src={image} alt="Zoo animal" />
        <Link to={`/details/${id}`}>
          <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
        </Link>
      </div>
      <h2>{name}</h2>

      <h3>{animalType} | {bgNum}</h3>
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
