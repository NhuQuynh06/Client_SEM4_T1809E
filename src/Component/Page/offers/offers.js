import React, { useState } from 'react';
import './offers.scss';
import offer_1 from '../../../Assets/images/offers/1.png';
import offer_2 from '../../../Assets/images/offers/2.png';
import offer_3 from '../../../Assets/images/offers/3.png';

function Offers() {
  // init value
  const [count, setCount] = useState(0);

  return (
    <section className='offers-component'>
      <div className="offers_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-100">
                <span>Our Offers</span>
                <h3>Ongoing Offers</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-4">
              <div className="single_offers">
                <div className="about_thumb">
                  <img src={offer_1} alt=""></img>
                </div>
                <h3>Up to 35% savings on Club <br></br>
                      rooms and Suites</h3>
                <ul>
                  <li>Luxaries condition</li>
                  <li>3 Adults & 2 Children size</li>
                  <li>Sea view side</li>
                </ul>
                <p className="book_now" >book now</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-4">
              <div className="single_offers">
                <div className="about_thumb">
                  <img src={offer_2} alt=""></img>
                </div>
                <h3>Up to 35% savings on Club <br></br>
                          rooms and Suites</h3>
                <ul>
                  <li>Luxaries condition</li>
                  <li>3 Adults & 2 Children size</li>
                  <li>Sea view side</li>
                </ul>
                <p className="book_now" >book now</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-4">
              <div className="single_offers">
                <div className="about_thumb">
                  <img src={offer_3} alt=""></img>
                </div>
                <h3>Up to 35% savings on Club <br></br>
                              rooms and Suites</h3>
                <ul>
                  <li>Luxaries condition</li>
                  <li>3 Adults & 2 Children size</li>
                  <li>Sea view side</li>
                </ul>
                <p className="book_now" onClick={() => setCount(count+1)}>book now</p>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="single_offers">
                <p className="book_now" >Cart - {count}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Offers