import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';

const ItemsType = () => {
  const [types, setTypes] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    setTypes([
      { id: 1, type: 'Capacitor', currentStock: 8294 },
      { id: 2, type: 'Diode', currentStock: 30560 },
    ]);
  }, []);

  const handleAddEntryClick = () => {
    navigate('/entri-items-type'); 
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Items Type</h1>
        <button onClick={handleAddEntryClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          + Entri Data
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-red-500 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">No</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Type</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Current Stock</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {types.map((type, index) => (
              <tr key={type.id} className="hover:bg-gray-100">
                <td className="text-left py-3 px-4">{index + 1}</td>
                <td className="text-left py-3 px-4">{type.type}</td>
                <td className="text-left py-3 px-4">{type.currentStock}</td>
                <td className="text-left py-3 px-4">
                  <button className="text-green-500 hover:text-green-800 mr-2" title="View Details">
                    <FaEye />
                  </button>
                  <button className="text-blue-500 hover:text-blue-800 mr-2" title="Edit Item">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-800" title="Delete Item">
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

export default ItemsType;
