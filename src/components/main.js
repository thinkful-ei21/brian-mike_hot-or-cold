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
    };

  this.textInput = React.createRef();
  this.showModal = this.showModal.bind(this);
  this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({
      showRules: true
    });
  }

  hideModal() {
    this.setState({
      showRules: false
    });
  }
  
enterGuess(e){
  
  console.log(e)
  this.setState({guess: e})
}

  render() {

      return (
        <div>
          <header>
            <div className="navigation">
            <Navigation 
              showModal={this.showModal}
              />
            </div>
          </header>
          <div>
            {this.state.showRules ? 
            <Modal 
              hideModal={this.hideModal}
            /> : ''}
            <Game enterGuess={(e) => this.enterGuess(e)} />
          </div>
        </div>
      );
    } 
  }