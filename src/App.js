import React from 'react';
import './App.css';
import MoviesApi from './Components/MoviesApi/MoviesApi';
import Navbar from './Components/Navbar/Navbar';
import Carroussel from './Components/Carroussel/Carroussel'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carroussel/>
      <MoviesApi/>
    </div>
  );
}

export default App;
