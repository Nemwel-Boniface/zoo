import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Details = () => {
  const { id } = useParams();
  const animals = useSelector((state) => state.animals);
  const [animal, setAnimal] = useState({});
  useEffect(() => {
    animals.forEach((an) => {
      if (parseInt(an.id, 10) === parseInt(id, 10)) {
        setAnimal(an);
      }
    });
  }, []);
  return (
    <div className="Details">
      <div className="animalDetails">
        <h2>{animal.name}</h2>
        <img src={animal.image} alt={`${animal.name} details`} />

        <h2 className="characteristics">Characteristics</h2>
        <p className="padded">
          Latin Name
          <span className="right">{animal.latinName}</span>
        </p>
        <p className="padded dark">
          Animal Type
          <span className="right">{animal.animalType}</span>
        </p>
        <p className="padded">
          Active Times
          <span className="right">{animal.activeTime}</span>
        </p>
        <p className="padded dark">
          Minimum Length
          <span className="right">{animal.minLength}</span>
        </p>
        <p className="padded">
          Maximum Length
          <span className="right">{animal.maxLength}</span>
        </p>
        <p className="padded dark">
          Minimum Weight
          <span className="right">{animal.minWeight}</span>
        </p>
        <p className="padded">
          Maximum Weight
          <span className="right">{animal.maxWeight}</span>
        </p>
        <p className="padded dark">
          Life span
          <span className="right">{animal.lifeSpan}</span>
        </p>
        <p className="padded">
          Habitats
          <span className="right">{animal.habitats}</span>
        </p>
        <p className="padded dark">
          Diet
          <span className="right">{animal.diet}</span>
        </p>
        <p className="padded">
          Locations
          <span className="right">{animal.locattions}</span>
        </p>
      </div>
    </div>
  );
};

export default Details;
