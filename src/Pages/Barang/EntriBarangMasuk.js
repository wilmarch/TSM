import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EntriBarangMasuk = () => {
  const [formData, setFormData] = useState({
    transactionId: '',
    dateIn: '',
    type: '',
    stockIn: '',
    totalStock: ''
  });

  const navigate = useNavigate(); // Hook untuk navigasi

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Simulasi pengiriman data ke server
    alert('Data barang masuk berhasil disubmit!');
    navigate('/barang-masuk'); // Navigasi kembali ke halaman Barang Masuk
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Entri Data Barang Masuk</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700">ID Transaksi:</label>
          <input type="text" name="transactionId" id="transactionId" value={formData.transactionId} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" required />
        </div>
        <div className="mb-4">
          <label htmlFor="dateIn" className="block text-sm font-medium text-gray-700">Tanggal Masuk:</label>
          <input type="date" name="dateIn" id="dateIn" value={formData.dateIn} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" required />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Tipe:</label>
          <input type="text" name="type" id="type" value={formData.type} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" required />
        </div>
        <div className="mb-4">
          <label htmlFor="stockIn" className="block text-sm font-medium text-gray-700">Stok Masuk:</label>
          <input type="number" name="stockIn" id="stockIn" value={formData.stockIn} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" required />
        </div>
        <div className="mb-4">
          <label htmlFor="totalStock" className="block text-sm font-medium text-gray-700">Total Stok:</label>
          <input type="number" name="totalStock" id="totalStock" value={formData.totalStock} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" required />
        </div>
        <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
};

export default EntriBarangMasuk;
