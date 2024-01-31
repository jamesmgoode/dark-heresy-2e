import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import DiceRoller from './pages/dice-roller';
import ExpCosts from './pages/exp-costs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='nav-bar'>
          <ul className='nav-list'>
            <li>
              <NavLink to={'./dice-roller'}>Dice Roller</NavLink>
            </li>
            <li>
              <NavLink to={'./exp-costs'}>Exp Costs</NavLink>
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
        <Routes>
          <Route path='/' element={<DiceRoller />} />
          <Route path='/dice-roller' element={<DiceRoller />} />
          <Route path='/exp-costs' element={<ExpCosts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
