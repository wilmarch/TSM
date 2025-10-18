import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSave, FaTimes } from 'react-icons/fa'; // Import ikon

const EntriBarangKeluar = () => {
  const [formData, setFormData] = useState({
    transactionId: 'AUTO-GENERATE', // ID Transaksi akan digenerate otomatis
    dateOut: new Date().toISOString().substring(0, 10), // Default ke tanggal hari ini
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
    // Logika untuk menyimpan data ke backend akan ada di sini
    navigate('/barang-keluar'); // Navigasi kembali setelah submit
  };

  const handleCancel = () => {
    navigate('/barang-keluar'); // Kembali ke halaman sebelumnya
  };

  return (
    // Kontainer utama halaman dengan background
    <div className="bg-slate-50 min-h-screen p-4 sm:p-6 md:p-8">
      {/* Kartu formulir dengan animasi masuk */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md transition-transform duration-300 animate-fade-in-down">
        
        {/* Header Formulir */}
        <div className="border-b pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Entri Data Barang Keluar</h2>
          <p className="text-sm text-gray-500">Isi detail barang yang keluar dari inventaris untuk proyek.</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Grid untuk tata letak 2 kolom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Field ID Transaksi */}
            <div>
              <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700 mb-1">ID Transaksi</label>
              <input
                type="text"
                name="transactionId"
                id="transactionId"
                value={formData.transactionId}
                className="w-full px-4 py-2 bg-gray-100 text-gray-500 border border-gray-200 rounded-lg cursor-not-allowed"
                disabled
              />
            </div>

            {/* Field Tanggal Keluar */}
            <div>
              <label htmlFor="dateOut" className="block text-sm font-medium text-gray-700 mb-1">Tanggal Keluar</label>
              <input
                type="date"
                name="dateOut"
                id="dateOut"
                value={formData.dateOut}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow duration-200"
                required
              />
            </div>

            {/* Field Proyek */}
            <div className="md:col-span-2">
              <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">Proyek</label>
              <input
                type="text"
                name="project"
                id="project"
                value={formData.project}
                onChange={handleChange}
                placeholder="e.g., Project A"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow duration-200"
                required
              />
            </div>
            
            {/* Field Tipe Barang */}
            <div className="md:col-span-2">
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Tipe Barang</label>
              <select
                name="type"
                id="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow duration-200"
                required
              >
                <option value="" disabled>Pilih Tipe Barang</option>
                <option value="RLSD290A5LIC/Component/YAGEO">RLSD290A5LIC/Component/YAGEO</option>
                <option value="MUP-C7802I-1/Component/Samsung">MUP-C7802I-1/Component/Samsung</option>
                <option value="TYPE-CF-3E-10/Component/YAGEO">TYPE-CF-3E-10/Component/YAGEO</option>
              </select>
            </div>
            
            {/* Field Stok Keluar */}
            <div>
              <label htmlFor="stockOut" className="block text-sm font-medium text-gray-700 mb-1">Stok Keluar</label>
              <input
                type="number"
                name="stockOut"
                id="stockOut"
                value={formData.stockOut}
                onChange={handleChange}
                placeholder="e.g., 50"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow duration-200"
                required
              />
            </div>

          </div>

          {/* Tombol Aksi */}
          <div className="flex justify-end gap-4 mt-8 pt-4 border-t">
            <button 
              type="button" 
              onClick={handleCancel}
              className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
              <FaTimes size="0.8em" />
              Batal
            </button>
            <button 
              type="submit" 
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 shadow-sm hover:shadow-md">
              <FaSave size="0.8em" />
              Simpan Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EntriBarangKeluar;