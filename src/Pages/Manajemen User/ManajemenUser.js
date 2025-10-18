import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSave, FaTimes, FaEye, FaEyeSlash } from 'react-icons/fa'; // Import ikon yang dibutuhkan

// Komponen InputField yang diperbarui
const InputField = ({ label, type = 'text', name, value, onChange, placeholder }) => {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow duration-200"
                required
            />
        </div>
    );
};

// Komponen PasswordInput yang diperbarui dengan ikon
const PasswordInput = ({ label, name, value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <div className="relative">
                <input
                    type={showPassword ? 'text' : 'password'}
                    name={name}
                    id={name}
                    value={value}
                    onChange={onChange}
                    placeholder="Enter new password"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow duration-200"
                    required
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 px-4 flex items-center text-gray-500 hover:text-red-600"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
        </div>
    );
};

// Komponen Utama ManajemenUser
const ManajemenUser = () => {
    const [user, setUser] = useState({
        name: 'Resnu Wilmar', // Contoh data yang sudah ada
        email: 'resnuwilmar1@gmail.com',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated User Data:", user);
        navigate('/dashboard'); // Kembali ke dashboard setelah menyimpan
    };

    return (
        <div className="bg-slate-50 min-h-screen p-4 sm:p-6 md:p-8 flex items-center justify-center animate-fade-in-down">
            <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-md">
                <div className="border-b pb-4 mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">User Settings</h1>
                    <p className="text-sm text-gray-500">Update your profile information and password.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <InputField label="Name" name="name" value={user.name} onChange={handleChange} placeholder="Enter your full name" />
                    <InputField label="Email" type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your email" />
                    <PasswordInput label="New Password" name="password" value={user.password} onChange={handleChange} />

                    <div className="flex justify-end gap-4 pt-4 border-t">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                            <FaTimes size="0.8em" />
                            Batal
                        </button>
                        <button
                            type="submit"
                            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 shadow-sm hover:shadow-md">
                            <FaSave size="0.8em" />
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ManajemenUser;