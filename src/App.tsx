import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
