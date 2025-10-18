import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import Komponen & Halaman
import Sidebar from './components/Sidebar';
import AnimatedPage from './components/AnimatedPage'; // Import wrapper animasi kita

// Halaman-halaman
import Login from './Pages/Login/AuthForm';
import Dashboard from './Pages/Dashboard/Dashboard';
import ItemsData from './Pages/Items/ItemsData';
import EntriItemsData from './Pages/Items/EntriItemsData';
import ItemsType from './Pages/Items/ItemsType';
import EntriItemsType from './Pages/Items/EntriItemsType';
import ItemDescription from './Pages/Items/ItemDescription';
import BarangMasuk from './Pages/Barang/BarangMasuk';
import EntriBarangMasuk from './Pages/Barang/EntriBarangMasuk';
import BarangKeluar from './Pages/Barang/BarangKeluar';
import EntriBarangKeluar from './Pages/Barang/EntriBarangKeluar';
import LaporanStock from './Pages/Laporan/LaporanStock';
import LaporanBarangMasuk from './Pages/Laporan/LaporanBarangMasuk';
import LaporanBarangKeluar from './Pages/Laporan/LaporanBarangKeluar';
import ManajemenUser from './Pages/Manajemen User/ManajemenUser';

// Komponen Layout Utama dengan Sidebar dan Animasi
const AppLayout = () => {
  const location = useLocation();

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">
        {/* AnimatePresence akan menangani animasi keluar-masuk halaman */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Bungkus setiap elemen halaman dengan AnimatedPage */}
            <Route path="/dashboard" element={<AnimatedPage><Dashboard /></AnimatedPage>} />
            <Route path="/items-data" element={<AnimatedPage><ItemsData /></AnimatedPage>} />
            <Route path="/entri-items-data" element={<AnimatedPage><EntriItemsData /></AnimatedPage>} />
            <Route path="/items-type" element={<AnimatedPage><ItemsType /></AnimatedPage>} />
            <Route path="/entri-items-type" element={<AnimatedPage><EntriItemsType /></AnimatedPage>} />
            <Route path="/item-description/:id" element={<AnimatedPage><ItemDescription /></AnimatedPage>} />
            <Route path="/barang-masuk" element={<AnimatedPage><BarangMasuk /></AnimatedPage>} />
            <Route path="/entri-barang-masuk" element={<AnimatedPage><EntriBarangMasuk /></AnimatedPage>} />
            <Route path="/barang-keluar" element={<AnimatedPage><BarangKeluar /></AnimatedPage>} />
            <Route path="/entri-barang-keluar" element={<AnimatedPage><EntriBarangKeluar /></AnimatedPage>} />
            <Route path="/laporan-stock" element={<AnimatedPage><LaporanStock /></AnimatedPage>} />
            <Route path="/laporan-barang-masuk" element={<AnimatedPage><LaporanBarangMasuk /></AnimatedPage>} />
            <Route path="/laporan-barang-keluar" element={<AnimatedPage><LaporanBarangKeluar /></AnimatedPage>} />
            <Route path="/manajemen-user" element={<AnimatedPage><ManajemenUser /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
};

// Komponen App utama yang mengatur rute Login dan Layout Utama
const App = () => {
  return (
    <Router basename='/TSM'>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Semua rute lain yang memiliki sidebar akan ditangani oleh AppLayout */}
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </Router>
  );
};

export default App;