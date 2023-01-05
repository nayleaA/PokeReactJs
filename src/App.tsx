import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import {Pokemon,Items,Pokemons}  from './pages';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/pokemons/:name" element={<Pokemon />} />
        <Route path="/items" element={<Items />} />
        <Route path="pokemons" element={<Pokemons />} />
        <Route path="/" element={<Pokemons />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
