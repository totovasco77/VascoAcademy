import React, { useState, useEffect } from 'react';
import UserList from "./UsersList";
import UserForm from './UsersForm';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

function Users() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    
    const updateList = async () => {
      const fetchData = async () => {
        const usersCollection = collection(db, "users");
        const snapshot = await getDocs(usersCollection);
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setUsers(data);           
    };
     await fetchData();
    }
    updateList();

    useEffect(() => {
        const fetchData = async () => {
            const usersCollection = collection(db, "users");
            const snapshot = await getDocs(usersCollection);
            const data = snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id
            }));
            setUsers(data);           
        };
        fetchData();
    }, []);

  return (
    <div className="container my-4">
    <UserForm selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
    <UserList users={users} setSelectedUser={setSelectedUser} updateList={updateList} />
    </div>
  );
};

export default  Users;
