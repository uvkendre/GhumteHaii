import React from 'react';

const ServiceShops = ({ isLoggedIn }) => {
  const handleServiceShopsClick = () => {
    if (isLoggedIn) {
      window.location.href = 'https://www.servicestores.com';
    } else {
      alert('Please sign up or log in to find service shops near you! 🛠️');
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
        <source src="/serviceStation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4">Need a Service?</h1>
        <p className="text-lg mb-8">Find service shops nearby!</p>
        <p className="text-lg mb-4">
          {isLoggedIn ? (
            'Get the service you need!'
          ) : (
            'Sign up to find service shops near you! 🛠️'
          )}
        </p>
        <button
          onClick={handleServiceShopsClick}
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-500"
        >
          Find Service Shops
        </button>
      </div>
    </div>
  );
};

export default ServiceShops;
