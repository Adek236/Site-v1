import React from 'react';
import './Menu.css';

const mouseToggle = e => e.target.classList.toggle("menu--mouse-over");
const mouseOut = e => e.target.classList.remove("menu--mouse-over");

const Menu = (props) => {
  
  const DisplayedMenu = () => {
    return <div className="menu menu--font menu--display">
      <div className="menu__icon">
          <i 
            className="fa-solid fa-bars"
            onMouseOver={e => mouseToggle(e)}
            onMouseOut={e => mouseToggle(e)}
            onClick={props.toggleMenu}
            ></i>
      </div>
      <div className="menu__list">
        <i 
          className="fa-solid fa-cart-shopping"
          onMouseOver={e => mouseToggle(e)}
          onMouseOut={e => mouseToggle(e)}
          ></i>
      </div>          
      <div className="menu__socials">
        <div><i 
               className="fa-brands fa-facebook-square"
               onMouseOver={e => mouseToggle(e)}
               onMouseOut={e => mouseToggle(e)}
               ></i></div>
        <div><i 
               className="fa-brands fa-google-plus-square"
               onMouseOver={e => mouseToggle(e)}
               onMouseOut={e => mouseToggle(e)}
               ></i></div>
        <div><i 
               className="fa-brands fa-twitter-square"
               onMouseOver={e => mouseToggle(e)}
               onMouseOut={e => mouseToggle(e)}
               ></i></div>
      </div>
    </div> 
    }

  const HiddenMenu = () => {
    return <div className="menu menu--font">
      <div>
      <i 
        className="fa-solid fa-bars"
        onClick={props.toggleMenu}
        ></i>
      </div>
    </div>
  }
    
  return props.showMenu ? <DisplayedMenu /> : <HiddenMenu /> ; 
}

export default Menu; 