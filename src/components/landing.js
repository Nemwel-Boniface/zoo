import React from 'react';
import lnd from '../images/big5.png';

const Landing = () => (
  <div className="Landing">
    <img src={lnd} alt="Gif" />
    <div className="LandingDetails">
      <h2>The Big 5</h2>
      <p>The big 5 can be found in Kenya's Maasai Mara park.</p>
    </div>
  </div>
);
export default Landing;
