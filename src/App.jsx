import React, { useState } from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<HomePage loggedIn={loggedIn} />} />
      
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
       
        <Route
          path="/dashboard"
          element={
            loggedIn ? <Dashboard handleLogout={handleLogout} /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
