import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Weather from './Pages/Weather'
import Hydro from './Pages/Hydro'
import Bar from './components/Bar';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <Bar/>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/hydro" element={<Hydro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
  );
}

export default App;
