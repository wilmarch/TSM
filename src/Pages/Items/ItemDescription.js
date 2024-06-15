import React from 'react';

const ItemDescription = () => {
  const itemData = {
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    category: 'Capacitor',
    partNumber: 'RLSD92A051LC',
    brand: 'YAGEO',
    initialQuantity: 10000,
    description: '1A 10uH ±20% 85mΩ SMD Power Inductors ROHS',
    lossStock: 3,
    currentStock: 9487
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center">
        <img src={itemData.imageUrl} alt="Item" className="w-full h-auto mb-4 rounded object-cover object-left" />
        </div>
        <div>
          <p className="text-red-600"><strong>Category:</strong> <span className="text-black">{itemData.category}</span></p>
          <p className="text-red-600"><strong>Part Number:</strong> <span className="text-black">{itemData.partNumber}</span></p>
          <p className="text-red-600"><strong>Brand:</strong> <span className="text-black">{itemData.brand}</span></p>
          <p className="text-red-600"><strong>Initial Quantity:</strong> <span className="text-black">{itemData.initialQuantity}</span></p>
          <p className="text-red-600"><strong>Description:</strong> <span className="text-black">{itemData.description}</span></p>
          <p className="text-red-600"><strong>Loss Stock:</strong> <span className="text-black">{itemData.lossStock}</span></p>
          <p className="text-red-600"><strong>Current Stock:</strong> <span className="text-black">{itemData.currentStock}</span></p>
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
