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
      showModal : false,
      whichElement: name,
      showMenu: true
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
      showModal: true,
      whichElement: this.getObjDB(name)
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
    return <main className="container container--font container-bg">
      <LeftBlock />
      <RightBlock 
        handleShowModal={this.handleShowModal}
        handleHideModal={this.handleHideModal}
        whichElement={this.state.whichElement}
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