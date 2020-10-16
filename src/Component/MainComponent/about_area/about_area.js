import React, { Component } from 'react';
import './about_area.scss'

class AboutArea extends Component {
  render() {
    return (
      <div className="about_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="about_info">
                <div className="section_title mb-20px">
                  <span>About Us</span>
                  <h3>A Luxuries Hotel
                                    with Nature</h3>
                </div>
                <p>Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.</p>
                <a href="#" className="line-button">Learn More</a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="about_thumb d-flex">
                <div className="img_1">
                  <img src="../../../Assets/about-us/about_1.png" alt=""></img>
                </div>
                <div className="img_2">
                  <img src="../Assets/about-us/about_2.png" alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
export default AboutArea
