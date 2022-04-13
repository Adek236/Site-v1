import React from 'react';
import './Menu.css';

const Menu = (props) => {
  
  const DisplayedMenu = () => {
    return <div className="menu menu--font">
          <i 
            className="fa-solid fa-bars"
            onClick={props.toggleMenu}
            ></i>
          <div>xd</div>
          <div>xd</div>
          <div>xd</div>
          <div>xd</div>
        </div> 
    }

  const HiddenMenu = () => {
    return <div className="menu menu--font">
      <i 
        className="fa-solid fa-bars"
        onClick={props.toggleMenu}
        ></i>
    </div>
  }
    
  return props.showMenu ? <DisplayedMenu /> : <HiddenMenu /> ; 
}

export default Menu; 