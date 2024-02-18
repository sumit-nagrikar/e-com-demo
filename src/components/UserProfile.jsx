import React, { useState } from 'react'
import UserInfo from './UserInfo'

const UserProfile = () => {
    const [user, setUser] = useState({
        name: "Rahul Dravid",
        email: "celestemoon10@gmail.com",
        age: 21
    });
  return (
    <div className='container bg-light my-5'>
        <h1>User Profile Page</h1>
        <UserInfo name={user.name} email={user.email} age={user.age}/>
    </div>
  )
}

export default UserProfile