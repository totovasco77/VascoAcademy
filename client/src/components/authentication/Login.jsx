import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import {
    signInWithEmailAndPassword,
    signInWithPopup 
} from "firebase/auth";
import { useUsersContext } from "../../hooks/Context";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth, googleProvider } from "../../firebase/config";



const Login = () => {
    const navigate = useNavigate();
    const { user, setUser } = useUsersContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
             const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
             );
             const userEmail = userCredential.user.email;
             const q = query(collection(db, "users"), where("email", "==", userEmail));
             const querySnapshot = await getDocs(q);
             if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    setUser({ id: doc.id, ...doc.data() });
                });
                navigate("/home");
             } else {
                console.log("Registro en encontrado");
             }
            } catch(err) {
                console.log(err.message);
            }
    }; 

    const handleGoogleLogin = async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log("Auth con google...:", result);
        const user = result.user;
        const userEmail = user.email;

        const q = query(collection(db, "users"), where("email", "==", userEmail));
        const querySnapshot = await getDocs(q);
        console.log("Gmail....:", querySnapshot);
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
                  setUser({ id: doc.id, ...doc.data() });
          });
          navigate("/home");
        } else {
          alert("Error en el Login con Gmail");
        }
      } catch (error) {
        console.log(error.message);
      }
  };
    
    return (
        <Container>
          <h2 className="my-4 text-center">Iniciar Sesión</h2>  
          <div className="p-5 shadow rounded">
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                 type="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="Enter email"
                 required
                 autoComplete="Email"
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 placeholder="Enter password"
                 required
                 autoComplete="password"
                 />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4 w-100">
                Iniciar Sesión
            </Button>
          </Form>
         
            <Button variant="danger"  className="mt-4 w-100" onClick={handleGoogleLogin}>
                Iniciar Sesión con Google
            </Button>
          </div>
        </Container>


    );

};    

export default Login; 