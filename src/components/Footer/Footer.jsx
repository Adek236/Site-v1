import React from 'react';
import './Footer.css';

const FooterEl = (props) => {
  const whichClass = 
    props.rightBorder ? "footer__el footer__el--right-border" : "footer__el";
  
  return <div className={whichClass}>
    <div className="footer__el--font">{props.text}</div>
  </div>;
}

const Footer = (props) => {
    return <div className="footer footer--margin-bot">
      <FooterEl text={props.whichElement?.skills?.[0]} 
        rightBorder={true} />
      <FooterEl text={props.whichElement?.skills?.[1]} 
        rightBorder={true} />
      <FooterEl text={props.whichElement?.skills?.[2]}/>
    </div>;  
}


export default Footer; 