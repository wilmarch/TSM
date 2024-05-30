import React from 'react';
import { useNavigate } from 'react-router-dom';

const barangMasukData = [
  { id: 1, transactionId: "1001", dateIn: "28/07/2024", type: "RLSD290A5LIC/Component/YAGEO", stockIn: 1000, totalStock: 19447 },
  { id: 2, transactionId: "1002", dateIn: "29/07/2024", type: "MUP-C7802I-1/Component/Samsung", stockIn: 500, totalStock: 15000 },
  // Data dummy bisa tambah sendiri
];

const BarangMasuk = () => {
  const navigate = useNavigate();

  // Fungsi buat navigasi ke halaman Entri Data buat barang masuk
  const handleAddEntry = () => {
    navigate('/entri-barang-masuk');  
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Barang Masuk</h1>
        <div>
          <button onClick={handleAddEntry} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            + Entri Data
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-red-500 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">No</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Transaction ID</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Date In</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Type</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Stock In</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Total Stock</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {barangMasukData.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="text-left py-3 px-4">{index + 1}</td>
                <td className="text-left py-3 px-4">{item.transactionId}</td>
                <td className="text-left py-3 px-4">{item.dateIn}</td>
                <td className="text-left py-3 px-4">{item.type}</td>
                <td className="text-left py-3 px-4">{item.stockIn}</td>
                <td className="text-left py-3 px-4">{item.totalStock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BarangMasuk;