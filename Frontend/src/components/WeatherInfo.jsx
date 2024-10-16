import React from 'react';

const WeatherInfo = ({ isLoggedIn }) => {
  const handleWeatherInfoClick = () => {
    if (isLoggedIn) {
      window.location.href = 'https://www.weather.com';
    } else {
      alert('Please sign up or log in to access weather information! ☀️🌧️');
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
        <source src="/weather.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4">Weather Updates</h1>
        <p className="text-lg mb-8">Stay updated with the latest weather!</p>
        <p className="text-lg mb-4">
          {isLoggedIn ? (
            'Know before you go!'
          ) : (
            'Sign up to access weather information! ☀️🌧️'
          )}
        </p>
        <button
          onClick={handleWeatherInfoClick}
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-500"
        >
          Check Weather
        </button>
      </div>
    </div>
  );
};

export default WeatherInfo;
