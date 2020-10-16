import React from 'react';
import './header.scss';

export const Header = () => {
  return (
    <header>
      <div className="header-area ">
        <div id="sticky-header" className="main-header-area sticky">
          <div className="container-fluid p-0">
            <div className="row align-items-center no-gutters">
              <div className="col-xl-5 col-lg-6">
                <div className="main-menu  d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li><a href="index.html">home</a></li>
                      <li><a href="rooms.html">rooms</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a className="active" href="#">blog <i className="ti-angle-down"></i></a>
                        <ul className="submenu">
                          <li><a href="blog.html">blog</a></li>
                          <li><a href="single-blog.html">single-blog</a></li>
                        </ul>
                      </li>
                      <li><a href="#">pages <i className="ti-angle-down"></i></a>
                        <ul className="submenu">
                          <li><a href="elements.html">elements</a></li>
                        </ul>
                      </li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className="logo-img">
                  <a href="index.html">
                    <img src="img/logo.png" alt=""></img>
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
      <div className="slider_area">
        <div className="slider_active owl-carousel">
            <div className="single_slider d-flex align-items-center justify-content-center slider_bg_1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="slider_text text-center">
                                <h3>Montana Resort</h3>
                                <p>Unlock to enjoy the view of Martine</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    </div>
    </header>
  );
}
