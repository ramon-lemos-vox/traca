import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   // Função para buscar os usuários
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get('https://api-traca.voxcity.com.br');
  //       console.log('Users:', response.data);
  //       setUsers(response.data);
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //     }
  //   };

  //   fetchUsers(); 
  // }, []); 

  return (
    <div className="App">
      <header className="App-header">
        <h2>Bem vindo Will</h2>
      </header>
    </div>
  );
}

export default App;
