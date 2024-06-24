import React from 'react';
import { useState, } from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { Table, Button } from 'react-bootstrap';
import { db } from "../firebase/config";


 
   
 const UserList = ({ 
    users, 
    setSelectedUser, 
    updateList
   }) => {
    const handleDelUser = async (id) => {
        await deleteDoc(doc(db, "users", id));
        updateList();
    };

    
     return (

        <>
        <h3 className='my-4'>Listado de Usuarios</h3>
        <Table striped  bordered  hover >
            <thead>
                <tr>
                    <th scope="col">Documento</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Acción</th>
                </tr>
            </thead>
            <tbody>
                { users.map((user) => (
                        <tr scope="row" key={user.id}>
                            <td>{user.document}</td>
                            <td>{user.nombre}</td>
                            <td>{user.email}</td>
                            <td>{user.dirección}</td>
                            <td>
                                <Button className="mx-3" onClick={() => setSelectedUser(user)}>
                                    Editar
                                </Button>
                                <Button onClick={() => handleDelUser(user.id)}>
                                    Eliminar
                                </Button>
                            </td>

                        </tr>
                    ))}
            </tbody>
        </Table>
        </>

      );
    };
    export default UserList;
     
 
