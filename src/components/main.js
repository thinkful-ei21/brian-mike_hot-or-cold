import React from 'react';
import Navigation from './navigation';
import Modal from './modal-box';
import Game from './game';

export default class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showRules: false,
      nextGame: false,
      hotCold: '',
      guess: 0,
      numberofTries: 0,
      guessNumbers: []
    }
  }

  showModal(e) {
    e.preventDefault();
    this.setState({
      showRules: true
    });
  }
  

  
  render() {
  
  return (
    <div>
      <header>
        <div className="navigation">
        <Navigation 
          onClick={this.showModal()}
          />
        </div>
        <div>
        <Modal />
        </div>
      </header>
      <div>
        <Game />
      </div>
    </div>
  );
}}