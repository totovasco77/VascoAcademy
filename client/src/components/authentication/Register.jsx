import React, { useState } from 'react';
import { Form, Button, Container } from "react-bootstrap";
import { db, auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useUsersContext } from '../../hooks/Context';

const Register= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();
  const {user, setUser} = useUsersContext();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log("en el try....", email, password);
      createUserWithEmailAndPassword(auth, email, password)
       .then(async () => {
         const user = { email, role };
         console.log(user);
         await addDoc(collection(db, "users"), user);
         setUser(user);
         navigate("/user");
       })
       .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
       });
    } catch (error) {
      alert(error.message);
    }
  };

  return(
    <Container>
      <h2 className='my-4 text-center'>Registro</h2>
      <div className='p-5 shadow rounded'>
        <Form onSubmit={handleRegister}>
           <Form.Group controlId='formBasicEmail'>
             <Form.Label>Correo Electrónico</Form.Label>
             <Form.Control
               type='email'
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Enter email"
               required
               autoComplete='Email'
              />            
            </Form.Group> 
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                required
                autoComplete='password'
              />
            </Form.Group>
            <Form.Group controlId='formBasicRole'>
              <Form.Label>Role</Form.Label>
              <Form.Control
               as="select"
               value={role}
               onChange={(e) => setRole(e.target.value)}
               required
               autoComplete='Role'
               >
                <option value="user">Usuarios</option>
                <option value="admin">Administración</option>
                <option value="teacher">Profesores</option>
               </Form.Control>
            </Form.Group>
            <Button variant='primary' type='submit' className='mt-4 w-100'>
              Registrarme
            </Button>
        </Form>     
       </div>
    </Container> 
  )
};

export default Register;