import React, {useEffect} from "react";
import "./Profile.css";

export const Profile = () => {
  useEffect(() => {
    document.title = "profile | todolist";
  });
  const userData = JSON.parse(localStorage.userCredentials);
  return (
    <div id="profile-container">
      <div id="content-box">
        <h1 className="title">Profile</h1>
        <table id="user-data">
          <tbody>
            <tr>
              <th>Username</th>
              <td>{userData.userName}</td>
            </tr>
            <tr>
              <th>First Name</th>
              <td>{userData.userFirstName}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{userData.userLastName}</td>
            </tr>
            <tr>
              <th>E-mail</th>
              <td>{userData.userEmail}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{userData.userPhoneNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
