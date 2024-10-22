import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Função para buscar os usuários
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://186.237.57.35');
        console.log('Users:', response.data);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers(); 
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
        <h2>Users:</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} - {user.email}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
