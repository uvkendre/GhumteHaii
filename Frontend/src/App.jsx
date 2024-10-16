// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './home/Home';
import About from './about/About';
import Hotels from './components/Hotels';
import Hospitals from './components/Hospitals';
import FuelStations from './components/FuelStations';
import ServiceShops from './components/ServiceShops';
import Diy from './components/DIY.jsx';
import Restaurants from './components/Restaurants';
import VehicleInfo from './components/VehicleInfo';
import Weather from './components/WeatherInfo';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token'); // Assuming you use a token for authentication

    // Check if storedUser is not null and is a valid JSON string
    if (storedUser && typeof storedUser === 'string') {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsLoggedIn(!!token); // Set logged in status based on the presence of token
      } catch (error) {
        console.error("Failed to parse user data:", error);
        setUser(null);
        setIsLoggedIn(false);
      }
    } else {
      // Reset user state if no valid user is found
      setUser(null);
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user'); // Clear user data
    localStorage.removeItem('token'); // Clear token
  };

  return (
    <Router>
      <Navbar 
        user={user} 
        setUser={setUser} 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn} 
        handleLogout={handleLogout} 
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotels" element={<Hotels isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/hospitals" element={<Hospitals isLoggedIn={isLoggedIn} />} />
        <Route path="/fuel-stations" element={<FuelStations isLoggedIn={isLoggedIn} />} />
        <Route path="/service-shops" element={<ServiceShops isLoggedIn={isLoggedIn} />} />
        <Route path="/diy" element={<Diy isLoggedIn={isLoggedIn} />} />
        <Route path="/restaurants" element={<Restaurants isLoggedIn={isLoggedIn} />} />
        <Route path="/vehicle-info" element={<VehicleInfo isLoggedIn={isLoggedIn} />} />
        <Route path="/weather" element={<Weather isLoggedIn={isLoggedIn} />} />
        <Route path="/signup" element={<Signup setUser={setUser} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<Login setUser={setUser} setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
