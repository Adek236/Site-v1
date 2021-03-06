import React from 'react';
import './Modal.css';

const Modal = (props) => {
    const link = props.whichElement.modalImg;
  
    return <div className="modal">
      <div className="box">
         <div className="modal__logo"><span>Com</span>pany</div>
         <div className="modal__title">{props.whichElement.title}</div>
         <div className="modal__desc">{props.whichElement.desc}</div>
      </div>
      <div className="modal__img">
        <img src={link} />
      </div>  
    </div>; 
}


export default Modal;