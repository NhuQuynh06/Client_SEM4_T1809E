import React from 'react';
import './footer.scss'

export const Footer = () => {
  return (
    <footer class="footer" >
      <div class="footer_top">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-md-6 col-lg-3">
              <div class="footer_widget">
                <h3 class="footer_title"> address</h3>
                <p class="footer_text" >  200, Green road, Mongla, New Yor City USA</p>
                <a href="#" class="line-button">Get Direction</a>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 col-lg-3">
              <div class="footer_widget">
                <h3 class="footer_title"> Reservation </h3>
                <p class="footer_text" >+10 367 267 2678 reservation@montana.com</p>
              </div>
            </div>
            <div class="col-xl-2 col-md-6 col-lg-2">
              <div class="footer_widget">
                <h3 class="footer_title">
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
            <div class="col-xl-4 col-md-6 col-lg-4">
              <div class="footer_widget">
                <h3 class="footer_title">
                  Newsletter
                        </h3>
                <form action="#" class="newsletter_form">
                  <input type="text" placeholder="Enter your mail"></input>
                  <button type="submit" >Sign Up</button>
                </form>
                <p class="newsletter_text">Subscribe newsletter to get updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copy-right_text">
        <div class="container">
          <div class="footer_border"></div>
          <div class="row">
            <div class="col-xl-8 col-md-7 col-lg-9">
              <p class="copy_right">
              </p>
            </div>
            <div class="col-xl-4 col-md-5 col-lg-3">
              <div class="socail_links">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
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