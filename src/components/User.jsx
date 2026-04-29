import React from 'react';

const UserProfile = (props) => {
  return (
    <div className="user-profile">
      <h2>{props.name}</h2>

      <p>
        <strong>E-Post:</strong> {props.email}
      </p>

      <div>
        <strong> Bio: </strong>
        <p> {props.bio}</p>
      </div>
    </div>
  );
};

export default UserProfile;
