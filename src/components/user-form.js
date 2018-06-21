import React from 'react';

export default class UserForm extends React.Component {
  constructor(props){
    super(props)
  

  
  }
  onSubmit(e){
    e.preventDefault()
    let value = this.input.value;
    this.props.enterGuess(value)
  }

  render(){
  return (
    <form className='user-form' onSubmit={e => this.onSubmit(e)}>
        <input type="text" name="userGuess" id="userGuess" className="text" maxLength="3"
         autoComplete="off" placeholder="Enter your Guess" ref={input => (this.input = input)} required />
            <input type="submit" id="guessButton" className="button"  name="submit" value="Guess" />
      </form>
  );
}}