import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';

// Komponen InputField sedikit dimodifikasi untuk menampilkan error
const InputField = ({ icon, label, type, name, value, onChange, placeholder, error }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full pl-10 pr-4 py-2 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-red-500'
        }`}
        placeholder={placeholder}
      />
    </div>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

// Komponen PasswordInput sedikit dimodifikasi untuk menampilkan error
const PasswordInput = ({ label, name, value, onChange, placeholder, error }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaLock className="text-gray-400" />
        </div>
        <input
          type={showPassword ? 'text' : 'password'}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full pl-10 pr-10 py-2 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
            error ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-red-500'
          }`}
          placeholder={placeholder}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-red-600">
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

// Komponen Utama AuthForm
function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '', name: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "Email tidak boleh kosong.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Format email tidak valid.";

    if (!isLogin) {
      if (!form.name) newErrors.name = "Nama tidak boleh kosong.";
      if (form.password.length < 6) newErrors.password = "Password minimal 6 karakter.";
      if (form.password !== form.confirmPassword) newErrors.confirmPassword = "Password tidak cocok.";
    } else {
        if (!form.password) newErrors.password = "Password tidak boleh kosong.";
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      console.log("Submitting form:", form);
      // Simulasi API call
      setTimeout(() => {
        setIsLoading(false);
        if (isLogin) {
          console.log('Login successful');
          navigate('/dashboard');
        } else {
          console.log('Registration successful');
          navigate('/dashboard');
        }
      }, 1500); // Tunda 1.5 detik untuk menunjukkan efek loading
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-4xl flex rounded-xl shadow-2xl overflow-hidden animate-fade-in-down">
        <div className="w-1/2 hidden md:block bg-cover bg-center relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop")' }}>
            <div className="absolute inset-0 bg-red-800 bg-opacity-50 flex flex-col justify-center items-center p-8 text-white">
                <h1 className="text-4xl font-bold mb-4">Selamat Datang</h1>
                <p className="text-center">Sistem Inventaris TSM untuk manajemen stok yang lebih efisien dan modern.</p>
            </div>
        </div>
        <div className="w-full md:w-1/2 bg-white p-8">
          <div className="text-center mb-8">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZDDrQU3GGMT-VI0CqYqiaIy2F8Xn4MRShUg&s" alt="Logo TSM" className="mx-auto w-20 mb-4" />
            <h2 className="text-3xl font-bold text-gray-800">{isLogin ? 'Login' : 'Buat Akun'}</h2>
            <p className="text-gray-500">{isLogin ? 'Silakan masuk ke akun Anda' : 'Mulai perjalanan Anda bersama kami'}</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${!isLogin ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
               <div className="mb-4">
                <InputField icon={<FaUser className="text-gray-400" />} label="Nama Lengkap" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Masukkan nama lengkap" error={errors.name} />
              </div>
            </div>
            <InputField icon={<FaEnvelope className="text-gray-400" />} label="Email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@contoh.com" error={errors.email} />
            <PasswordInput label="Password" name="password" value={form.password} onChange={handleChange} placeholder="Minimal 6 karakter" error={errors.password} />
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${!isLogin ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="mb-4">
                    <PasswordInput label="Konfirmasi Password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Ulangi password" error={errors.confirmPassword} />
                </div>
            </div>
            <button type="submit" disabled={isLoading} className="w-full flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg disabled:bg-red-400 disabled:cursor-not-allowed">
              {isLoading ? <FaSpinner className="animate-spin" /> : (isLogin ? 'Login' : 'Register')}
              {isLoading && 'Processing...'}
            </button>
            <p className="mt-6 text-center text-sm text-gray-600">
              {isLogin ? 'Belum punya akun? ' : 'Sudah punya akun? '}
              <button type="button" onClick={() => { setIsLogin(!isLogin); setErrors({}); }} className="font-semibold text-red-600 hover:text-red-800">
                {isLogin ? 'Register di sini' : 'Login di sini'}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;