import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  // useSelector is used to use the value of the from the redux.
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);
  return (
    <div style={{ color: themeColor }}>
      <h1>Profile</h1>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
    </div>
  );
};

export default Profile;
