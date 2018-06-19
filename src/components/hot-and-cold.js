import React from 'react';
import Navigation from './navigation';
import Modal from './modal-box';
import Game from './game';

export default function Main() {
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
}