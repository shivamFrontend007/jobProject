import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { fetchUsers } from '../services/api';
import "./SearchBar.css"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');          //searchTerm- Whats typed in the search input.
  const [users, setUsers] = useState([]);                   // users - complete list of users (fetched from API)
  const [filteredUsers, setFilteredUsers] = useState([]);  // filteredUsers - list of users that match the search term.

  useEffect(() => {
    const loadUsers = async () => {
      const userData = await fetchUsers();
      setUsers(userData);
      setFilteredUsers(userData);   // The data is stored in both users and filteredUsers so that initially all users are displayed.
    };
    loadUsers();
  }, []);

  const handleSearch = debounce((term) => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(filtered);  //Once it finds the matching users, it updates filteredUsers with the results
  }, 500);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <>
    <h1 className='usersh1' id='users'>------- Existing Users -------</h1>
    <div className='users'>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search users..."
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default SearchBar;
