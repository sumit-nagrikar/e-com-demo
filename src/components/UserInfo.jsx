import React from 'react'

const UserInfo = ({name,email,age}) => {
  return (
    <div>
        <h2>User Information</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
    </div>
  )
}

export default UserInfo;