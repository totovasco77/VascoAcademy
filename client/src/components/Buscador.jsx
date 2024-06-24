import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListStudent from '../Estudiantes/ListStudents';
import UserList from './UsersList';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

function Buscador() {
  const [users, setUsers] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const peticionGet = async() => {
    const usersCollection = getDocs(collection(db, "users"));
    const snapshot = await getDocs(usersCollection)
    .then(response => {
      setUsers(response.data);
    }).catch(error => {
      console.log(error);
    });
  }

  const handleChange=e=>{
    setBusqueda(e.target.value);
    SearchUser(e.target.value);

  }
  const SearchUser = (users) => {
    var resultadosBusqueda = UserList.filter((elemento)=>{
      if(elemento.nombre.toString().toLowerCase().includes(users.toLowercase())
      ){
    return elemento;
    }
    });
    setUsers(resultadosBusqueda);
 }

 useEffect(() =>{
  peticionGet();
 },[])
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Buscar"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button onClick={SearchUser}>Buscar</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default Buscador;