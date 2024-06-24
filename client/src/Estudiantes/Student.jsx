import React, { useState, useEffect } from 'react';
import UserList from "../components/UsersList";
import UserForm from '../components/UsersForm';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import ListStudent from './ListStudents';
import Users from '../components/Users';

function Student() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    
    const updateList = async () => {
      const fetchData = async () => {
        const usersCollection = collection(db, "users", "user");
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
    <ListStudent users={users} setSelectedUser={setSelectedUser} updateList={updateList} />
    </div>
  );
};

export default  Student;
