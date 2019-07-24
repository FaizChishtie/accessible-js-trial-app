import React from 'react';
import logo from './logo.svg';
import './App.css';
//import initialize from 'accessible-js';
import stamp from 'accessible-js';

function App() {

  const html = (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> 
  );

  //initialize.initialize(html);
  stamp();

  return html;
}

export default App;
