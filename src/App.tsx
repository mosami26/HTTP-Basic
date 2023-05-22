
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { log } from 'console';


function App() {
let userData:any = [];
const [users, setUsers] = useState([])

  useEffect(() =>{
    
    
    axios.get('http://localhost:3001/users').then(
      (res) =>{
        const {allUsers} = res.data
        console.log('allUsers from axios', allUsers);
        userData = allUsers;
        setUsers(allUsers)
      }
    ).catch(
      (err) =>{
        console.log('err from axios', err.message);
       }
       )
       
  }, [])
  console.log('userData',userData);
  console.log('users',userData);
  
  const allUsersHTML = users.map((user:any , index)=>{
    return(
      <p key={user.id}>
        user-{index} := {user.email}
      </p>
    )
  })
  
  return (
    <div>
      <h3>HTTP</h3>
      {allUsersHTML}
    </div>
  );
}

export default App;
