import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { motion, animate } from 'framer-motion';
import { FaTruckLoading, FaTruckMoving, FaBoxes, FaWarehouse } from 'react-icons/fa';

// Asumsi komponen ini ada di folder lain
import Table from '../../components/Table';
import SearchBar from '../../components/Searchbar';
import Profile from '../../components/Profile';

// Pendaftaran ChartJS (disederhanakan)
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Custom Hook untuk animasi angka
function useAnimateNumber(targetNumber) {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    const controls = animate(0, targetNumber, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (value) => setNumber(Math.round(value)),
    });
    return () => controls.stop();
  }, [targetNumber]);
  return number;
}

// Komponen Card yang dianimasikan
const StatCard = ({ title, data, icon, colorClass }) => {
    const numericData = parseInt(data.split(' ')[0], 10);
    const animatedData = useAnimateNumber(numericData);
    const unit = data.split(' ')[1];

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div variants={cardVariants} className={`p-6 rounded-2xl shadow-lg flex items-center space-x-4 text-white ${colorClass}`}>
            <div className="text-4xl p-4 bg-white bg-opacity-25 rounded-full">
                {icon}
            </div>
            <div>
                <p className="text-sm font-light">{title}</p>
                <p className="text-3xl font-bold">{animatedData.toLocaleString()} <span className="text-xl font-light">{unit}</span></p>
            </div>
        </motion.div>
    );
};

// Data untuk Chart dan Table
const componentData = [
  { partNumber: 'RLSD290A5LIC', stock: 19447 },
  { partNumber: 'MUP-C7802I-1', stock: 11498 },
  { partNumber: 'TYPE-CF-3E-10', stock: 118499 },
  { partNumber: 'K5-1305A-03', stock: 9995 },
];

const barData = {
  labels: componentData.map(item => item.partNumber),
  datasets: [{ label: 'Stock', data: componentData.map(item => item.stock), backgroundColor: 'rgba(59, 130, 246, 0.7)', borderRadius: 5 }],
};

const chartOptions = { responsive: true, plugins: { legend: { display: false } } };

const Dashboard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 } // Efek stagger
    }
  };

  return (
    <main className="bg-slate-100 min-h-screen p-4 sm:p-6 md:p-8">
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex justify-between items-center mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center gap-4">
          <SearchBar onSearch={value => console.log(value)} />
          <Profile />
        </div>
      </motion.header>

      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        <StatCard title="Barang Masuk" data="123 unit" icon={<FaTruckLoading />} colorClass="bg-gradient-to-br from-green-500 to-green-600" />
        <StatCard title="Barang Keluar" data="97 unit" icon={<FaTruckMoving />} colorClass="bg-gradient-to-br from-red-500 to-red-600" />
        <StatCard title="Jenis Barang" data="50 jenis" icon={<FaBoxes />} colorClass="bg-gradient-to-br from-blue-500 to-blue-600" />
        <StatCard title="Total Stok" data="1500 unit" icon={<FaWarehouse />} colorClass="bg-gradient-to-br from-amber-500 to-amber-600" />
      </motion.section>

      <motion.section 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Kontainer untuk Bar Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Stock Levels</h2>
            <Bar options={chartOptions} data={barData} />
        </div>

        {/* Kontainer untuk Table */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Stock Highlights</h2>
          <Table data={componentData} />
        </div>
      </motion.section>
    </main>
  );
}

export default Dashboard;