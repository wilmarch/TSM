import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const barangKeluarData = [
  { id: 1, transactionId: "2001", project: "Project A", dateOut: "30/07/2024", type: "RLSD290A5LIC/Component/YAGEO", stockOut: 200, totalStock: 19247 },
  { id: 2, transactionId: "2002", project: "Project B", dateOut: "31/07/2024", type: "MUP-C7802I-1/Component/Samsung", stockOut: 300, totalStock: 14700},
  // Additional dummy data can be added here
];

const BarangKeluar = () => {
  const navigate = useNavigate();
  const [itemsToShow, setItemsToShow] = useState(10);
  const [filter, setFilter] = useState("");

  const handleAddEntry = () => {
    navigate('/entri-barang-keluar');
  };

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredData = barangKeluarData.filter(item =>
    item.transactionId.toLowerCase().includes(filter.toLowerCase()) ||
    item.type.toLowerCase().includes(filter.toLowerCase()) ||
    item.project.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Barang Keluar</h1>
        <button onClick={handleAddEntry} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          + Entri Data
        </button>
      </div>
      <div className="flex justify-between mb-4">
        <div>
          <label htmlFor="itemsToShow">Show</label>
          <select 
            id="itemsToShow"
            value={itemsToShow} 
            onChange={(e) => setItemsToShow(e.target.value)} 
            className="mx-2 p-1 border rounded">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          items
        </div>
        <input 
          type="text" 
          placeholder="Search..." 
          value={filter} 
          onChange={handleSearchChange} 
          className="px-3 py-2 border rounded shadow-sm focus:outline-none"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-red-500 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">No</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Transaction ID</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Project</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Date Out</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Type</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Stock Out</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Total Stock</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filteredData.map((item, index) => (
              <tr key={item.id} className={`hover:bg-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <td className="text-left py-3 px-4">{index + 1}</td>
                <td className="text-left py-3 px-4">{item.transactionId}</td>
                <td className="text-left py-3 px-4">{item.project}</td>
                <td className="text-left py-3 px-4">{item.dateOut}</td>
                <td className="text-left py-3 px-4">{item.type}</td>
                <td className="text-left py-3 px-4">{item.stockOut}</td>
                <td className="text-left py-3 px-4">{item.totalStock}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BarangKeluar;
