import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CharComponent from './components/CharComponent/CharComponent'
import ValidationComponent from "./components/ValidationComponent/ValidationComponent";

class App extends Component {
    state = {
        text: '',
    };

    textChangeHandler = (event) => {
        const text = event.target.value;
        this.setState({
            text: text,
        })
    }

    deleteLetterHandler = (index) => {
        const letters = this.state.text.split('');
        letters.splice(index, 1);
        const text = letters.join('');
        this.setState({
            text: text,
        })

    }

    render() {
      let letters = null;
      if(this.state.text.length){
          letters = this.state.text.split('').map((letter, index) => {
              return (
                  <CharComponent key={letter+index} letter={letter} click={() => this.deleteLetterHandler(index)}/>
              )
          })
      }
      return (
        <div className="App">
            <ValidationComponent length={this.state.text.length}/>
            <input onChange={this.textChangeHandler} value={this.state.text}/>
            <div>
                {letters}
            </div>
        </div>
      );
    }

}

export default App;
