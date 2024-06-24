import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { auth } from '../../firebase/config';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useUsersContext } from '../../hooks/Context';

const Logout = () => {

  const navigate = useNavigate();
  const { user, setUser } = useUsersContext();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar la sesión.", error);
    }
  };

  //useEffect(() => {
  //handleLogout()
  //}, []);

  return ( 
    <Button className='my-4 w-30' variant='dark' onClick={handleLogout}>
       Logout
    </Button>
  );
};

export default Logout;