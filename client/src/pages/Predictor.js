import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const { user } = useSelector(state => state.user);
  const [userSymptoms, setUserSymptoms] = useState('');
  const [selectedDisease, setSelectedDisease] = useState('');
  const [suggestedDoctor, setSuggestedDoctor] = useState('');
  const [availableDoctors, setAvailableDoctors] = useState([]);

  const handleSymptomsChange = event => {
    setUserSymptoms(event.target.value);
  };

  const handleDiseaseChange = event => {
    setSelectedDisease(event.target.value);
  };

  const handleCheckAvailability = () => {
    const doctors = getAvailableDoctors(selectedDisease, userSymptoms);
    setAvailableDoctors(doctors);

    // For simplicity, we'll just pick the first doctor for suggestion
    if (doctors.length > 0) {
      setSuggestedDoctor(doctors[0]);
    }
  };

  const getAvailableDoctors = (disease, symptoms) => {
    // Simulated available doctors based on disease or symptoms
    // Replace this with actual logic to fetch doctors from your backend
    return [
      'Dr. John Doe',
      'Dr. Jane Smith',
      'Dr. Michael Johnson',
      // ... more doctors
    ];
  };
  const dummyMedicineOptions = Array.from(
    { length: 132 },
    (_, index) => `Symptoms ${index + 1}`,
  );
  const dummySpecialityOptions = Array.from(
    { length: 132 },
    (_, index) => `Symptoms ${index + 1}`,
  );
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h2>
            <b style={{ color: 'lightblue' }}>MediAi</b>
          </h2>
        </div>
      </nav>
      <div style={styles.container}>
        <div style={styles.content}>
          <p style={styles.greeting}>Hello, {user?.name}</p>
          <br />
          <div style={styles.filters}>
            <select
              onChange={handleDiseaseChange}
              value={selectedDisease}
              style={styles.input}
              id="diseaseFilter"
            >
              <option value="">Select your Symptom</option>
              {dummyMedicineOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button
              onClick={handleCheckAvailability}
              style={styles.filterButton}
            >
              Apply
            </button>
          </div>

          <div style={styles.needHelp}>
            <h2 style={styles.needHelpHeading}>Need Help?</h2>
            <textarea
              rows="5"
              cols="40"
              placeholder="Enter your symptoms..."
              value={userSymptoms}
              onChange={handleSymptomsChange}
              style={styles.textArea}
            />
            <button
              onClick={handleCheckAvailability}
              style={styles.needHelpButton}
            >
              Get Suggested Doctor
            </button>
            {suggestedDoctor && (
              <p style={styles.suggestedDoctor}>
                Suggested Doctor: {suggestedDoctor}
              </p>
            )}
          </div>

          {/* <div style={styles.doctorsList}>
            <h2>Available Doctors:</h2>
            <ul>
              {availableDoctors.map((doctor, index) => (
                <li key={index}>{doctor}</li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px',
    height: '100vh',
    background: '#f2f2f2',
  },
  content: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  greeting: {
    fontSize: '1.5rem',
    color: '#555',
    marginBottom: '20px',
  },
  filters: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
    width: '250px',
  },
  filterButton: {
    padding: '12px 30px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    background: '#3498db',
    color: 'white',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  needHelp: {
    marginTop: '30px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    width: '70%',
    background: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '0 auto', // Center horizontally
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center vertically
  },
  needHelpHeading: {
    fontSize: '1.8rem',
    marginBottom: '10px',
    color: '#333',
  },
  textArea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    resize: 'vertical',
    fontSize: '1rem',
  },
  needHelpButton: {
    padding: '12px 30px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    background: '#3498db',
    color: 'white',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  suggestedDoctor: {
    fontSize: '1.2rem',
    color: '#333',
    marginTop: '10px',
  },
  doctorsList: {
    marginTop: '30px',
    textAlign: 'left',
  },
};

export default Home;
