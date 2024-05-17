import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { PublicRoutes } from './app/routes/PublicRoutes';

function App() {
  return (
    <BrowserRouter>
    <PublicRoutes/>
    </BrowserRouter>
  );
}

export default App;
