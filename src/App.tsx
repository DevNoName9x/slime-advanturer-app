import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GamePlay from './components/GamePlay';
import './App.css';
import SortedActionsPage from './pages/SortedActionsPage';

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
              <Link to="/sorted-actions" className="btn btn-primary btn-lg mt-2">
                Lấy thông tin
              </Link>
            </div>
          } />
          <Route path="/gameplay" element={<GamePlay />} />
          <Route path="/sorted-actions" element={<SortedActionsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
