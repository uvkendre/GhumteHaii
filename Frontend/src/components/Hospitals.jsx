import React from 'react';

const Hospitals = ({ isLoggedIn }) => {
  const handleHospitalsClick = () => {
    if (isLoggedIn) {
      window.location.href = 'https://www.hospitals.com';
    } else {
      alert('Please sign up or log in to find nearby hospitals! 🏥');
    }
  };

  return (
    <div className="relative w-full h-[600px]">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/hospital.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4">Need Medical Assistance?</h1>
        <p className="text-lg mb-8">Find nearby hospitals quickly!</p>
        <p className="text-lg mb-4">
          {isLoggedIn ? (
            'Your health is our priority!'
          ) : (
            'Sign up to find hospitals near you! 🏥'
          )}
        </p>
        <button
          onClick={handleHospitalsClick}
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-500"
        >
          Find Hospitals
        </button>
      </div>
    </div>
  );
};

export default Hospitals;
