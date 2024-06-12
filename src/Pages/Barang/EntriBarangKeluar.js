import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EntriBarangKeluar = () => {
  const [formData, setFormData] = useState({
    transactionId: 'AUTOGENERATE',  // ID Transaksi akan digenerate otomatis
    dateOut: '',
    project: '',
    type: '',
    stockOut: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted for Barang Keluar:", formData);
    alert('Data barang keluar berhasil disubmit!');
    navigate('/barang-keluar'); // Navigasi kembali ke halaman Barang Keluar
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Entri Data Barang Keluar</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-4">
          <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700">ID Transaksi:</label>
          <input type="text" name="transactionId" id="transactionId" value={formData.transactionId} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" disabled />
        </div>
        <div className="mb-4">
          <label htmlFor="dateOut" className="block text-sm font-medium text-gray-700">Tanggal Keluar:</label>
          <input type="date" name="dateOut" id="dateOut" value={formData.dateOut} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" required />
        </div>
        <div className="mb-4">
          <label htmlFor="project" className="block text-sm font-medium text-gray-700">Proyek:</label>
          <input type="text" name="project" id="project" value={formData.project} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" required />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Tipe:</label>
          <select name="type" id="type" value={formData.type} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" required>
            <option value="">Pilih Tipe</option>
            <option value="RLSD290A5LIC/Component/YAGEO">RLSD290A5LIC/Component/YAGEO</option>
            <option value="MUP-C7802I-1/Component/Samsung">MUP-C7802I-1/Component/Samsung</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="stockOut" className="block text-sm font-medium text-gray-700">Stok Keluar:</label>
          <input type="number" name="stockOut" id="stockOut" value={formData.stockOut} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" required />
        </div>
        <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
};

export default EntriBarangKeluar;
