import React from 'react';
import './Modal.css';

const Modal = (props) => {
    return <div className="modal">
      <div className="box">
         <div className="modal__logo">LEAGUE</div>
         <div className="modal__title">{props.whichElement.title}</div>
         <div className="modal__desc">{props.whichElement.desc}</div>
      </div>
      <div className="modal__img modal__img--bg"></div>  
    </div>; 
}


export default Modal;