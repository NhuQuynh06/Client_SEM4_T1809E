import React, { Component } from 'react'
import './slider.scss'

export class Slider extends Component {
  static propTypes = {

  }

  render() {
    return (
      <section className="slide">
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
      </section>
    )
  }
}

export default Slider
