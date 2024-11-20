import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ loggedIn }) => {
  return (
    <div className="home-container">
      <h1>Welcome to the Application</h1>
      <p>{loggedIn ? 'You are logged in!' : 'Please log in to access the dashboard.'}</p>
      <Link to={loggedIn ? "/dashboard" : "/login"} className="home-link">
        {loggedIn ? 'Go to Dashboard' : 'Login'}
      </Link>
    </div>
  );
};

export default HomePage;
