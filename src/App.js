import React, { useState } from "react";
import { Container, Form, InputGroup, Table } from "react-bootstrap";
import { data } from "./data.js";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [search, setsearch] = useState('')
  return (
    <div className="App">
      <Container>
        <h1 className='text-center mt-4'>Contact Keeper</h1>
        <Form>
          <InputGroup className='my-3'>
            <Form.Control onChange={(e) => setsearch(e.target.value)} placeholder='search contacts' />
          </InputGroup>
        </Form>

        <Table striped bordered hover>

          <thead>
            <tr>
              <th>First_Name</th>
              <th>Last_Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>country</th>
              <th>state</th>
              <th>city</th>

            </tr>
          </thead>

          <tbody>

            {data.filter((item) => {
              return search.toLowerCase() === '' ? item : item.first_name.toLowerCase().includes(search)
            }).map((item) => {
              return (
                <tr>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{item.phone}</td>
                  <td>{item.country}</td>
                  <td>{item.state}</td>
                  <td>{item.city}</td>

                </tr>
              )
            })}

          </tbody>

        </Table>
      </Container>
    </div>
  );
}

export default App;
