import React from 'react';
import './NaviBar.css';
import db from '../../db/db';

const NaviBarElLoop = (props) => {
  const titlesArr = props.titles;
  
  return (
    titlesArr.map((name, index) =>
      <div key={index} className="navi-bar__el">
        <span
          className={`navi-bar__el--font`}
          onMouseOver={
            e => {
              e.target.classList.add("navi-bar__el--font-color");
              props.handleMouseOver(name);
            }
          }
          onMouseOut={
            e => {
              e.target.classList.remove("navi-bar__el--font-color");
              props.handleMouseOut(name);
            }
          }
        >
          {name}
        </span>
      </div>       
    )
  )  
}

class NaviBar extends React.Component {
  constructor(props){
    super(props)
    
    this.titles = this.getTitles();

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  getTitles() {
    return db.map(obj => { return obj.title })
  }

  handleMouseOver(name) {
    this.props.handleShowModal(name)
    // console.log(db)
  }

  handleMouseOut() {
    this.props.handleHideModal(name)
  }
  
  render() {
    return <div className="navi-bar">
      <NaviBarElLoop 
        titles={this.titles}
        handleMouseOver={this.handleMouseOver}
        handleMouseOut={this.handleMouseOut}
      />
    </div>;  
  }
}

export default NaviBar; 