import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import './room-component.scss';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import AboutComponent from '../about-component/about-component';

export class RoomComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      persons: []
    }
    this.greetParent = this.greetParent.bind(this)
  }


  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({
          persons: persons
        });
      })
  };

  greetParent() {
    alert(`hello`);
  }


  render() {
    console.log('person',this.state.persons )
    return (
      <section className="room-component ">
        <div className="bradcam_area breadcam_bg_1">
          <h3 >Laxaries Rooms</h3>
        </div>
        <div className='reservation-infomation-table container'>
          <div className='reservation-infomation-table__title'>
            <h5> Resevation Rooms </h5>
          </div>
          <Table striped bordered hover size="sm">
            <thead >
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>User name</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody >
              {this.state.persons.map(person => {
                return (
                  <tr>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.email}</td>
                    <td>{person.phone}</td>
                    <td>{person.username}</td>
                    <td>{person.website}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </section>
    )
  }
}

export default RoomComponent
