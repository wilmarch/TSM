import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaPlus, FaTrashAlt } from 'react-icons/fa';

const ItemsData = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');
  const [itemsToShow, setItemsToShow] = useState(10);
  const navigate = useNavigate(); 

  useEffect(() => {
    setItems([
      { id: 1, partNumber: 'RLSGD2510VIC', category: 'Component', currentStock: 9487, manufacture: 'YAGEO' },
      { id: 2, partNumber: 'MUP-C7804I-1', category: 'Component', currentStock: 4189, manufacture: 'Samsung Electro-Mechanics' },
      // Add more items as needed
    ]);
  }, []);

  const handleAddEntry = () => {
    navigate('/entri-items-data');
  };

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredItems = items.filter(item => 
    item.partNumber.toLowerCase().includes(filter.toLowerCase()) || 
    item.manufacture.toLowerCase().includes(filter.toLowerCase())
  ).slice(0, itemsToShow);

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Items Data</h1>
        <button onClick={handleAddEntry} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center">
          <FaPlus className="mr-2" />Entri Data
        </button>
      </div>
      <div className="flex justify-between mb-4">
        <div>
          <label htmlFor="itemsToShow">Show</label>
          <select 
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
          placeholder="Search by part number or manufacture" 
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
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Part Number</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Category</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Current Stock</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Manufacture</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filteredItems.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="text-left py-3 px-4">{index + 1}</td>
                <td className="text-left py-3 px-4">{item.partNumber}</td>
                <td className="text-left py-3 px-4">{item.category}</td>
                <td className="text-left py-3 px-4">{item.currentStock}</td>
                <td className="text-left py-3 px-4">{item.manufacture}</td>
                <td className="text-left py-3 px-4">
                <button className="text-red-500 hover:text-red-800 px-4 py-2 rounded transition duration-150 ease-in-out" 
                title="Delete Item">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemsData;
