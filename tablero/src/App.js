import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MiModal from './MiModal';

class App extends Component {
  gestionarResultadoModal() {
    /* COdigo para manejar el resultado del Modal */
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MiModal texto="texto app" onYes={this.gestionarResultadoModal}>
        </MiModal>
      </div>
    );
  }
}

export default App;
