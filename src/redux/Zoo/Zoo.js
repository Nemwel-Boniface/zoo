import GETFROMAPI from './actionTypes';

const baseURL = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';

const initialState = [];
const ZooReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETFROMAPI:
      return [
        ...action.payLoad,
      ];
    default:
      return state;
  }
};

export const getAnimalsFromAPI = () => (dispatch) => fetch(baseURL)
  .then((res) => res.json()).then((data) => {
    const animals = data.map((animal) => ({
      id: animal.id,
      name: animal.name,
      latinName: animal.latin_name,
      animalType: animal.animal_type,
      activeTime: animal.active_time,
      minLength: animal.length_min,
      maxLength: animal.length_max,
      minWeight: animal.weight_min,
      maxWeight: animal.weight_max,
      lifeSpan: animal.lifespan,
      habitats: animal.habitat,
      diet: animal.diet,
      locattions: animal.geo_range,
      Image: animal.image_link,
    }));
    dispatch({ type: GETFROMAPI, payLoad: animals });
  }).catch(() => {});

export default ZooReducer;
