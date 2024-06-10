import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EntriBarangKeluar = () => {
  const [formData, setFormData] = useState({
    transactionId: '',
    dateOut: '',
    type: '',
    stockOut: '',
    totalStock: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted for Barang Keluar:", formData);
    // Handle your form submission logic here, like sending data to your server
    alert('Data barang keluar berhasil disubmit!');
    navigate('/barang-keluar'); // Redirect back to Barang Keluar page after form submission
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Entri Data Barang Keluar</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* form fields */}
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-6">
            <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700">ID Transaksi:</label>
            <input type="text" name="transactionId" id="transactionId" value={formData.transactionId} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" required />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-6">
            <label htmlFor="dateOut" className="block text-sm font-medium text-gray-700">Tanggal Keluar:</label>
            <input type="date" name="dateOut" id="dateOut" value={formData.dateOut} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" required />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Tipe:</label>
          <input type="text" name="type" id="type" value={formData.type} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" required />
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-6">
            <label htmlFor="stockOut" className="block text-sm font-medium text-gray-700">Stok Keluar:</label>
            <input type="number" name="stockOut" id="stockOut" value={formData.stockOut} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" required />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-6">
            <label htmlFor="totalStock" className="block text-sm font-medium text-gray-700">Total Stok:</label>
            <input type="number" name="totalStock" id="totalStock" value={formData.totalStock} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" required />
          </div>
        </div>
        <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
};

export default EntriBarangKeluar;
