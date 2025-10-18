import React from 'react';

const Card = ({ title, data, icon, colorClasses }) => {
  return (
    // Container utama kartu dengan efek transisi dan hover
    <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 cursor-pointer">
      <div className="flex items-center space-x-4">
        
        {/* Lingkaran ikon dengan warna dinamis yang dilewatkan melalui props */}
        <div className={`text-2xl p-4 rounded-full ${colorClasses}`}>
          {icon}
        </div>

        {/* Konten teks dengan hierarki yang lebih jelas */}
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-800">{data}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;