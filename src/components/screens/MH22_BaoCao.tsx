import React, { useState } from 'react';
import { PieChart, Download, FileSpreadsheet, FileText, Calendar, Filter, Printer } from 'lucide-react';
import { FACILITIES } from '../../data/mockData';

export const MH22_BaoCao: React.FC = () => {
  const [reportType, setReportType] = useState<'day' | 'week' | 'month'>('day');
  const [selectedFacility, setSelectedFacility] = useState('TS');

  const reportData = [
    { date: '04/11/2026', title: 'Bảng kê thu tiền theo quầy & Online', orders: 12, cash: 8600000, bank: 13200000, total: 21800000 },
    { date: '03/11/2026', title: 'Bảng kê thu tiền theo quầy & Online', orders: 18, cash: 12400000, bank: 19800000, total: 32200000 },
    { date: '02/11/2026', title: 'Bảng kê thu tiền theo quầy & Online', orders: 15, cash: 9500000, bank: 16500000, total: 26000000 },
    { date: '01/11/2026', title: 'Bảng kê thu tiền theo quầy & Online', orders: 22, cash: 14200000, bank: 24800000, total: 39000000 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-22</span>
            <h1 className="text-xl font-bold text-slate-900">Báo cáo & Thống kê tài chính học vụ</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Kết xuất bảng kê thu tiền hằng ngày, báo cáo tổng hợp tuần/tháng theo từng cơ sở hoặc toàn hệ thống CVHLĐ
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => alert('Đang xuất báo cáo định dạng Excel (.xlsx)...')}
            className="inline-flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-lg text-xs font-semibold shadow-xs transition cursor-pointer"
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>Xuất Excel</span>
          </button>
          <button
            onClick={() => alert('Đang xuất báo cáo định dạng PDF chuẩn in ấn...')}
            className="inline-flex items-center space-x-1.5 bg-rose-600 hover:bg-rose-700 text-white px-3.5 py-2 rounded-lg text-xs font-semibold shadow-xs transition cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Xuất PDF</span>
          </button>
        </div>
      </div>

      {/* Filter toolbar */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-4 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex space-x-2">
          <button
            onClick={() => setReportType('day')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              reportType === 'day' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Bảng kê ngày
          </button>
          <button
            onClick={() => setReportType('week')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              reportType === 'week' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Báo cáo tuần
          </button>
          <button
            onClick={() => setReportType('month')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              reportType === 'month' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Báo cáo tháng
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-xs text-slate-500 font-medium">Lọc theo cơ sở:</span>
          <select
            aria-label="Lọc theo cơ sở"
            value={selectedFacility}
            onChange={(e) => setSelectedFacility(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-semibold bg-white"
          >
            <option value="ALL">Toàn thể đơn vị</option>
            {FACILITIES.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b">
            <tr>
              <th className="px-4 py-3">Ngày số liệu</th>
              <th className="px-4 py-3">Tên biểu mẫu báo cáo</th>
              <th className="px-4 py-3 text-center">Số lượng đơn</th>
              <th className="px-4 py-3 text-right">Tiền mặt tại quầy</th>
              <th className="px-4 py-3 text-right">Chuyển khoản (VietQR/Bank)</th>
              <th className="px-4 py-3 text-right">Tổng thực thu</th>
              <th className="px-4 py-3 text-right">Tác vụ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {reportData.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition">
                <td className="px-4 py-3 font-semibold text-slate-900">{row.date}</td>
                <td className="px-4 py-3 font-medium text-slate-800">{row.title}</td>
                <td className="px-4 py-3 text-center font-bold text-blue-600">{row.orders}</td>
                <td className="px-4 py-3 text-right font-mono text-slate-700">
                  {row.cash.toLocaleString('vi-VN')} đ
                </td>
                <td className="px-4 py-3 text-right font-mono text-slate-700">
                  {row.bank.toLocaleString('vi-VN')} đ
                </td>
                <td className="px-4 py-3 text-right font-mono font-bold text-emerald-700 text-sm">
                  {row.total.toLocaleString('vi-VN')} đ
                </td>
                <td className="px-4 py-3 text-right space-x-1.5 whitespace-nowrap">
                  <button
                    onClick={() => alert(`Xem chi tiết sổ phụ ngày ${row.date}`)}
                    className="p-1 text-slate-400 hover:text-blue-600 rounded"
                    title="Xem chi tiết"
                  >
                    <FileText className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => alert(`Lệnh in bảng kê ngày ${row.date} đã gửi!`)}
                    className="p-1 text-slate-400 hover:text-slate-800 rounded"
                    title="In nhanh"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

