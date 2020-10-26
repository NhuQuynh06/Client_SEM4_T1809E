import React, { useState, useEffect } from 'react';
import './room-component.scss';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function RoomComponent() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        setList(res.data)
      })
  });

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
            {list.map((person, index) => {
              return (
                <tr key={index}>
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

export default RoomComponent
