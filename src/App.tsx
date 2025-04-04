import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GamePlay from './components/GamePlay';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div className="start-screen">
              <h1>Slime Adventurer</h1>
              <Link to="/gameplay" className="btn btn-primary btn-lg">
                Bắt đầu
              </Link>
            </div>
          } />
          <Route path="/gameplay" element={<GamePlay />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
