import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Animal from "./Animal";

const Details = () => {
  const { id } = useParams();
  const push = useNavigate();
  const animals = useSelector((state) => state.animals);
  const [animal, setAnimal] = useState({});
  useEffect(() => {
    animals.forEach((an) => {
      console.log('loops');
      if(parseInt(an.id, 10) === parseInt(id, 10) ) {
        setAnimal(an);
        console.log('matches');
      }
    });
  }, []);
  return (
    <div className="Details">
      <button onClick={() => push('/')}>Go back</button>
      <h1>Further details{id}{animal.name}</h1>
    </div>
  );
};

export default Details;
