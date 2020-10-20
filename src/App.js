import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Header } from './Component/Header/header';
import { Footer } from './Component/Footer/footer';
import HomeComponent from './Component/MainComponent/homepage-component/homepage-component';
import RoomComponent from './Component/MainComponent/room-component/room-component';
import AboutCompoent from './Component/MainComponent/about-component/about-component';
import BlogComponent from './Component/MainComponent/blog-component/blog-component';
import SingleBlogComponent from './Component/MainComponent/single-blog-component/single-blog-component';
import ElementComponent from './Component/MainComponent/element-component/element-component';
import ContactComponent from './Component/MainComponent/contact-component/contact-component';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path='/' exact component={HomeComponent}></Route>
          <Route path='/room' exact component={RoomComponent}></Route>
          <Route path='/about' exact component={AboutCompoent}></Route>
          <Route path='/blog' exact component={BlogComponent}></Route>
          <Route path='/single-blog' exact component={SingleBlogComponent}></Route>
          <Route path='/element' exact component={ElementComponent}></Route>
          <Route path='/contact' exact component={ContactComponent}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}


export default App;
