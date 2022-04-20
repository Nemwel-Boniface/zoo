import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Animal from './Animal';
import Landing from './landing';

const Zoo = () => {
  const animals = useSelector((state) => state.animals, shallowEqual);

  return (
    <div className="Zoo">
      <Landing />
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
