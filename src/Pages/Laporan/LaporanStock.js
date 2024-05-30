import React, { useState } from 'react';
import { FaFilePdf, FaFileExcel } from 'react-icons/fa';  

const LaporanStock = () => {
    const [data] = useState([
        { tanggal: '1 January 2024', type: 'Component', partNumber: 'RLSGD2510VIC', manufacture: 'YAGEO', jumlahStock: 9487 },
        { tanggal: '2 January 2024', type: 'Component', partNumber: 'MUP-C7802I-1', manufacture: 'Samsung Electro-Mechanics', jumlahStock: 4189 },
        // Add more dummy data as required
    ]);
    const [itemsToShow, setItemsToShow] = useState(10); // Default number of items to show
    const [dateRange, setDateRange] = useState({ start: '', end: '' });

    const handleDateChange = (e) => {
        setDateRange({ ...dateRange, [e.target.name]: e.target.value });
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Laporan Stock</h1>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                    <label>Show</label>
                    <select value={itemsToShow} onChange={(e) => setItemsToShow(e.target.value)} className="border border-gray-300 rounded py-1 px-2">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                    <input type="date" name="start" value={dateRange.start} onChange={handleDateChange} className="border border-gray-300 rounded py-1 px-2 ml-2" />
                    <input type="date" name="end" value={dateRange.end} onChange={handleDateChange} className="border border-gray-300 rounded py-1 px-2 ml-2" />
                </div>
                <div className="flex items-center space-x-2">
                    <button onClick={() => {}} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center">
                        <FaFilePdf className="mr-2" /> Cetak PDF
                    </button>
                    <button onClick={() => {}} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center">
                        <FaFileExcel className="mr-2" /> Export Excel
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead className="bg-red-500 text-white">
                        <tr>
                            <th className="px-4 py-3 uppercase font-semibold text-sm">No</th>
                            <th className="px-4 py-3 uppercase font-semibold text-sm">Tanggal</th>
                            <th className="px-4 py-3 uppercase font-semibold text-sm">Type</th>
                            <th className="px-4 py-3 uppercase font-semibold text-sm">Part Number</th>
                            <th className="px-4 py-3 uppercase font-semibold text-sm">Manufacture</th>
                            <th className="px-4 py-3 uppercase font-semibold text-sm">Jumlah Stock</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {data.slice(0, itemsToShow).map((item, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="px-4 py-3">{index + 1}</td>
                                <td className="px-4 py-3">{item.tanggal}</td>
                                <td className="px-4 py-3">{item.type}</td>
                                <td className="px-4 py-3">{item.partNumber}</td>
                                <td className="px-4 py-3">{item.manufacture}</td>
                                <td className="px-4 py-3">{item.jumlahStock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LaporanStock;
