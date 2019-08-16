import React, { Component } from "react";
import "./App.css";
import CharacterCard from './CharacterCard';
import CharacterForm from './CharacterForm';
import {Link, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div className='Navigation'>
          <Link to='/'>Smurfs  </Link>
          <Link to='/characterform'>Add Smurff</Link>
        </div>

        <Route exact path='/' component={CharacterCard} />
        <Route path='/characterform' component={CharacterForm} />
      </div>
    );
  }
}

export default App;
