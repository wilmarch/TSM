import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EntriItemsType = () => {
  const [formData, setFormData] = useState({
    type: 'Default Type', // You can set a default type here or fetch it from somewhere if needed
    currentStock: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'currentStock') { // Ensuring only 'currentStock' can be changed by the user
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New type data:", formData);
    alert('Type has been submitted successfully!');
    navigate('/items-type');
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Entri Items Type</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type:</label>
          <input
            type="text"
            name="type"
            id="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none"
            readOnly // This makes the input field read-only, so the user cannot change it
          />
        </div>
        <div className="mb-4">
          <label htmlFor="currentStock" className="block text-sm font-medium text-gray-700">Current Stock:</label>
          <input
            type="number"
            name="currentStock"
            id="currentStock"
            value={formData.currentStock}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none"
            required
          />
        </div>
        <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EntriItemsType;