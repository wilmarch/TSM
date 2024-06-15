import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaPlus, FaTrashAlt, FaBars, FaEdit } from 'react-icons/fa';  // Updated icon imports

const ItemsType = () => {
  const [types, setTypes] = useState([]);
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
  }, []);

  const filteredTypes = types.filter(type => 
    type.type.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddEntryClick = () => {
    navigate('/entri-items-type'); 
  };

  const handleDelete = (typeId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      // Here you can add logic to actually delete the item from the backend or state
      console.log("Item deleted:", typeId);
      // Optionally update the state to reflect the deletion
      setTypes(types.filter(type => type.id !== typeId));
    }
  };
  

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Items Type</h1>
        <button onClick={handleAddEntryClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center">
        <FaPlus className="mr-2" />Entri Data
        </button>
      </div>
      <div className="flex justify-between mb-4">
        <div>
          <label>Show</label>
          <select value={showEntries} onChange={e => setShowEntries(e.target.value)} className="mx-2 p-1 border rounded">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          items
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-3 py-2 border rounded shadow-sm focus:outline-none"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-red-500 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">No</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Type</th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Current Stock</th>
              <th className="text-left py-3 px-16 uppercase font-semibold text-sm">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filteredTypes.slice(0, parseInt(showEntries)).map((type, index) => (
              <tr key={type.id} className="hover:bg-gray-100">
                <td className="text-left py-3 px-4">{index + 1}</td>
                <td className="text-left py-3 px-4">{type.type}</td>
                <td className="text-left py-3 px-4">{type.currentStock}</td>
                <td className="text-left py-3 px-4">
                  <button className="text-black-500 hover:text-red-500 px-4 py-2 rounded transition duration-150 ease-in-out" title="View Details">
                    <FaBars />
                  </button>
                  <button className="text-black-500 hover:text-red-500 px-4 py-2 rounded transition duration-150 ease-in-out" title="Edit Item">
                    <FaEdit />
                  </button>
                  <button className="text-black-500 hover:text-red-500 px-4 py-2 rounded transition duration-150 ease-in-out" title="Delete Item" onClick={() => handleDelete(type.id)}>
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
