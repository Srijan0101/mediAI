import React from 'react';
import '../styles/Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user } = useSelector(state => state.user);

  const avatarImage =
    'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg';

  return (
    <Layout>
      <div className="profile">
        <img src={avatarImage} alt="Profile" className="profile-image" />
        <br />
        <br />
        <h1 className="profile-name">Name: {user?.name}</h1>
        <br />
        <p className="profile-bio">Email: {user?.email}</p>
        <br />
        <button className="btn">
          <Link
            to="/user"
            className="anchor"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Get Your Appointment
          </Link>
        </button>
        <button className="btn">
          <Link
            to="/ai"
            className="anchor"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            AI Disease Predictor
          </Link>
        </button>
      </div>
    </Layout>
  );
};

export default Profile;