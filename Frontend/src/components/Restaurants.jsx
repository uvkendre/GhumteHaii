import React from 'react';

const Restaurants = ({ isLoggedIn }) => {
  const handleRestaurantsClick = () => {
    if (isLoggedIn) {
      window.location.href = 'https://www.restaurants.com';
    } else {
      alert('Please sign up or log in to find restaurants near you! 🍽️');
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
        <source src="/restaurant.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4">Hungry?</h1>
        <p className="text-lg mb-8">Find nearby restaurants quickly!</p>
        <p className="text-lg mb-4">
          {isLoggedIn ? (
            'Satisfy your cravings!'
          ) : (
            'Sign up to find restaurants near you! 🍽️'
          )}
        </p>
        <button
          onClick={handleRestaurantsClick}
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-500"
        >
          Find Restaurants
        </button>
      </div>
    </div>
  );
};

export default Restaurants;
