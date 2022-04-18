import React from 'react';
// import logo from '../images/simba1.webp';

const Header = () => (
  <div className="Header">
    <div className="logo">
      {/* <img src={logo} alt="Simba logo"/> */}
      <h2>Lion</h2>
    </div>
    <div className="zooname">
      <h2>Zoo</h2>
    </div>
    <div className="headerIcons">
      <span><i className="fa fa-microphone" aria-hidden="true" /></span>
      <span><i className="fa fa-cog" aria-hidden="true" /></span>
    </div>
  </div>
);

export default Header;
