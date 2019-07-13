import React from 'react';
import './App.css';
import MoviesApi from './Components/MoviesApi/MoviesApi';
import Navbar from './Components/Navbar/Navbar';
import Carroussel from './Components/Carroussel/Carroussel'
import Footer from './Components/Footer/Footer';


export default  () => {
  return (
    <div className="App">
      <Navbar/>
      <Carroussel/>
      <MoviesApi className="MoviesApi"/>
      <Footer/>
    </div>
  );
}

