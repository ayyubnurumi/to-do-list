import React from 'react';
import './Profile.css'

export const Profile = () => {
  const userData =  JSON.parse(localStorage.userCredentials)
  return (
    <div id='profie-container'>
    <h1 className='title'>Profile</h1>
      <table id='user-data'>
        <tbody>
          <tr>
            <th>username</th>
            <td>{userData.userName}</td>
          </tr>
          <tr>
            <th>first name</th>
            <td>{userData.userFirstName}</td>
          </tr>
          <tr>
            <th>last name</th>
            <td>{userData.userLastName}</td>
          </tr>
          <tr>
            <th>email</th>
            <td>{userData.userEmail}</td>
          </tr>
          <tr>
            <th>phone</th>
            <td>{userData.userPhoneNumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
