import React, {Component} from 'react';
import Navigation from './navigation';
import Modal from './modal-box';
import Game from './game';

export default class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      nextGame: false,
      hotCold: '',
      guess: 0,
      numberofTries: 0,
      guessNumbers: []
    }
  }
  

  
  render() {
  
  return (
    <div>
      <header>
        <div className="navigation">
        <Navigation />
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