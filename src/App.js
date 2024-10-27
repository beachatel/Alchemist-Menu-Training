import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css';
import Home from './Home';
import AppetiserTraining from './AppetiserTraining';
import DrinkTraining from './DrinkTraining';
import OABTraining from './OABTraining';
import FoodTraining from './FoodTraining';

const App = () => {
  return (
    <Router basename="/Alchemist-Menu-Training">
      <div className="app">
        <h1>Alchemist Menu Training</h1>
        <nav>
          <ul>
         
            <li className="navi">
    
              <Link to="/appetiser-training">Appetisers</Link>
              <Link to="/drink-training">Drinks</Link>
              <Link to="/food-training">Food</Link>
              <Link to="/on-a-bowl-training">On A Bowl</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appetiser-training" element={<AppetiserTraining />} />
          <Route path="/drink-training" element={<DrinkTraining />} />
          <Route path="/on-a-bowl-training" element={<OABTraining />} />
           <Route path="/food-training" element={<FoodTraining />} />
        </Routes>
      </div>

      
    </Router>
  );
};

export default App;