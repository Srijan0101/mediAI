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
    console.log(doctors);
    setAvailableDoctors(doctors);

    // For simplicity, we'll just pick the first doctor for suggestion
    if (doctors.length > 0) {
      setSuggestedDoctor(doctors[0]);
    }
  };

  const diseaseToDoctorMap = {
    'Fungal Infection': ['Dr. John Doe', 'Dr. Jane Smith'],
    'Allergy': ['Dr. Michael Johnson', 'Dr. Sarah Brown'],
    'GERD': ['Dr. Emily White', 'Dr. Robert Lee', 'Dr. Mary Adams'],
    'Chronic Cholestasis': ['Dr. David Wilson', 'Dr. Laura Clark', 'Dr. Thomas Brown'],
    'Drug Reaction': ['Dr. Sarah Taylor', 'Dr. James Smith'],
    'Peptic Ulcer Disease': ['Dr. Olivia Martinez', 'Dr. Daniel Harris'],
    'AIDS': ['Dr. Maria Rodriguez', 'Dr. Kevin Anderson'],
    'Diabetes': ['Dr. Patricia Lewis', 'Dr. Christopher Walker'],
    'Gastroenteritis': ['Dr. Jessica White', 'Dr. Brian Turner', 'Dr. Susan Hill'],
    'Bronchial Asthma': ['Dr. Matthew Martin', 'Dr. Laura Moore', 'Dr. Richard Clark'],
    'Hypertension': ['Dr. Kimberly King', 'Dr. William Wright'],
    'Migraine': ['Dr. Karen Brown', 'Dr. Joseph Taylor'],
    'Cervical Spondylosis': ['Dr. Jennifer Scott', 'Dr. Timothy Thomas'],
    'Paralysis (Brain Hemorrhage)': ['Dr. Susan Mitchell', 'Dr. Charles Adams'],
    'Jaundice': ['Dr. Amy Hall', 'Dr. Andrew Nelson'],
    'Malaria': ['Dr. Linda Harris', 'Dr. Benjamin White'],
    'Chicken Pox': ['Dr. Lisa Davis', 'Dr. Stephen Turner'],
    'Dengue': ['Dr. Nancy Anderson', 'Dr. John Evans'],
    'Typhoid': ['Dr. Carol Parker', 'Dr. Mark Johnson'],
    'Hepatitis A': ['Dr. Michelle Allen', 'Dr. Edward Martinez'],
    'Hepatitis B': ['Dr. Sandra Wilson', 'Dr. Thomas Baker'],
    'Hepatitis C': ['Dr. Pamela Young', 'Dr. Jeffrey Davis'],
    'Hepatitis D': ['Dr. Elizabeth Garcia', 'Dr. Michael Hall'],
    'Hepatitis E': ['Dr. Deborah Hernandez', 'Dr. David Allen'],
    'Alcoholic Hepatitis': ['Dr. Susan Perez', 'Dr. Joseph Young'],
    'Tuberculosis': ['Dr. Barbara Taylor', 'Dr. Kenneth King'],
    'Common Cold': ['Dr. Donna Harris', 'Dr. Jason Lewis'],
    'Pneumonia': ['Dr. Lisa Hernandez', 'Dr. Kevin Perez'],
    'Dimorphic Hemorrhoids (Piles)': ['Dr. Kimberly Baker', 'Dr. Karen Anderson'],
    'Heart Attack': ['Dr. Jessica Walker', 'Dr. Jennifer Scott'],
    'Varicose Veins': ['Dr. Emily Wilson', 'Dr. William Adams'],
    'Hypothyroidism': ['Dr. Sarah Lewis', 'Dr. Linda Carter'],
    'Hyperthyroidism': ['Dr. Maria Clark', 'Dr. Christopher Lee'],
    'Hypoglycemia': ['Dr. Patricia Thomas', 'Dr. Melissa Martinez'],
    'Osteoarthritis': ['Dr. Laura Turner', 'Dr. Daniel Wright'],
    'Arthritis': ['Dr. Susan Young', 'Dr. Robert Taylor'],
    '(Vertigo) Paroxysmal Positional Vertigo': ['Dr. Jennifer King', 'Dr. Brian Harris'],
    'Acne': ['Dr. Michelle Davis', 'Dr. Joseph Wilson'],
    'Urinary Tract Infection': ['Dr. Karen Martinez', 'Dr. Charles Baker'],
    'Psoriasis': ['Dr. Kimberly Anderson', 'Dr. William Moore'],
    'Impetigo': ['Dr. Lisa White', 'Dr. Nancy Adams']
  };


  const specialityToDoctorMap = {
    'Cardiology': ['Dr. John Doe', 'Dr. Jane Smith'],
    'Dermatology': ['Dr. Michael Johnson', 'Dr. Sarah Brown'],
    'Orthopedics': ['Dr. Emily White', 'Dr. Robert Lee', 'Dr. Mary Adams'],
    'Pediatrics': ['Dr. David Wilson', 'Dr. Laura Clark', 'Dr. Thomas Brown'],
    'Neurology': ['Dr. Sarah Taylor', 'Dr. James Smith'],
    'Gynecology': ['Dr. Olivia Martinez', 'Dr. Daniel Harris'],
    'Ophthalmology': ['Dr. Maria Rodriguez', 'Dr. Kevin Anderson'],
    'Oncology': ['Dr. Patricia Lewis', 'Dr. Christopher Walker'],
    'Psychiatry': ['Dr. Jessica White', 'Dr. Brian Turner', 'Dr. Susan Hill'],
    'Urology': ['Dr. Matthew Martin', 'Dr. Laura Moore', 'Dr. Richard Clark'],
  };


  const getAvailableDoctors = (disease, symptoms) => {

    // Check if the selected disease has a mapping, and return the corresponding doctors
    if (diseaseToDoctorMap[disease]) {
      return diseaseToDoctorMap[disease];
    }

    if(specialityToDoctorMap[symptoms]){

      return specialityToDoctorMap[symptoms];
    }

    // If no doctors are available for the selected disease, return an empty array
    return [];
  };
  console.log(Object.keys(diseaseToDoctorMap));
  const dummyMedicineOptions = Array.from(new Set(Object.keys(diseaseToDoctorMap)));
  const dummySpecialityOptions = Array.from(new Set(Object.keys(specialityToDoctorMap)));

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
              <option value="">Select a disease</option>
              {dummyMedicineOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              onChange={handleSymptomsChange}
              value={userSymptoms}
              style={styles.input}
              id="symptomsFilter"
            >
              <option value="">Select a speciality</option>
              {dummySpecialityOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            

            <button
              onClick={handleCheckAvailability}
              style={styles.filterButton}
            >
              <Link
                to="/ai"
                className="anchor"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                AI Predictor
              </Link>
            </button>
          </div>

          <div style={styles.needHelp}>
            
            <button
              onClick={handleCheckAvailability}
              style={styles.needHelpButton}
            >
              Get Suggested Doctors
            </button>
            

            {/* Conditional rendering of Available Doctors section */}
            {suggestedDoctor && (
              <div style={styles.doctorsList}>
                <h2>Available Doctors:</h2>
                <ul>
                  {availableDoctors.map((doctor, index) => (
                    <li key={index}>{doctor}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
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
