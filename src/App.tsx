import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-bar">
          <a>Exp Costs</a>
          <div>
            <button>Combat</button>
          </div>
          <div>
            <button>Critical Hits</button>
          </div>
          <div>
            <button>Equipment</button>
          </div>
          <div>
            <button>Weapons</button>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
}

export default App;
