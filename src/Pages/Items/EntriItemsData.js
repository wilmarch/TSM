import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EntriItemsData = () => {
  const [formData, setFormData] = useState({
    partNumber: '',
    manufacture: '',
    category: '',
    currentStock: ''
  });
  const navigate = useNavigate(); // inisialisasi useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New item data:", formData);
    // Logika untuk menyimpan data
    alert('Item has been submitted successfully!');
    navigate('/items-data'); // Menavigasi kembali ke halaman Items Data setelah submit
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Entri Items Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="partNumber" className="block text-sm font-medium text-gray-700">Part Number:</label>
          <input
            type="text"
            name="partNumber"
            id="partNumber"
            value={formData.partNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="manufacture" className="block text-sm font-medium text-gray-700">Manufacture:</label>
          <input
            type="text"
            name="manufacture"
            id="manufacture"
            value={formData.manufacture}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
          <input
            type="text"
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none"
            required
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

export default EntriItemsData;
