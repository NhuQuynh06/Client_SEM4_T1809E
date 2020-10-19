import React from 'react';
import './footer.scss'

export const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title"> address</h3>
                <p className="footer_text" >  200, Green road, Mongla, New Yor City USA</p>
                <a href="#" className="line-button">Get Direction</a>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title"> Reservation </h3>
                <p className="footer_text" >+10 367 267 2678 reservation@montana.com</p>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-lg-2">
              <div className="footer_widget">
                <h3 className="footer_title">
                  Navigation
                        </h3>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Rooms</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">News</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="footer_widget">
                <h3 className="footer_title">
                  Newsletter
                        </h3>
                <form action="#" className="newsletter_form">
                  <input type="text" placeholder="Enter your mail"></input>
                  <button type="submit" >Sign Up</button>
                </form>
                <p className="newsletter_text">Subscribe newsletter to get updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right_text">
        <div className="container">
          <div className="footer_border"></div>
          <div className="row">
            <div className="col-xl-8 col-md-7 col-lg-9">
              <p className="copy_right">
              </p>
            </div>
            <div className="col-xl-4 col-md-5 col-lg-3">
              <div className="socail_links">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}