import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

// Custom hook untuk mendeteksi klik di luar komponen
const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Jangan lakukan apa-apa jika klik di dalam ref element
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

const Profile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef();

  // Panggil custom hook untuk menutup menu saat klik di luar
  useClickOutside(menuRef, () => setShowMenu(false));

  const handleLogout = () => {
    console.log("Logging out...");
    setShowMenu(false); // Tutup menu setelah aksi
    navigate('/');
  };

  return (
    // Container relatif untuk menu dropdown
    <div className="relative" ref={menuRef}>
      {/* Tombol utama untuk memicu dropdown */}
      <div 
        className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={() => setShowMenu(prev => !prev)}
      >
        <img 
          src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true&name=Admin" 
          alt="Profile" 
          className="w-10 h-10 rounded-full" 
        />
        <div className="hidden md:block">
          <span className="font-semibold text-sm text-gray-700"></span>
        </div>
        <IoIosArrowDown 
          className={`text-gray-500 transition-transform duration-300 ${showMenu ? 'rotate-180' : ''}`} 
        />
      </div>

      {/* Menu dropdown dengan animasi */}
      <div 
        className={`
          absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50
          origin-top-right transition-all duration-200 ease-out
          ${showMenu ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
        `}
      >
        <div className="py-1">
          <a
            href="#"
            onClick={handleLogout} 
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 cursor-pointer"
          >
            <FaSignOutAlt className="mr-3" />
            Logout
          </a>
          {/* Anda bisa menambahkan item menu lain di sini */}
        </div>
      </div>
    </div>
  );
};

export default Profile;