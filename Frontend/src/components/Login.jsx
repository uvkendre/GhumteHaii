import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const dialogRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4001/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsLoggedIn(true);
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        setMessage('Login successful!');
        dialogRef.current.close();
        navigate('/');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Login failed. Please try again.');
    }
  };

  return (
    <dialog ref={dialogRef} id="login_modal" className="modal bg-black/70">
      <form
        method="dialog"
        className="modal-box bg-cover bg-center text-black"
        style={{
          backgroundImage: 'url("https://raw.githubusercontent.com/uvkendre/GhumteHaii/main/Frontend/public/bg-modal.jpg")', // Updated path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <h2 className="font-bold text-2xl text-black">LOGIN</h2>
        <div className="py-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs my-2 bg-white border-none"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs my-2 bg-white border-none"
            value={formData.password}
            onChange={handleInputChange}
          />
          {message && <p className="text-red-500">{message}</p>}
        </div>
        <div className="modal-action">
          <button type="submit" className="btn bg-green-400 text-black border-none hover:bg-green-500">Login</button>
          <button type="button" className="btn bg-red-400 text-black border-none hover:bg-red-500" onClick={() => dialogRef.current.close()}>Close</button>
        </div>
      </form>
    </dialog>
  );
};

export default Login;
