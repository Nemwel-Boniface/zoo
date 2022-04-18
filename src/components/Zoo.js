import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getAnimalsFromAPI } from '../redux/Zoo/Zoo';
import Animal from './Animal';

const Zoo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnimalsFromAPI());
  }, []);
  const animals = useSelector((state) => state.animals, shallowEqual);

  return (
    <div className="Zoo">
      <ul className="zooanimals">
        {animals.map((animal) => (
          <Animal
            key={animal.id}
            animal={animal}
            name={animal.name}
            latinName={animal.latin_name}
            animalType={animal.animal_type}
            activeTime={animal.active_time}
            minLength={animal.length_min}
            maxLength={animal.length_max}
            minWeight={animal.weight_min}
            maxWeight={animal.weight_max}
            lifeSpan={animal.lifespan}
            habitats={animal.habitat}
            diet={animal.diet}
            locattions={animal.geo_range}
            image={animal.image_link}
          />
        ))}
      </ul>
    </div>
  );
};

export default Zoo;
