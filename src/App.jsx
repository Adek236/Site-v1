import React from 'react';
import './App.css';
import RightBlock from './components/RightBlock/RightBlock';
import LeftBlock from './components/LeftBlock/LeftBlock';
import Modal from './components/Modal/Modal';
import Menu from './components/Menu/Menu';
import db from './db/db';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      showFooter: false,
      showModal : false,
      whichElement: db[0],
      showMenu: false,
    }

    this.foundObj = this.getObjDB();

    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  getObjDB(name){
    return db.find(obj => obj.title === name)
  }

  handleShowModal(name) {
    this.setState({ 
      showFooter: true,
      showModal: true,
      whichElement: this.getObjDB(name),
      showMenu: false,
    })
  }
  
  handleHideModal(){
    this.setState({ 
      showModal: false
    })
  }
  
  toggleMenu(){
    this.setState(prevState => ({ 
      showMenu: !prevState.showMenu
    }))
  }
  
  render() {
    return <main
             className="container container--font container-bg"
             style={{ backgroundImage: `url(${this.state.whichElement.img})` }}
           >
      <LeftBlock />
      <RightBlock 
        handleShowModal={this.handleShowModal}
        handleHideModal={this.handleHideModal}
        whichElement={this.state.whichElement}
        showFooter={this.state.showFooter}
        />
      <Menu 
        toggleMenu={this.toggleMenu}
        showMenu={this.state.showMenu}
        />
      {this.state.showModal 
      ? <Modal whichElement={this.state.whichElement}/>:""}
    </main>; 
  }
}

export default App; 