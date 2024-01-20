import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import '../css/Hydro.css';
import Loader from '../elements/Loading';
import Loader2 from '../elements/Loader';
// import SnowLoader from '../elements/SnowLoader';

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p className="error">An error occurred. Please try again.</p>;
    }

    return this.props.children;
  }
}

const Hydro = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
    
        const firebaseConfig = {
          apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
          authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
          projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
          storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.REACT_APP_FIREBASE_APP_ID,
        };
    
        // Ensure all required environment variables are available
        const missingEnvVariables = Object.keys(firebaseConfig).filter(
          key => !firebaseConfig[key]
        );
        
        if (missingEnvVariables.length > 0) {
          throw new Error(`Missing environment variables: ${missingEnvVariables.join(', ')}`);
        }
    
        const firebaseApp = initializeApp(firebaseConfig);
        const db = getDatabase(firebaseApp);
        const dataRef = ref(db, 'UsersData');
    
        onValue(dataRef, (snapshot) => {
          const firebaseData = snapshot.val();
          setData(firebaseData);
          setError(null);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    };


    fetchData();
  }, []);

  return (
    <ErrorBoundary>
      <div className='main_content'>
        <h2 style={{
          textAlign: 'center',
          paddingTop: '30px',
        }}>
          Hydroponic Data
        </h2>
        <div className="dashboard">
          {loading && (
            <>
              <p className='loader-container'><Loader2 /></p>
              {/* <p className='loader-container'><Loader /></p> */}
            </>
          )}
          {error && <p className="error">Error: {error}</p>}
          {Object.keys(data || {}).length > 0 && (
            <div className='hydro-data'>
              <div className='data-row'>
                {Object.entries(data).map(([key, value]) => (
                  <div key={key} className='data-column'>
                    <p>{key}: {value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Hydro;
