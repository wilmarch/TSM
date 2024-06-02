import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ManajemenUser() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", user);
    // Logic to handle form submission, such as sending data to backend
    navigate('/dashboard'); // Navigate to dashboard after form submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-semibold text-gray-900">User Management Settings</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField label="Name" name="name" value={user.name} onChange={handleChange} />
          <InputField label="Email" type="email" name="email" value={user.email} onChange={handleChange} />
          <InputField label="Password" type="password" name="password" value={user.password} onChange={handleChange} />
          <button type="submit" className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

function InputField({ label, type = 'text', name, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
    </div>
  );
}

export default ManajemenUser;
