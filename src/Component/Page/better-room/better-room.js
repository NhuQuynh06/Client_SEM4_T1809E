import React from 'react';
import './better-room.scss';
import room_1 from '../../../Assets/images/rooms/1.png'
import room_2 from '../../../Assets/images/rooms/2.png'
import room_3 from '../../../Assets/images/rooms/3.png'
import room_4 from '../../../Assets/images/rooms/4.png'

function Room() {
  return (
    <section className='room-component'>
      <div className="features_room">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-100">
                <span>Featured Rooms</span>
                <h3>Choose a Better Room</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="rooms_here">
          <div className="single_rooms">
            <div className="room_thumb">
              <img src={room_1} alt=""></img>
              <div className="room_heading d-flex justify-content-between align-items-center">
                <div className="room_heading_inner">
                  <span>From $250/night</span>
                  <h3>Superior Room</h3>
                </div>
                <a href="#" className="line-button">book now</a>
              </div>
            </div>
          </div>
          <div className="single_rooms">
            <div className="room_thumb">
              <img src={room_2} alt=""></img>
              <div className="room_heading d-flex justify-content-between align-items-center">
                <div className="room_heading_inner">
                  <span>From $250/night</span>
                  <h3>Deluxe Room</h3>
                </div>
                <a href="#" className="line-button">book now</a>
              </div>
            </div>
          </div>
          <div className="single_rooms">
            <div className="room_thumb">
              <img src={room_3} alt=""></img>
              <div className="room_heading d-flex justify-content-between align-items-center">
                <div className="room_heading_inner">
                  <span>From $250/night</span>
                  <h3>Signature Room</h3>
                </div>
                <a href="#" className="line-button">book now</a>
              </div>
            </div>
          </div>
          <div className="single_rooms">
            <div className="room_thumb">
              <img src={room_4} alt=""></img>
              <div className="room_heading d-flex justify-content-between align-items-center">
                <div className="room_heading_inner">
                  <span>From $250/night</span>
                  <h3>Couple Room</h3>
                </div>
                <a href="#" className="line-button">book now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Room