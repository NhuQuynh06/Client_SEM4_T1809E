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
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/room">rooms</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><a className="active" href="#">blog <i className="ti-angle-down"></i></a>
                          <ul className="submenu">
                            <li><Link to="/blog">blog</Link></li>
                            <li><Link to="/single-blog">single-blog</Link></li>
                          </ul>
                        </li>
                        <li><a href="#">pages <i className="ti-angle-down"></i></a>
                          <ul className="submenu">
                            <li><Link to="/element">elements</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/contact">Contact</Link></li>

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
