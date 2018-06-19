import React from 'react';
import UserForm from './user-form';
import GuessList from './guess-list';

export default function Game() {
  return (
    <div className='game'>
      <h2 id="feedback">Make your Guess!</h2>
      <UserForm />
      <p>Guess #<span id="count">0</span>!</p>
      <GuessList />
    </div>
  );
}