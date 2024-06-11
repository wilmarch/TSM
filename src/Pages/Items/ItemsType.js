import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaTrashAlt } from 'react-icons/fa';

const ItemsType = () => {
  const [types, setTypes] = useState([]);
  const [filteredTypes, setFilteredTypes] = useState([]);
  const [search, setSearch] = useState('');
  const [showEntries, setShowEntries] = useState('10');
  const navigate = useNavigate(); 

  useEffect(() => {
    const initialTypes = [
      { id: 1, type: 'Capacitor', currentStock: 8294 },
      { id: 2, type: 'Diode', currentStock: 30560 },
      // More types can be added here
    ];
    setTypes(initialTypes);
    setFilteredTypes(initialTypes);
  }, []);

  useEffect(() => {
    const result = types.filter(type => 
      type.type.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTypes(result);
  }, [search, types]);

  const handleAddEntryClick = () => {
    navigate('/entri-items-type'); 
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Items Type</h1>
        <div>
          <button onClick={handleAddEntryClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            + Entri Data
          </button>
        </div>
      </div>
      <div className="mb-4 flex justify-between items-center">
        <div>
          <label>Show</label>
          <select value={showEntries} onChange={e => setShowEntries(e.target.value)} className="border border-gray-300 rounded ml-2 py-1 px-2">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-gray-300 rounded py-1 px-2"
        />
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
            {filteredTypes.slice(0, parseInt(showEntries)).map((type, index) => (
              <tr key={type.id} className="hover:bg-gray-100">
                <td className="text-left py-3 px-4">{index + 1}</td>
                <td className="text-left py-3 px-4">{type.type}</td>
                <td className="text-left py-3 px-4">{type.currentStock}</td>
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

export default ItemsType;
