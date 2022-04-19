import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Details = () => {
  const { id } = useParams();
  const push = useNavigate();
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
      <button type="button" onClick={() => push('/')}>
        <i className="fa fa-arrow-left" aria-hidden="true" />
        Home
      </button>
      <div className="animalDetails">
        <h2>{animal.name}</h2>
        <img src={animal.image} alt={`${animal.name} details`} />

        <h2 className="characteristics">Characteristics</h2>
        <p>
          Latin Name
          <span className="right">{animal.latinName}</span>
        </p>
        <p>
          Animal Type
          <span className="right">{animal.animalType}</span>
        </p>
        <p>
          Active Times
          <span className="right">{animal.activeTime}</span>
        </p>
        <p>
          Minimum Length
          <span className="right">{animal.minLength}</span>
        </p>
        <p>
          Maximum Length
          <span className="right">{animal.maxLength}</span>
        </p>
        <p>
          Minimum Weight
          <span className="right">{animal.minWeight}</span>
        </p>
        <p>
          Maximum Weight
          <span className="right">{animal.maxWeight}</span>
        </p>
        <p>
          Life span
          <span className="right">{animal.lifeSpan}</span>
        </p>
        <p>
          Habitats
          <span className="right">{animal.habitats}</span>
        </p>
        <p>
          Diet
          <span className="right">{animal.diet}</span>
        </p>
        <p>
          Locations
          <span className="right">{animal.locattions}</span>
        </p>
      </div>
    </div>
  );
};

export default Details;
