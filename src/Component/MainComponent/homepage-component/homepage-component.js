import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import Slider from '../slider/slider';
import AboutArea from '../about_area/about_area';
import Offers from '../offers/offers';
import Room from '../better-room/better-room';
import ResevationAndQuery from '../reservation-query/reservation-query';
import Instagram from '../instagram/instagram';

export class HomePageComponent extends Component {
  static propTypes = {

  }

  render() {
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
}

export default HomePageComponent
