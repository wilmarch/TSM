import React, { useState } from 'react';

const EntriBarangKeluar = () => {
  const [formData, setFormData] = useState({
    transactionId: '',
    dateOut: '',
    type: '',
    stockOut: '',
    totalStock: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted for Barang Keluar:", formData);
    // handle submit logic disini
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Entri Data Barang Keluar</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-6">
            <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700">ID Transaksi:</label>
            <input type="text" name="transactionId" id="transactionId" value={formData.transactionId} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-6">
            <label htmlFor="dateOut" className="block text-sm font-medium text-gray-700">Date Out:</label>
            <input type="date" name="dateOut" id="dateOut" value={formData.dateOut} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type:</label>
          <input type="text" name="type" id="type" value={formData.type} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" />
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-6">
            <label htmlFor="stockOut" className="block text-sm font-medium text-gray-700">Stock Out:</label>
            <input type="number" name="stockOut" id="stockOut" value={formData.stockOut} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-6">
            <label htmlFor="totalStock" className="block text-sm font-medium text-gray-700">Total Stock:</label>
            <input type="number" name="totalStock" id="totalStock" value={formData.totalStock} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none" />
          </div>
        </div>
        <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
};

export default EntriBarangKeluar;
