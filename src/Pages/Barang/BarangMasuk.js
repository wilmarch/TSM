import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaSearch } from 'react-icons/fa'; // Import ikon yang dibutuhkan

// Data dummy bisa tambah sendiri
const barangMasukData = [
  { id: 1, transactionId: "1001", dateIn: "28/07/2024", type: "RLSD290A5LIC/Component/YAGEO", stockIn: 1000, totalStock: 19447 },
  { id: 2, transactionId: "1002", dateIn: "29/07/2024", type: "MUP-C7802I-1/Component/Samsung", stockIn: 500, totalStock: 15000 },
  { id: 3, transactionId: "1003", dateIn: "30/07/2024", type: "TYPE-CF-3E-10/Component/YAGEO", stockIn: 2500, totalStock: 121000 },
  // ...tambahkan lebih banyak data untuk melihat efeknya
];

const BarangMasuk = () => {
  const [filter, setFilter] = useState('');
  const [itemsToShow, setItemsToShow] = useState('10');
  const navigate = useNavigate();

  const handleAddEntry = () => {
    navigate('/entri-barang-masuk');
  };

  const handleSearchChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = barangMasukData.filter(item =>
    item.transactionId.toLowerCase().includes(filter.toLowerCase()) ||
    item.type.toLowerCase().includes(filter.toLowerCase())
  ).slice(0, parseInt(itemsToShow));

  return (
    // Kontainer utama halaman dengan background abu-abu
    <div className="p-4 sm:p-6 md:p-8 bg-slate-50 min-h-screen">
      {/* Kartu utama sebagai pembungkus konten */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        
        {/* Header: Judul dan Tombol */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Barang Masuk</h1>
          <button onClick={handleAddEntry} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
            <FaPlus size="0.8em" />
            Entri Data
          </button>
        </div>

        {/* Kontrol: Show Items dan Search Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
          <div className="flex items-center text-sm text-gray-600">
            <span>Show</span>
            <select
              value={itemsToShow}
              onChange={(e) => setItemsToShow(e.target.value)}
              className="mx-2 p-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            <span>entries</span>
          </div>
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={filter}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Tabel Data */}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left py-3 px-4 text-sm font-bold text-slate-600">No</th>
                <th className="text-left py-3 px-4 text-sm font-bold text-slate-600">Transaction ID</th>
                <th className="text-left py-3 px-4 text-sm font-bold text-slate-600">Date In</th>
                <th className="text-left py-3 px-4 text-sm font-bold text-slate-600">Type</th>
                <th className="text-right py-3 px-4 text-sm font-bold text-slate-600">Stock In</th>
                <th className="text-right py-3 px-4 text-sm font-bold text-slate-600">Total Stock</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {filteredData.map((item, index) => (
                <tr key={item.id} className="border-b border-gray-200 odd:bg-white even:bg-slate-50 hover:bg-red-50">
                  <td className="py-4 px-4">{index + 1}</td>
                  <td className="py-4 px-4 font-medium text-gray-800">{item.transactionId}</td>
                  <td className="py-4 px-4">{item.dateIn}</td>
                  <td className="py-4 px-4">{item.type}</td>
                  <td className="py-4 px-4 text-right font-medium text-green-600">{item.stockIn.toLocaleString()}</td>
                  <td className="py-4 px-4 text-right">{item.totalStock.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Footer Tabel: Info dan Paginasi */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <p>Showing 1 to {filteredData.length} of {barangMasukData.length} entries</p>
          {/* Di sini Anda bisa menambahkan komponen paginasi jika diperlukan */}
        </div>

      </div>
    </div>
  );
};

export default BarangMasuk;