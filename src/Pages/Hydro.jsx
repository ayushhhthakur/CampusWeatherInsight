import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import '../css/Hydro.css'; // Replace with your actual path
import Loader from '../elements/Loader'; // Replace with your actual path

const Hydro = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const firebaseConfig = {
        apiKey: "AIzaSyApmcGF1t-mS3gqwb_cy08wUl9hQqLcinE",
        authDomain: "hydrophonic-86c7e.firebaseapp.com",
        databaseURL: "https://hydrophonic-86c7e-default-rtdb.firebaseio.com",
        projectId: "hydrophonic-86c7e",
        storageBucket: "hydrophonic-86c7e.appspot.com",
        messagingSenderId: "226532801545",
        appId: "1:226532801545:web:6fcfe119e973c75c078cd8"
      };

      const firebaseApp = initializeApp(firebaseConfig);
      const db = getDatabase(firebaseApp);
      const dataRef = ref(db, 'UsersData');

      try {
        setLoading(true);
        onValue(dataRef, (snapshot) => {
          const firebaseData = snapshot.val();
          setData(firebaseData);
          setError(null); // Reset error state on successful data fetch
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.'); // Set error state on data fetch error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='main_content'>
      <h2 style={{
        textAlign: 'center',
        paddingTop: '30px',
      }}>
        Hydroponic Data
      </h2>
      <div className="dashboard">
        {loading && (
          <p className='loader-container'><Loader /></p>
        )}
        {error && <p className="error">Error: {error}</p>}
        {data && (
          <div className='hydro-data'>
            <div className='data-row'>
              <div className='data-column'>
                <p>Humidity: {data.Humidity}</p>
              </div>
              <div className='data-column'>
                <p>Nitrogen Value: {data['Nitrogen Value']}</p>
              </div>
              <div className='data-column'>
                <p>Nutrient Level: {data['Nutrient Level']}</p>
              </div>
              <div className='data-column'>
                <p>PH Value: {data['PH Value']}</p>
              </div>
              <div className='data-column'>
                <p>Phosphorous Value: {data['Phosphorous Value']}</p>
              </div>
              <div className='data-column'>
                <p>Potassium Value: {data['Potassium Value']}</p>
              </div>
              <div className='data-column'>
                <p>Temperature: {data.Temperature}</p>
              </div>
              <div className='data-column'>
                <p>Time: {data.Time}</p>
              </div>
              <div className='data-column'>
                <p>Timestamp: {data.Timestamp}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hydro;