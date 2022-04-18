import React from 'react';
import Header from './components/header';
import Landing from './components/landing';
import Zoo from './components/Zoo';

function ZooContainer() {
  return (
    <div className="ZooContainer">
      <Header />
      <Landing />
      <Zoo />
    </div>
  );
}

export default ZooContainer;
