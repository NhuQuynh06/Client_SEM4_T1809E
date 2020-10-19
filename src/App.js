import React from 'react';
import './App.css';
import { Header } from './Component/Header/header';
import { Footer } from './Component/Footer/footer';
import AboutArea from './Component/MainComponent/about_area/about_area';
import Instagram from './Component/MainComponent/instragram/instagram';
import Offers from './Component/MainComponent/offers/offers';
import Room from './Component/MainComponent/better-room/better-room';
import ResevationAndQuery from './Component/MainComponent/reservation-query/reservation-query';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AboutArea></AboutArea>
      <Offers></Offers>
      <Room></Room>
      <ResevationAndQuery></ResevationAndQuery>
      <Instagram></Instagram>
      <Footer></Footer>
    </div>
  );
}

export default App;
