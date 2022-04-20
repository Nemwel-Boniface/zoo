import React from 'react';
import lnd from '../images/Lion.png';

const Landing = () => (
  <div className="Landing">
    <img src={lnd} alt="Gif" />
    <div className="LandingDetails">
      <h2>Lions</h2>
      <p>Male lions grow impressive manes the older they get. These manes grow up to 16cm long and are a sign of dominance.</p>
    </div>
  </div>
);
export default Landing;
