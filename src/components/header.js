import React from 'react';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const push = useNavigate();
  return (
  <div className="Header">
    <div className="logo">
     <button type="button" onClick={() => push('/')}>
        <i className="fa fa-arrow-left" aria-hidden="true" />
        Home
      </button>
    </div>
    <div className="zooname">
      <h2>Zoo</h2>
    </div>
    <div className="headerIcons">
      <span><i className="fa fa-microphone" aria-hidden="true" /></span>
      <span><i className="fa fa-cog" aria-hidden="true" /></span>
    </div>
  </div>
  )
};

export default Header;
