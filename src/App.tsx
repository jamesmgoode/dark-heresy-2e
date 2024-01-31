import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='nav-bar'>
          <ul>
            <li>
              <a>Exp Costs</a>
            </li>
            <li>
              <a>Combat</a>
            </li>
            <li>
              <a>Critical Hits</a>
            </li>
            <li>
              <a>Equipment</a>
            </li>
            <li>
              <a>Weapons</a>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <h1>Heading</h1>
        <p>Content</p>
      </div>
    </div>
  );
}

export default App;
