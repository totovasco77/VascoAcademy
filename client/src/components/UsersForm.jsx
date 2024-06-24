import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

export default function UserForm({ 
   selectedUser, 
   setSelectedUser, 
   updateList
}) {
   const [document, setDocument] = useState("");
   const [nombre, setNombre] = useState("");
   const [email, setEmail] = useState("");    
   const [dirección, setDirección] = useState("");
   
   
   const handleSubmit = (e) => {
         e.preventDefault();

           const user = {
             document,
             nombre,
             email,
             dirección 
            };

           if (selectedUser) {
               updateDoc(
                  doc(db, "users", selectedUser.id),
                   user
               );
           } else {
               addDoc(
                  collection(db, "users"), 
                  user
               );
           }
           setSelectedUser(null);
       };
      
       useEffect(() => {  
         console.log("se ejecutó el useEffect...")
         if (selectedUser) {
            setDocument(selectedUser.document);
            setNombre(selectedUser.nombre);
            setEmail(selectedUser.email);
            setDirección(selectedUser.dirección);
         }  else {
            setDocument("");
            setNombre("");
            setEmail("");
            setDirección("");
         }
      }, [selectedUser]);


    return (
        <>
           <h3 className='my-2'>Gestión de Usuarios</h3>
           <Form onSubmit={handleSubmit}>
              <Form.Group>
                 <Form.Label>Documento</Form.Label>
                 <Form.Control 
                     type="text"
                     value={document}
                     onChange={(e) => setDocument(e.target.value)}
                     required
                     />
              </Form.Group>
              <Form.Group>
                 <Form.Label>Nombre</Form.Label>
                 <Form.Control 
                     type="text"
                     value={nombre}
                     onChange={(e) => setNombre(e.target.value)}
                     required
                     />
              </Form.Group>
              <Form.Group>
                 <Form.Label>Email</Form.Label>
                 <Form.Control 
                     type="text"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                     />
              </Form.Group>
              <Form.Group>
                 <Form.Label>Dirección</Form.Label>
                 <Form.Control 
                     type="textarea"
                     value={dirección}
                     onChange={(e) => setDirección(e.target.value)}
                     required
                     />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 my-4">
                  {selectedUser ? "Actualizar" : "Agregar"}
              </Button>{" "}
           </Form>
        </>
    )
};