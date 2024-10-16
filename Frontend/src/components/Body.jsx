import React, { useState } from 'react';
import Signup from './Signup';

function Body() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: "url('/bg.jpeg')",
                    }}
                >
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-neutral-content text-center mt-24">
                        <div className="w-full text-orange-50">
                            <h1 className="mb-5 text-5xl font-bold">Hellooo!!
                                <span className="overflow-hidden text-6xl font-bold">
                                    <div className="slide-animation">
                                        <span className="text-yellow-500 hover:text-white">H</span>
                                        <span className="text-green-500 hover:text-white">O</span>
                                        <span className="text-blue-500 hover:text-white">D</span>
                                        <span className="text-orange-500 hover:text-white">O</span>
                                        <span className="text-purple-500 hover:text-white">P</span>
                                        <span className="text-red-500 hover:text-white">H</span>
                                        <span className="text-teal-500 hover:text-white">I</span>
                                        <span className="text-pink-500 hover:text-white">L</span>
                                        <span className="text-indigo-500 hover:text-white">E</span>
                                        <span className="text-cyan-500 hover:text-white">!</span>
                                    </div>
                                </span>
                            </h1>
                            <div className="max-w-4xl mx-auto p-6">
                                <h1 className="text-4xl font-bold mb-4">Welcome to Ghumte Haii!</h1>
                                <p className="mb-4">
                                    At Ghumte Haii, we invite you to embark on a journey of exploration and
                                    discovery. Our platform is designed to help you uncover the hidden
                                    treasures of the world and connect with fellow travelers who share your
                                    passion for adventure.
                                </p>
                                <p className="mb-4">
                                    Whether you're looking for inspiration for your next trip or seeking
                                    insights into local culture and attractions, Ghumte Haii is here to
                                    guide you every step of the way. Let's explore together!
                                </p>
                            </div>
                            <button
                                className="btn btn-primary hover:scale-105 transition-transform duration-300 rounded-full bg-gradient-to-t from-sky-500 to-blue-300 hover:bg-blue-500 hover:text-orange-500 text-black font-semibold border-none"
                                onClick={openModal}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
                {/* Render Signup modal based on state */}
                {isModalOpen && <Signup closeModal={closeModal} />} {/* Pass the close function */}
            </div>
        </>
    );
}

export default Body;
