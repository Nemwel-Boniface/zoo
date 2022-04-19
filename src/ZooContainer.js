import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Details from './components/details';
import Header from './components/header';
import Landing from './components/landing';
import Zoo from './components/Zoo';
import { getAnimalsFromAPI } from './redux/Zoo/Zoo';

function ZooContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnimalsFromAPI());
  }, []);
  return (
    <div className="ZooContainer">
      <Header />
      <Landing />
      <Routes>
        <Route exact path="/" element={<Zoo />} />
        <Route exact path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default ZooContainer;
