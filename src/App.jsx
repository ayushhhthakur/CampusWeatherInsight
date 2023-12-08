import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Weather from './Pages/Weather'
import Hydro from './Pages/Hydro'

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/hydrophonic" element={<Hydro />} />
            </Routes>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
  );
}

export default App;
