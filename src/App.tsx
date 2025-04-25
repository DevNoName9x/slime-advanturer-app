import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import GamePlay from "./components/GamePlay";
import "./styles/App.css";
import SortedActionsPage from "./pages/SortedActionsPage";
import Chat from "./components/Chat";
import GoogleSheet from "./components/GoogleSheet";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="header-content">
          <Link to="/" className="logo">
            Slime Adventurer
          </Link>
          <nav className="nav-menu">
            <Link 
              to="/gameplay" 
              className={`nav-link ${location.pathname === '/gameplay' ? 'active' : ''}`}
            >
              Bắt đầu
            </Link>
            <Link 
              to="/sorted-actions" 
              className={`nav-link ${location.pathname === '/sorted-actions' ? 'active' : ''}`}
            >
              Lấy thông tin
            </Link>
            <Link 
              to="/chat" 
              className={`nav-link ${location.pathname === '/chat' ? 'active' : ''}`}
            >
              Chat
            </Link>
            <Link 
              to="/sheet" 
              className={`nav-link ${location.pathname === '/sheet' ? 'active' : ''}`}
            >
              Data Sheet
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <div className="container-fluid">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="start-screen">
                    <h1>Chào mừng đến với Slime Adventurer</h1>
                    <p>Chọn một trong các tùy chọn bên dưới để bắt đầu</p>
                  </div>
                }
              />
              <Route path="/gameplay" element={<GamePlay />} />
              <Route path="/sorted-actions" element={<SortedActionsPage />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/sheet" element={<GoogleSheet />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
