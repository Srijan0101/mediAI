import React from 'react';
import '../styles/Start.css';
import { Link } from 'react-router-dom';
import { Carousel } from '../components/Carousel';
const slides = [
  {
    src: require('../pics/Community.jpg'),
    alt: 'Slide 1',
  },
  {
    src: require('../pics/bigstock-Giving-The-Medicine-80365613.webp'),
    alt: 'Slide 2',
  },
  { src: require('../pics/pexels-photo-4021806.jpeg'), alt: 'Slide 3' },
];
const Card = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        src={imageSrc}
        style={{ height: '180px', width: '286px', alignItems: 'center' }}
        className="card-img-top"
        alt={imageAlt}
      />
      <div className="card-body">
        <h5 className="card-title">
          <center>{title}</center>
        </h5>
        <p
          className="card-text"
          style={{ maxHeight: '200px', overflowY: 'auto' }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const MainPage = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h2>
            <b style={{ color: 'lightblue' }}>MediAi</b>
          </h2>
        </div>

        <div className="buttons">
          <button type="button" className="btn">
            <Link
              to="/register"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Signup
            </Link>
          </button>
          <button type="button" className="btn">
            <Link
              to="/login"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Login
            </Link>
          </button>
        </div>
      </nav>
      <Carousel data={slides} />
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          gap: '0px',
        }}
      >
        <Card
          imageSrc={require('../pics/GiveHands-iStock-Blog-1280x620-1280x620.jpg')}
          imageAlt="..."
          title="Donation"
          description="Medicine donation is a vital act of compassion that saves lives and makes a significant impact on the well-being of those in need. By contributing unused or unexpired medications, people can extend a helping hand to vulnerable communities and promote health equity. This selfless gesture not only reduces medical waste but also ensures that essential treatments reach those who might otherwise struggle to access them. Through medicine donation, we can foster hope, relief, and better healthcare for all, creating a healthier and more caring world. Together, our generosity can make a meaningful difference in the lives of countless individuals, offering them the chance for a brighter and healthier future."
        />
        <Card
          imageSrc={require('../pics/istockphoto-1276811978-170667a-needy.jpg')}
          imageAlt="..."
          title="Needy"
          description="Medicine-needy individuals are those who lack access to necessary medications due to financial constraints or limited resources. They may be facing serious health conditions but are unable to afford or obtain essential treatments. Supporting the medicine-needy is a compassionate endeavor that can significantly improve their quality of life and well-being. By providing donations or access to affordable medicines, we can help alleviate their suffering and ensure that everyone has a fair chance at better health. Empathy and solidarity with the medicine-needy can make a meaningful difference in their lives and create a healthier, more inclusive society."
        />
        <Card
          imageSrc={require('../pics/terms-conditions-sign-yellow-sticky-note-message-paper-238200006.jpg')}
          imageAlt="..."
          title="Terms & Conditions"
          description="Welcome to our non-profit medicine donation website, where compassion meets generosity. Our platform serves as a bridge between compassionate donors and individuals in critical need of essential medications. As a donor, your contributions of unused, unexpired medicines in their original packaging have the power to make a profound impact on the lives of vulnerable communities, promoting health equity and reducing wastage. For medicine-needy individuals, our platform offers hope and relief during challenging times, ensuring access to crucial medications."
        />
        <Card
          imageSrc={require('../pics/non-pro.jpg')}
          imageAlt="..."
          title="Non-Profit Org."
          description="We take pride in being a non-profit organization committed to serving the community and making a positive impact on the lives of those in need. Our company's mission revolves around the principle of altruism, putting the welfare of individuals before any financial gains. As a non-profit, our focus remains solely on fulfilling our charitable objectives and providing valuable services to both donors and medicine-needy individuals. By operating as a non-profit, we aim to create a transparent and accountable platform, where every contribution goes directly towards supporting those requiring essential medications."
        />
      </div>
    </div>
  );
};

export default MainPage;
