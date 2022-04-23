import React from "react";
import Tooltip from "./Tooltip";
import defPhoto from "./../assets/photo-cover.svg";

function UserCard({ user }) {
  const { name, email, phone, position, photo } = user;
  return (
    <div className="user-card">
      <object data={photo} type="image/png">
        <img src={defPhoto} alt="no profile picture" />
      </object>
      {/* <img src={photo} alt="user photo" /> */}
      <div className="user-name">
        <Tooltip>{name}</Tooltip>
      </div>
      <Tooltip>{position}</Tooltip>
      <Tooltip>{email}</Tooltip>
      <Tooltip>{phone}</Tooltip>
    </div>
  );
}

export default UserCard;
