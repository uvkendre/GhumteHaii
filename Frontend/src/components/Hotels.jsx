import React from 'react';

const Hotels = ({ isLoggedIn }) => {
  const handleHotelSearch = () => {
    if (isLoggedIn) {
      // Redirect logged-in users to the external URL for hotel bookings
      window.location.href = 'https://www.makemytrip.com/hotels/';
    } else {
      alert('Please sign up or log in to access hotel information! 🏨');
    }
  };

  return (
    <div className="relative w-full h-[600px]">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        autoPlay
        loop
        muted
      >
        <source src="/hotel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4">Hotels</h1>
        <p className="text-lg mb-8">Feeling tired from a long drive? 🏍️💨</p>
        <p className="text-lg mb-4">
          {isLoggedIn
            ? 'Take a break, recharge, and refresh!'
            : 'Sign up to access nearby hotels and make your stay comfortable! 🌟'}
        </p>
        <button
          onClick={handleHotelSearch}
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-500 mb-8"
        >
          Search Hotels
        </button>
      </div>
    </div>
  );
};

export default Hotels;
