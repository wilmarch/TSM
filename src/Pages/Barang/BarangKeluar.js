import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaSearch } from 'react-icons/fa'; // Import ikon

// Data dummy bisa tambah sendiri
const barangKeluarData = [
  { id: 1, transactionId: "2001", project: "Project A", dateOut: "30/07/2024", type: "RLSD290A5LIC/Component/YAGEO", stockOut: 200, totalStock: 19247 },
  { id: 2, transactionId: "2002", project: "Project B", dateOut: "31/07/2024", type: "MUP-C7802I-1/Component/Samsung", stockOut: 300, totalStock: 14700 },
  { id: 3, transactionId: "2003", project: "Project C", dateOut: "01/08/2024", type: "TYPE-CF-3E-10/Component/YAGEO", stockOut: 50, totalStock: 120950 },
  // ...tambahkan lebih banyak data untuk melihat efeknya
];

const BarangKeluar = () => {
  const [filter, setFilter] = useState('');
  const [itemsToShow, setItemsToShow] = useState('10');
  const navigate = useNavigate();

  const handleAddEntry = () => {
    navigate('/entri-barang-keluar');
  };

  const handleSearchChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = barangKeluarData.filter(item =>
    item.transactionId.toLowerCase().includes(filter.toLowerCase()) ||
    item.project.toLowerCase().includes(filter.toLowerCase()) ||
    item.type.toLowerCase().includes(filter.toLowerCase())
  ).slice(0, parseInt(itemsToShow));

  return (
    // Kontainer utama halaman dengan background abu-abu
    <div className="p-4 sm:p-6 md:p-8 bg-slate-50 min-h-screen">
      {/* Kartu utama sebagai pembungkus konten */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        
        {/* Header: Judul dan Tombol */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Barang Keluar</h1>
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
              placeholder="Search by ID, Project, Type..."
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
                <th className="text-left py-3 px-4 text-sm font-bold text-slate-600">Project</th>
                <th className="text-left py-3 px-4 text-sm font-bold text-slate-600">Date Out</th>
                <th className="text-left py-3 px-4 text-sm font-bold text-slate-600">Type</th>
                <th className="text-right py-3 px-4 text-sm font-bold text-slate-600">Stock Out</th>
                <th className="text-right py-3 px-4 text-sm font-bold text-slate-600">Total Stock</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {filteredData.map((item, index) => (
                <tr key={item.id} className="border-b border-gray-200 odd:bg-white even:bg-slate-50 hover:bg-red-50">
                  <td className="py-4 px-4">{index + 1}</td>
                  <td className="py-4 px-4 font-medium text-gray-800">{item.transactionId}</td>
                  <td className="py-4 px-4">{item.project}</td>
                  <td className="py-4 px-4">{item.dateOut}</td>
                  <td className="py-4 px-4">{item.type}</td>
                  <td className="py-4 px-4 text-right font-medium text-red-600">{item.stockOut.toLocaleString()}</td>
                  <td className="py-4 px-4 text-right">{item.totalStock.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Footer Tabel: Info dan Paginasi */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <p>Showing 1 to {filteredData.length} of {barangKeluarData.length} entries</p>
          {/* Komponen paginasi bisa ditambahkan di sini jika diperlukan */}
        </div>

      </div>
    </div>
  );
};

export default BarangKeluar;