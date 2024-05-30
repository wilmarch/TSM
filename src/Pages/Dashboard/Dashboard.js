import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

import Card from '../../components/Card';
import Table from '../../components/Table';
import SearchBar from '../../components/Searchbar';
import Profile from '../../components/Profile';
import { FaTruckLoading, FaTruckMoving, FaBoxes, FaWarehouse } from 'react-icons/fa';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const componentData = [
  { partNumber: 'RLSD290A5LIC', category: 'Component', stock: 19447, brand: 'YAGEO' },
  { partNumber: 'MUP-C7802I-1', category: 'Component', stock: 11498, brand: 'Samsung Electro-Mechanics' },
  { partNumber: 'TYPE-CF-3E-10', category: 'Component', stock: 118499, brand: 'YAGEO' },
  { partNumber: 'K5-1305A-03', category: 'Component', stock: 9995, brand: 'Panasonic' },
];

const data = {
  labels: componentData.map(item => item.partNumber),
  datasets: [
    {
      label: 'Stock',
      data: componentData.map(item => item.stock),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
  ],
};

const options = {
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'Component Stock Levels',
    },
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-6">
        <SearchBar onSearch={value => console.log(value)} />
        <Profile />
      </div>
      <div className="mb-6 max-w-4xl mx-auto">
        <Bar data={data} options={options} />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card 
          title="Barang Masuk" 
          data="123 unit" 
          icon={<FaTruckLoading size="3em" className="text-green-500" />}
        />
        <Card 
          title="Barang Keluar" 
          data="97 unit" 
          icon={<FaTruckMoving size="3em" className="text-red-500" />}
        />
        <Card 
          title="Jenis Barang" 
          data="50 jenis" 
          icon={<FaBoxes size="3em" className="text-blue-500" />}
        />
        <Card 
          title="Stok Barang" 
          data="1500 unit" 
          icon={<FaWarehouse size="3em" className="text-yellow-500" />}
        />
      </div>
      <div className="mt-6">
        <Table data={componentData} />
      </div>
    </div>
  );
}

export default Dashboard;
