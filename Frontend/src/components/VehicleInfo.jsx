import React from 'react';

const VehicleInfo = ({ isLoggedIn }) => {
  const handleVehicleInfoClick = () => {
    if (isLoggedIn) {
      window.location.href = 'https://www.vehicleinfo.com';
    } else {
      alert('Please sign up or log in to access vehicle information! 🚗');
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
        <source src="/bikeinfo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4">Vehicle Information</h1>
        <p className="text-lg mb-8">Get the information you need!</p>
        <p className="text-lg mb-4">
          {isLoggedIn ? (
            'Drive safely with the right information!'
          ) : (
            'Sign up to access vehicle information! 🚗'
          )}
        </p>
        <button
          onClick={handleVehicleInfoClick}
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-500"
        >
          Access Vehicle Info
        </button>
      </div>
    </div>
  );
};

export default VehicleInfo;
