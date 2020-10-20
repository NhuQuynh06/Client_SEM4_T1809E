import React from 'react';
import './header.scss';
import logo from '../../Assets/images/logo.png';
import { Link, Links } from 'react-router-dom';

export const Header = () => {
  return (
    <section className='header-component'>
      <header>
        <div className="header-area">
          <div id="sticky-header" className="main-header-area sticky">
            <div className="container-fluid p-0">
              <div className="row align-items-center no-gutters">
                <div className="col-xl-5 col-lg-6">
                  <div className="main-menu  d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <Link to="/">
                          <li><a href="index.html">home</a></li>
                        </Link>
                        <Link to="/room">
                          <li><a href="rooms.html">rooms</a></li>
                        </Link>
                        <Link to="/about">
                          <li><a href="about.html">About</a></li>
                        </Link>
                        <li><a className="active" href="#">blog <i className="ti-angle-down"></i></a>
                          <ul className="submenu">
                            <Link to="/blog">
                              <li><a href="blog.html">blog</a></li>
                            </Link>
                            <Link to="/single-blog">
                              <li><a href="single-blog.html">single-blog</a></li>
                            </Link>
                          </ul>
                        </li>
                        <li><a href="#">pages <i className="ti-angle-down"></i></a>
                          <ul className="submenu">
                            <Link to="/element">
                              <li><a href="elements.html">elements</a></li>
                            </Link>
                          </ul>
                        </li>
                        <Link to="/contact">
                          <li><a href="contact.html">Contact</a></li>
                        </Link>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2">
                  <div className="logo-img">
                    <a href="index.html">
                      <img src={logo} alt=""></img>
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
