import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSave, FaTimes } from 'react-icons/fa'; // Import ikon

const EntriItemsType = () => {
  const [formData, setFormData] = useState({
    type: 'Component', // Contoh tipe yang diisi otomatis
    currentStock: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New type data:", formData);
    // Logika untuk menyimpan data ke backend
    navigate('/items-type');
  };

  const handleCancel = () => {
    navigate('/items-type');
  };

  return (
    <div className="bg-slate-50 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md transition-transform duration-300 animate-fade-in-down">
        
        <div className="border-b pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Entri Tipe Barang</h2>
          <p className="text-sm text-gray-500">Tambahkan tipe barang baru ke dalam sistem.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Tipe</label>
            <input
              type="text"
              name="type"
              id="type"
              value={formData.type}
              className="w-full px-4 py-2 bg-gray-100 text-gray-500 border border-gray-200 rounded-lg cursor-not-allowed"
              readOnly
            />
          </div>
          
          <div>
            <label htmlFor="currentStock" className="block text-sm font-medium text-gray-700 mb-1">Initial Stock</label>
            <input
              type="number"
              name="currentStock"
              id="currentStock"
              value={formData.currentStock}
              onChange={handleChange}
              placeholder="Jumlah stok awal untuk tipe ini"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow duration-200"
              required
            />
          </div>

          <div className="flex justify-end gap-4 pt-4 border-t">
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

export default EntriItemsType;