import React from 'react';
import './App.css';
import { Header } from './Component/Header/header';
import { Footer } from './Component/Footer/footer';
import AboutArea from './Component/MainComponent/about_area/about_area';
import Instagram from './Component/MainComponent/instragram/instagram'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AboutArea></AboutArea>
      <Instagram></Instagram>
      <Footer></Footer>
    </div>
  );
}

export default App;
