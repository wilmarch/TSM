import React, { useState } from 'react';
import { FaFilePdf, FaFileExcel, FaFilter } from 'react-icons/fa';

const LaporanBarangKeluar = () => {
  const [data] = useState([
    { tanggal: '2024-01-01', project: 'Project Alpha', type: 'Component', partNumber: 'RLSGD2510VIC', manufacture: 'YAGEO', barangKeluar: 200 },
    { tanggal: '2024-01-02', project: 'Project Beta', type: 'Component', partNumber: 'MUP-C7802I-1', manufacture: 'Samsung', barangKeluar: 150 },
    { tanggal: '2024-01-03', project: 'Project Gamma', type: 'Component', partNumber: 'K5-1305A-03', manufacture: 'Panasonic', barangKeluar: 75 },
    // Tambahkan lebih banyak data dummy
  ]);

  const [itemsToShow, setItemsToShow] = useState('10');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const handleDateChange = (e) => {
    setDateRange({ ...dateRange, [e.target.name]: e.target.value });
  };

  // Logika filter berdasarkan rentang tanggal (jika diperlukan)
  const filteredData = data.filter(item => {
    if (!dateRange.start || !dateRange.end) return true;
    const itemDate = new Date(item.tanggal);
    return itemDate >= new Date(dateRange.start) && itemDate <= new Date(dateRange.end);
  }).slice(0, parseInt(itemsToShow));

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-slate-50 min-h-screen animate-fade-in-down">
      
      {/* Kartu untuk Filter */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3 mb-4">
          <FaFilter className="text-red-600" />
          Filter Laporan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
          <div>
            <label htmlFor="itemsToShow" className="block text-sm font-medium text-gray-700 mb-1">Show Entries</label>
            <select 
              id="itemsToShow"
              value={itemsToShow} 
              onChange={(e) => setItemsToShow(e.target.value)} 
              className="w-full p-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
          <div>
            <label htmlFor="start" className="block text-sm font-medium text-gray-700 mb-1">Tanggal Mulai</label>
            <input 
              type="date" 
              name="start" 
              id="start"
              value={dateRange.start} 
              onChange={handleDateChange} 
              className="w-full p-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500" 
            />
          </div>
          <div>
            <label htmlFor="end" className="block text-sm font-medium text-gray-700 mb-1">Tanggal Akhir</label>
            <input 
              type="date" 
              name="end" 
              id="end"
              value={dateRange.end} 
              onChange={handleDateChange} 
              className="w-full p-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500" 
            />
          </div>
          {/* Anda bisa menambahkan tombol "Apply Filter" di sini jika mau */}
        </div>
      </div>

      {/* Kartu untuk Tabel Laporan */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Laporan Barang Keluar</h1>
          <div className="flex items-center space-x-2">
            <button onClick={() => {}} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
              <FaFilePdf size="0.9em" /> PDF
            </button>
            <button onClick={() => {}} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
              <FaFileExcel size="0.9em" /> Excel
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-center py-3 px-4 text-sm font-bold text-slate-600">No</th>
                <th className="text-left py-3 px-4 text-sm font-bold text-slate-600">Tanggal</th>
                <th className="text-left py-3 px-4 text-sm font-bold text-slate-600">Project</th>
                <th className="text-left py-3 px-4 text-sm font-bold text-slate-600">Type</th>
                <th className="text-left py-3 px-4 text-sm font-bold text-slate-600">Part Number</th>
                <th className="text-left py-3 px-4 text-sm font-bold text-slate-600">Manufacture</th>
                <th className="text-right py-3 px-4 text-sm font-bold text-slate-600">Barang Keluar</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {filteredData.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 odd:bg-white even:bg-slate-50 hover:bg-red-50">
                  <td className="py-4 px-4 text-center">{index + 1}</td>
                  <td className="py-4 px-4">{item.tanggal}</td>
                  <td className="py-4 px-4">{item.project}</td>
                  <td className="py-4 px-4">{item.type}</td>
                  <td className="py-4 px-4 font-medium text-gray-800">{item.partNumber}</td>
                  <td className="py-4 px-4">{item.manufacture}</td>
                  <td className="py-4 px-4 text-right font-medium text-red-600">{item.barangKeluar.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <p>Showing 1 to {filteredData.length} of {data.length} entries</p>
          {/* Komponen paginasi bisa ditambahkan di sini */}
        </div>
      </div>
    </div>
  );
};

export default LaporanBarangKeluar;