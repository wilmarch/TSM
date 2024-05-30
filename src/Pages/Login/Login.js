import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    navigate('/dashboard'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-wrap w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("Login.png")' }}>
        </div>
        <div className="w-full md:w-1/2 bg-white p-4 md:p-8">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col items-center justify-center flex-grow">
              <img src="Logo TSM.png" alt="Logo" className="mb-4 w-20" />
              <h2 className="text-2xl font-bold mb-2">Login</h2>
              <p className="mb-8">Log into your account</p>
            </div>
            <form onSubmit={handleLogin} className="w-full">
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">Username:</label>
                <input type="text" id="username" name="username" className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="Enter your username"/>
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password:</label>
                <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" placeholder="Enter your password"/>
              </div>
              <button type="submit" className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
