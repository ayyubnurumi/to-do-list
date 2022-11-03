import React from 'react';
import './Profile.css'

export const Profile = () => {
  const userData =  JSON.parse(localStorage.userCredentials)
  return (
    <div>
      <h1>Profile</h1>
      <table>
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
