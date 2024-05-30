import React, { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa'; 
const ManajemenUser = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    roles: '',
    dateAccount: '',
    position: '',
    profilePhoto: null,
    noted: ''
  });

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    setUser({ ...user, [name]: type === 'file' ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", user);
    // Logic to handle form submission, such as sending data to backend
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">User Management Settings</h1>
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => console.log("Search")} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center mr-2">
          <FaSearch className="mr-2" /> Search
        </button>
        <button onClick={() => console.log("Filter")} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center">
          <FaFilter className="mr-2" /> Filter
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField label="Name" name="name" value={user.name} onChange={handleChange} />
        <InputField label="Email" type="email" name="email" value={user.email} onChange={handleChange} />
        <InputField label="Username" name="username" value={user.username} onChange={handleChange} />
        <InputField label="Password" type="password" name="password" value={user.password} onChange={handleChange} />
        <InputField label="Confirm Password" type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} />
        <InputField label="Roles" name="roles" value={user.roles} onChange={handleChange} />
        <InputField label="Date Account" type="date" name="dateAccount" value={user.dateAccount} onChange={handleChange} />
        <InputField label="Position" name="position" value={user.position} onChange={handleChange} />
        <div>
          <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
          <input type="file" name="profilePhoto" onChange={handleChange} className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Noted</label>
          <textarea name="noted" value={user.noted} onChange={handleChange} rows="3" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div className="flex justify-end mt-6">
          <button type="submit" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

function InputField({ label, type = 'text', name, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
    </div>
  );
}

export default ManajemenUser;
