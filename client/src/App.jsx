import React from 'react';
import Users from './components/Users';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Footer from './components/Footer';
import Home from './components/Home';
import NavigationBar from './components/authentication/Navbar';
import Login from './components/authentication/Login';
import Logout from './components/authentication/Logout';
import Register from './components/authentication/Register';
import { useUsersContext } from './hooks/Context';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Image } from 'react-bootstrap';
import ListStudent from './Estudiantes/ListStudents';

const App = () => {
  const { user, setUser } = useUsersContext();
  console.log(user);
  return (
    <div>
     <header> 
      <Router>
         <NavigationBar />
         <Container>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/login" element={!user && <Login />} />
           <Route path="/register" element={<Register />} />
           <Route path="/logout" element={user && <Logout />} />
           <Route path="/user" element={user && <Users />} />
           <Route path="/teacher" element={user && <Teacher />} />
           <Route path="/students" element={user && <ListStudent />} />
           <Route path="*" element={<Navigate to="/" />} />
         </Routes>
         </Container>
      </Router>
      </header>
      <main>

      </main>
      <Footer />
      </div>
  );
};



const Teacher = () => (
  <>
    <h1>Gestión de Profesores</h1>

   
      <Logout/>
   
  </>
);


export default App;
