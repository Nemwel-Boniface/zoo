import React from 'react';
import lnd from '../images/Lion.png';

const Landing = () => (
  <div className="Landing">
    <img src={lnd} alt="Gif" />
    <div className="LandingDetails">
      <h2>Lions</h2>
      <p>The king of the jungle</p>
    </div>
  </div>
);
export default Landing;
