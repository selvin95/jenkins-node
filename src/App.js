import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Docker prueba 1-Meetup</h1>
          <h2 className="App-title">SISTEMAS OPERATIVOS 1-Meetup</h2>
          <h3 className="App-title">UMG SAN JUAN SACATEPEQUEZ-Meetup</h3>
        </header>
        <p className="App-intro">
          Welcome to this Docker Meetup with Jenkins

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
