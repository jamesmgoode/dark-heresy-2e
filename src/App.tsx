import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='nav-bar'>
          <ul className='nav-list'>
            <li>
              <a>Exp Costs</a>
            </li>
            <li>
              <a>Dice Roller</a>
            </li>
            <li>
              <div>
                <a>Combat</a>
                <ul className='nav-drop-down'>
                  <li><a>Combat Actions</a></li>
                  <li><a>Hit Locations</a></li>
                  <li><a>Conditions and Damage</a></li>
                  <li><a>Combat Circumstances</a></li>
                  <li><a>Combat Difficulty Examples</a></li>
                </ul>
              </div>
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
            <li>
              <a>Armour</a>
            </li>
            <li>
              <a>Psyker</a>
            </li>
            <li>
              <a>Character</a>
            </li>
            <li>
              <a>Effects</a>
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
