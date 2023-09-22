import React from 'react';
// import './Profile.css';
import '../styles/Profile.css';
import { useDispatch, useSelector } from 'react-redux';
const Profile = () => {
  const { user } = useSelector(state => state.user);
  return (
    <div className="profile">
      <img
        src="path_to_your_profile_picture.jpg"
        alt="Profile"
        className="profile-image"
      />
      <h1 className="profile-name">{user?.name}</h1>
      <p className="profile-bio">{user?.email}</p>
    </div>
  );
};

export default Profile;
