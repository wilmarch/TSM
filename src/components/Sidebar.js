import React, { useState, createContext, useContext, useEffect, useCallback } from 'react'; // useCallback ditambahkan di sini
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBoxOpen, FaChartLine, FaCog, FaWarehouse, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const menuItems = [
    { name: 'Dashboard', icon: FaHome, path: '/dashboard' },
    { name: 'Master', icon: FaBoxOpen, subItems: [{ name: 'Items Data', path: '/items-data' }, { name: 'Items Type', path: '/items-type' }] },
    { name: 'Transaksi', icon: FaWarehouse, subItems: [{ name: 'Barang Masuk', path: '/barang-masuk' }, { name: 'Barang Keluar', path: '/barang-keluar' }] },
    { name: 'Laporan', icon: FaChartLine, subItems: [{ name: 'Laporan Stock', path: '/laporan-stock' }, { name: 'Laporan Barang Masuk', path: '/laporan-barang-masuk' }, { name: 'Laporan Barang Keluar', path: '/laporan-barang-keluar' }] },
    { name: 'Pengaturan', icon: FaCog, subItems: [{ name: 'Manajemen User', path: '/manajemen-user' }] },
];

const SidebarContext = createContext();

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(true);
    const location = useLocation();

    const getActiveMenu = useCallback(() => {
        const activeItem = menuItems.find(item => 
            item.subItems && item.subItems.some(sub => sub.path === location.pathname)
        );
        return activeItem ? activeItem.name : null;
    }, [location.pathname]);

    const [openMenu, setOpenMenu] = useState(getActiveMenu());

    const handleMenuClick = (name) => {
        setOpenMenu(openMenu === name ? null : name);
    };
    
    useEffect(() => {
        setOpenMenu(getActiveMenu());
    }, [location, getActiveMenu]);

    return (
        <aside className={`h-screen shadow-lg transition-all duration-300 ease-in-out ${isExpanded ? 'w-64' : 'w-20'}`}>
            <nav className="h-full flex flex-col bg-white border-r border-gray-200">
                {/* Header dengan logo di tengah */}
                <div className={`py-8 flex items-center ${isExpanded ? 'justify-center' : 'justify-center'}`}>
                    <img src="Logo TSM.png" alt="Logo TSM" className={`overflow-hidden transition-all duration-200 ${isExpanded ? 'w-32' : 'w-12'}`} />
                </div>

                <SidebarContext.Provider value={{ isExpanded }}>
                    <ul className="flex-1 px-3">
                        {menuItems.map((item) => (
                            <SidebarItem 
                                key={item.name} 
                                item={item}
                                isOpen={openMenu === item.name}
                                onClick={() => handleMenuClick(item.name)}
                            />
                        ))}
                    </ul>
                </SidebarContext.Provider>
                
                {/* Tombol Toggle di bawah */}
                <div className="border-t border-gray-200 p-3">
                    <button onClick={() => setIsExpanded(curr => !curr)} className="p-3 w-full flex justify-center items-center rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600">
                        {isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
                    </button>
                </div>
            </nav>
        </aside>
    );
}

export function SidebarItem({ item, isOpen, onClick }) {
    const { isExpanded } = useContext(SidebarContext);
    const location = useLocation();
    
    const isChildActive = item.subItems && item.subItems.some(sub => location.pathname === sub.path);

    if (!item.subItems) {
        const isActive = location.pathname === item.path;
        return (
            <Link to={item.path} className={`relative flex items-center py-2.5 px-4 my-1 font-medium rounded-lg cursor-pointer transition-colors group ${isActive ? 'bg-red-100 text-red-700' : 'hover:bg-red-50 text-gray-600'}`}>
                <item.icon size={20} />
                <span className={`overflow-hidden transition-all ${isExpanded ? 'w-52 ml-4' : 'w-0'}`}>{item.name}</span>
                {isActive && <div className={`absolute left-0 w-1 h-full bg-red-600 rounded-tr-lg rounded-br-lg`} />}
                {!isExpanded && ( <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-red-600 text-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">{item.name}</div> )}
            </Link>
        );
    }

    return (
        <div className="relative transition-colors group rounded-lg">
            <div onClick={onClick} className={`flex items-center justify-between py-2.5 px-4 my-1 font-medium cursor-pointer rounded-lg hover:bg-red-50 ${isChildActive ? 'text-red-700' : 'text-gray-600'}`}>
                <div className="flex items-center">
                    <item.icon size={20} />
                    <span className={`overflow-hidden transition-all ${isExpanded ? 'w-36 ml-4' : 'w-0'}`}>{item.name}</span>
                </div>
                {isExpanded && <IoIosArrowDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />}
            </div>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen && isExpanded ? 'max-h-screen' : 'max-h-0'}`}>
                <ul className="pl-8 border-l-2 border-gray-200 ml-6 my-2">
                    {item.subItems.map(subItem => {
                        const isSubActive = location.pathname === subItem.path;
                        return (
                            <Link to={subItem.path} key={subItem.name} className={`relative flex items-center py-1.5 px-2 my-1 text-sm rounded-md transition-colors ${isSubActive ? 'text-red-700 font-semibold' : 'text-gray-500 hover:text-red-600'}`}>
                                {isSubActive && <div className="absolute left-[-1.57rem] w-2 h-2 bg-red-600 rounded-full" />}
                                {subItem.name}
                            </Link>
                        );
                    })}
                </ul>
            </div>
            {!isExpanded && ( <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-red-600 text-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">{item.name}</div> )}
        </div>
    );
}