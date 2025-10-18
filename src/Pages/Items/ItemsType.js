import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaTrashAlt, FaSearch, FaEdit, FaInfoCircle } from 'react-icons/fa';

// Komponen Modal untuk konfirmasi (sama seperti di ItemsData)
const ConfirmationModal = ({ isOpen, onClose, onConfirm, itemName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate-fade-in-down">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800">Confirm Deletion</h2>
        <p className="text-gray-600 my-4">Are you sure you want to delete this type: <span className="font-semibold">{itemName}</span>? This action cannot be undone.</p>
        <div className="flex justify-end gap-4 mt-6">
          <button onClick={onClose} className="py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors">
            Cancel
          </button>
          <button onClick={onConfirm} className="py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const ItemsType = () => {
  const [types, setTypes] = useState([]);
  const [search, setSearch] = useState('');
  const [showEntries, setShowEntries] = useState('10');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeToDelete, setTypeToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTypes([
      { id: 1, type: 'Capacitor', currentStock: 8294 },
      { id: 2, type: 'Diode', currentStock: 30560 },
      { id: 3, type: 'Resistor', currentStock: 120500 },
    ]);
  }, []);

  const handleAddEntryClick = () => navigate('/entri-items-type');
  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleNavigateToDescription = (itemId) => navigate(`/item-description/${itemId}`);

  const openDeleteModal = (type) => {
    setTypeToDelete(type);
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsModalOpen(false);
    setTypeToDelete(null);
  };

  const confirmDelete = () => {
    if (typeToDelete) {
      setTypes(currentTypes => currentTypes.filter(type => type.id !== typeToDelete.id));
      console.log("Type deleted:", typeToDelete.id);
    }
    closeDeleteModal();
  };

  const filteredTypes = types.filter(type =>
    type.type.toLowerCase().includes(search.toLowerCase())
  ).slice(0, parseInt(showEntries));

  return (
    <>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
        itemName={typeToDelete?.type}
      />
      <div className="p-4 sm:p-6 md:p-8 bg-slate-50 min-h-screen">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Items Type</h1>
            <button onClick={handleAddEntryClick} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
              <FaPlus size="0.8em" />
              Entri Data
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
            <div className="flex items-center text-sm text-gray-600">
              <span>Show</span>
              <select value={showEntries} onChange={e => setShowEntries(e.target.value)} className="mx-2 p-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
              <span>entries</span>
            </div>
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search Type..." value={search} onChange={handleSearchChange} className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-bold text-slate-600">No</th>
                  <th className="text-left py-3 px-4 text-sm font-bold text-slate-600">Type</th>
                  <th className="text-right py-3 px-4 text-sm font-bold text-slate-600">Current Stock</th>
                  <th className="text-center py-3 px-4 text-sm font-bold text-slate-600">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {filteredTypes.map((type, index) => (
                  <tr key={type.id} className="border-b border-gray-200 odd:bg-white even:bg-slate-50 hover:bg-red-50">
                    <td className="py-4 px-4">{index + 1}</td>
                    <td className="py-4 px-4 font-medium text-gray-800">{type.type}</td>
                    <td className="py-4 px-4 text-right font-medium">{type.currentStock.toLocaleString()}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <button onClick={() => handleNavigateToDescription(type.id)} className="p-2 text-blue-500 hover:bg-blue-100 rounded-full transition-colors" title="View Details"><FaInfoCircle /></button>
                        <button className="p-2 text-green-500 hover:bg-green-100 rounded-full transition-colors" title="Edit Item"><FaEdit /></button>
                        <button onClick={() => openDeleteModal(type)} className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors" title="Delete Item"><FaTrashAlt /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <p>Showing 1 to {filteredTypes.length} of {types.length} entries</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsType;