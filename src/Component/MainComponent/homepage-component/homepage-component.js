import React, { Component, Fragment } from 'react';

import Slider from '../../Page/slider/slider';
import AboutArea from '../../Page/about_area/about_area';
import Offers from '../../Page/offers/offers';
import Room from '../../Page/better-room/better-room';
import ResevationAndQuery from '../../Page/reservation-query/reservation-query';
import Instagram from '../../Page/instagram/instagram';

function HomePageComponent() {
  return (
    <Fragment>
      <Slider></Slider>
      <AboutArea ></AboutArea>
      <Offers ></Offers>
      <Room></Room>
      <ResevationAndQuery></ResevationAndQuery>
      <Instagram></Instagram>
    </Fragment>
  )
}

export default HomePageComponent
