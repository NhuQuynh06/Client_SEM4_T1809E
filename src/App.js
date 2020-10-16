import React from 'react';
import './App.css';
import { Header } from './Component/Header/header';
import { Footer } from './Component/Footer/footer';
import AboutArea from './Component/MainComponent/about_area/about_area';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AboutArea></AboutArea>
      <Footer></Footer>
    </div>
  );
}

export default App;
