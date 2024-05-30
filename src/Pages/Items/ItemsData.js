import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaEdit, FaTrashAlt, FaPlus, FaEye } from 'react-icons/fa'; // Added FaEye for view details icon

const ItemsData = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    setItems([
      { id: 1, partNumber: 'RLSGD2510VIC', category: 'Component', currentStock: 9487, manufacture: 'YAGEO' },
      { id: 2, partNumber: 'MUP-C7804I-1', category: 'Component', currentStock: 4189, manufacture: 'Samsung Electro-Mechanics' },
    ]);
  }, []);

  const handleAddEntry = () => {
    navigate('/entri-items-data');
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Items Data</h1>
        <button onClick={handleAddEntry} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center">
          <FaPlus className="mr-2" />Entri Data
        </button>
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
            {items.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="text-left py-3 px-4">{index + 1}</td>
                <td className="text-left py-3 px-4">{item.partNumber}</td>
                <td className="text-left py-3 px-4">{item.category}</td>
                <td className="text-left py-3 px-4">{item.currentStock}</td>
                <td className="text-left py-3 px-4">{item.manufacture}</td>
                <td className="text-left py-3 px-4">
                  
                <button className="text-green-500 hover:text-green-800 mr-2" title="View Details">
                    <FaEye />
                  </button>
                  <button className="text-blue-500 hover:text-blue-800 mr-2" title="Edit Item">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-800 mr-2" title="Delete Item">
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
