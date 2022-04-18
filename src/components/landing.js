import React from 'react';

const Landing = () => {
  let loadingGIF = require('../images/Lion.png');
  return (
    <div className='Landing'>
      <img src={loadingGIF} alt="Gif"/>
      <div className='LandingDetails'>
        <h2>Lions</h2>
        <p>The king of the jungle</p>
      </div>
    </div>
  )
}
export default Landing