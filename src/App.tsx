import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './pages/TodoList';
import { Route, Routes } from 'react-router-dom';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <Routes>
      <Route path='' element={<TodoList />} />

      <Route path='/detail' element={<TodoPage />} />
      <Route path='/detail:id' element={<TodoPage />} />
    </Routes>
  );
}

export default App;
