import React from "react";
import "./UserDetails.css";
import { useHistory } from "react-router-dom";

function UserDetails(props) {
  let history = useHistory();

  console.log(history.location.state.userDetails);
  let userDetails = history.location.state.userDetails;
  return (
    <div className="userdetails">
      <h1>User Details</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>

          <tr>
            <td>{userDetails.name}</td>
            <td>{userDetails.phoneNumber}</td>
            <td>{userDetails.address}</td>
          </tr>
        </tbody>
      </table>
      {userDetails.role === "admin" ? (
        <button onClick={() => history.goBack()}>Add user</button>
      ) : null}
    </div>
  );
}

export default UserDetails;
