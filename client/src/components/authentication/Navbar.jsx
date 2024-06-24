import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import { useUsersContext } from "../../hooks/Context";
import React, { useEffect, useState} from "react";
import { auth } from "../../firebase/config";

const NavigationBar = () => {
    const { user, setUser } = useUsersContext();
    const [userRole, setUserRole] = useState(null);
    useEffect(() => {
        if (user){
        setUserRole(user?.role);
        console.log("Rol del usuario.....:", user?.role);
        }
    }, [user]);


    return(
        <Navbar bg="dark" data-bs-theme="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">
                Vasco Academy
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responside-navbar-nav">               
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                {!user && (
                   <>
                     <Nav.Link as={Link} to="/login">
                        Login
                     </Nav.Link>
                     <Nav.Link as={Link} to="/register">
                        Registro 
                     </Nav.Link>
                   </>
                )}
                {user && (
                    <>
                      {userRole === "teacher" && (
                        <Nav.Link as={Link} to="/teacher">
                          Profesor
                        </Nav.Link>
                      )}
                      {userRole === "user" && (
                        <Nav.Link as={Link} to="/user">
                          Estudiante
                        </Nav.Link>
                      )}   

                      <NavDropdown
                         id="nav-dropdown-dark-example"
                         title="Administración"
                         menuVariant="dark"
                      >
                         <NavDropdown.Item as={Link} to="/cursos" >
                         Gestión de Cursos
                         </NavDropdown.Item>
                         <NavDropdown.Item as={Link} to="/students">
                         Gestión de Estudiante
                         </NavDropdown.Item>
                         <NavDropdown.Item as={Link} to="/teacher">
                           Gestión de Profesores
                         </NavDropdown.Item>
                         {userRole === "admin" && (
                          <NavDropdown.Item as={Link} to="/user" >
                         Gestión de Usuarios
                         </NavDropdown.Item>
                         )}
                         
                         <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.2">
                            Another action
                         </NavDropdown.Item>
                      </NavDropdown>

                      <Nav.Link as={Link} to="/logout">
                          Cerrar Sesión
                        </Nav.Link>    
                       

                      
                    </>
                )}
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        
    );
};
export default NavigationBar;