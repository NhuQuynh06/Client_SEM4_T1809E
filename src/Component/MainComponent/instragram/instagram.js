import React from 'react';
import './instagram.scss';
import instragram_1 from '../../../Assets/instragram/1.png'
import instragram_2 from '../../../Assets/instragram/2.png'
import instragram_3 from '../../../Assets/instragram/3.png'
import instragram_4 from '../../../Assets/instragram/4.png'
import instragram_5 from '../../../Assets/instragram/5.png'

class Instagram extends React.Component {
  render() {
    return (
      <section classNameName='instagram'>
        <div className="instragram_area">
          <div className="single_instagram">
            <img src={instragram_1} alt=""></img>
            <div className="ovrelay">
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="single_instagram">
            <img src={instragram_2} alt=""></img>
            <div className="ovrelay">
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="single_instagram">
            <img src={instragram_3} alt=""></img>
            <div className="ovrelay">
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="single_instagram">
            <img src={instragram_4} alt=""></img>
            <div className="ovrelay">
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="single_instagram">
            <img src={instragram_4} alt=""></img>
            <div className="ovrelay">
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Instagram