import React from 'react';
import './Footer.css';

const FooterEl = (props) => {
  const whichClass = 
    props.rightBorder ? "footer__el footer__el--right-border" : "footer__el";
  
  return <div className={whichClass}>
    <div className="footer__el--font footer__el--modifier">
      <p>
        {props.text.value}
        <span className="footer__el--font-value-mini">{props.text.valueDesc}</span>
      </p>
      <p className="footer__el--font-desc-mini">{props.text.mainDesc}</p>
    </div>
  </div>;
}

const Footer = (props) => {
    const element = <div className="footer footer--bg-mod footer--margin-bot">
      <FooterEl 
        text={
          {
            value: props.whichElement?.skills?.[0],
            valueDesc: "",
            mainDesc: "0-100kph"
          }
        } 
        rightBorder={true} 
        />
      <FooterEl 
        text={
          {
            value: props.whichElement?.skills?.[1],
            valueDesc: "kph",
            mainDesc: "Top speed"
          }
        } 
        rightBorder={true} 
        />
      <FooterEl
        text={
          {
            value: props.whichElement?.skills?.[2],
            valueDesc: "hp",
            mainDesc: "Power"
          }
        }
        />
    </div>;  

  return props.showFooter ? element : "";
}


export default Footer; 