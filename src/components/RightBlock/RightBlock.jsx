import React from 'react';
import './RightBlock.css';
import NaviBar from '../NaviBar/NaviBar';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';


const RightBlock = (props) => {
    return <div className="right-block">
      <NaviBar 
        handleShowModal={props.handleShowModal}
        handleHideModal={props.handleHideModal}
        />
      
      <Footer whichElement={props.whichElement}/>
    </div>; 
}

export default RightBlock;