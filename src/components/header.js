import React from "react";
// import logo from '../images/simba1.webp';

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        {/* <img src={logo} alt="Simba logo"/> */}
        <h2>Lion</h2>
      </div>
      <div className="zooname">
        <h2>Zoo</h2>
      </div>
      <div className="headerIcons">
        <span><i class="fa fa-microphone" aria-hidden="true"></i></span>
        <span><i class="fa fa-cog" aria-hidden="true"></i></span>
      </div>
    </div>
  )
}

export default Header