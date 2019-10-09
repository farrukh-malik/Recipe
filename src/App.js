import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import TodayFavourite from './components/today-favourite/today-favourite'
import RecipeCard from './components/recipe-card/recipe-card'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <TodayFavourite></TodayFavourite>
      <RecipeCard></RecipeCard>
      <Footer></Footer>
    </div>
  );
}

export default App;
