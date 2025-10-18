import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    // Gunakan div sebagai container untuk menampung icon dan input
    <div className="relative flex items-center text-gray-600">
      
      {/* Icon diletakkan secara absolut di dalam container */}
      <FaSearch 
        className={`absolute left-4 transition-colors duration-300 ${isFocused ? 'text-blue-500' : 'text-gray-400'}`} 
      />

      {/* Input dengan styling modern dan animasi */}
      <input
        type="text"
        placeholder="Search..."
        className={`
          py-2 pl-12 pr-4 w-48 /* Ukuran dan padding dasar */
          bg-slate-100 rounded-full /* Tampilan dasar yang soft dan bulat */
          border-2 border-transparent /* Border transparan saat tidak aktif */
          focus:outline-none /* Menghilangkan outline default */
          focus:border-blue-500 /* Border biru saat aktif (fokus) */
          focus:bg-white /* Latar belakang menjadi putih saat aktif */
          focus:w-64 /* Lebar memanjang saat aktif */
          transition-all duration-300 ease-in-out /* Efek animasi untuk semua perubahan */
        `}
        onChange={e => onSearch(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default SearchBar;