import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPencilAlt } from 'react-icons/fa';

const ItemDescription = () => {
    const navigate = useNavigate();
    const itemData = {
        imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Component',
        partNumber: 'RLSD92A051LC',
        brand: 'YAGEO',
        initialQuantity: 10000,
        description: '1A 10uH ±20% 85mΩ SMD Power Inductors ROHS',
        lossStock: 3,
        currentStock: 9487
    };

    return (
        <div className="bg-slate-50 min-h-screen p-4 sm:p-6 md:p-8 flex items-center justify-center animate-fade-in-down">
            {/* Kartu Detail Item */}
            <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-md">
                
                {/* Tombol Aksi di Atas */}
                <div className="flex justify-between items-center mb-6">
                    <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        <FaArrowLeft />
                        Kembali
                    </button>
                    <button className="flex items-center gap-2 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors">
                        <FaPencilAlt size="0.8em" />
                        Edit Item
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Kolom Gambar */}
                    <div>
                        <img src={itemData.imageUrl} alt={itemData.partNumber} className="w-full h-auto rounded-lg object-cover shadow-sm" />
                    </div>

                    {/* Kolom Detail Teks */}
                    <div>
                        <p className="text-sm font-semibold text-red-600">{itemData.category}</p>
                        <h1 className="text-3xl font-bold text-gray-900 mt-1">{itemData.partNumber}</h1>
                        <p className="text-md text-gray-500 mb-4">{itemData.brand}</p>
                        
                        <p className="text-gray-700 mb-6">{itemData.description}</p>
                        
                        <div className="border-t pt-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Stock Overview</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                                <div>
                                    <p className="text-sm text-gray-500">Initial Stock</p>
                                    <p className="text-xl font-semibold text-gray-700">{itemData.initialQuantity.toLocaleString()}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Loss Stock</p>
                                    <p className="text-xl font-semibold text-red-500">{itemData.lossStock.toLocaleString()}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Current Stock</p>
                                    <p className="text-3xl font-bold text-green-600">{itemData.currentStock.toLocaleString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDescription;