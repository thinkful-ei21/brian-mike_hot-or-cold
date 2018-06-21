import React from 'react';
import UserForm from './user-form';
import GuessList from './guess-list';

//onClick={(e) => this.enterGuess(e.target.value)}

export default function Game(props) {
  return (
    <div className='game'>
      <h2 id="feedback">Make your Guess!</h2>
      <UserForm enterGuess={props.enterGuess}/>
      <p>Guess #<span id="count">0</span>!</p>
      <GuessList />
    </div>
  );
}