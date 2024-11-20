import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../api';

const Dashboard = ({ handleLogout }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadUsers = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
      setFilteredUsers(usersData);
    };

    loadUsers();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFilteredUsers(
      users.filter((user) =>
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(value)
      )
    );
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="card-container">
        {filteredUsers.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{`${user.firstName} ${user.lastName}`}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
