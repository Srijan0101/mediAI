import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import { Col, Row } from 'antd';
import Doctor from '../components/Doctor';
import { useDispatch, useSelector } from 'react-redux';
import { showLoading, hideLoading } from '../redux/alertsSlice';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/home.css';
import { Link } from 'react-router-dom';
function Home() {



  return (
    <Layout>
        
        <div className="top-page">
          <img
            src={require('../pics/findDoctor.png')}
            style={{ height: '500px', width: '100%' }}
          />
        </div>
      <div className="card-container">
        <div className="card">

          <div className='card-title'>Get Your Appointment</div>
          <div>
          <button className="btn">
            
          <Link
                to="/user"
                className="anchor"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Click here
              </Link>
            </button>
          </div>
          
        </div>
        
        <div className="card">
        <div>
        <div className='card-title'>Let us predict your disease</div>
        <div>
          <button className="btn">
          <Link
                to="/ai"
                className="anchor"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Click here
              </Link>
          </button>
          </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
