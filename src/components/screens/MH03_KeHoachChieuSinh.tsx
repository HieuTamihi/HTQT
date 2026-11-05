import React, { useState } from 'react';
import {
  Plus,
  Copy,
  UploadCloud,
  CheckCircle,
  XCircle,
  PlayCircle,
  Search,
  Filter,
  Users,
  Calendar,
} from 'lucide-react';
import { MOCK_CLASSES } from '../../data/mockData';
import { CourseClass } from '../../types';
import { StatusBadge } from '../common/StatusBadge';

export const MH03_KeHoachChieuSinh: React.FC = () => {
  const [classes, setClasses] = useState<CourseClass[]>(MOCK_CLASSES);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedClass, setSelectedClass] = useState<CourseClass | null>(null);

  const handlePushToEshop = (classId: string) => {
    setClasses((prev) =>
      prev.map((c) => (c.id === classId ? { ...c, syncedToEshop: true } : c))
    );
    alert('Đã đẩy thành công mặt hàng sang MISA eShop (mã hàng = mã lớp)!');
  };

  const handleDuplicate = (c: CourseClass) => {
    const newClass: CourseClass = {
      ...c,
      id: `CL-${Date.now()}`,
      code: `${c.code}-COPY`,
      name: `${c.name} (Khóa mới)`,
      enrolled: 0,
      status: 'Nháp',
      syncedToEshop: false,
    };
    setClasses([newClass, ...classes]);
    alert(`Đã nhân bản lớp [${c.code}] thành công sang bản nháp mới!`);
  };

  const handleToggleStatus = (classId: string, newStatus: any) => {
    setClasses((prev) =>
      prev.map((c) => (c.id === classId ? { ...c, status: newStatus } : c))
    );
  };

  const filtered = classes.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.teacherName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = statusFilter === 'ALL' || c.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-03</span>
            <h1 className="text-xl font-bold text-slate-900">Kế hoạch chiêu sinh & Quản lý lớp</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Lập kế hoạch mở khóa mới, nhân bản lớp cũ, quản lý trạng thái mở bán/đóng lớp và đồng bộ sang MISA eShop
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => alert('Đang đồng bộ tất cả lớp Mở bán sang MISA eShop...')}
            className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-lg text-sm font-semibold shadow-xs transition cursor-pointer"
          >
            <UploadCloud className="w-4 h-4" />
            <span>Đẩy eShop hàng loạt</span>
          </button>
          <button
            onClick={() => alert('Mở form tạo lớp học mới')}
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm shadow-blue-600/30 transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Thêm lớp mới</span>
          </button>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative flex-1 max-w-md w-full">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm theo mã lớp, tên lớp, giáo viên..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
          />
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-slate-500" />
          <select
            aria-label="Lọc theo trạng thái lớp"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-white border border-slate-300 text-slate-700 rounded-lg px-3 py-2 text-sm outline-none cursor-pointer"
          >
            <option value="ALL">Tất cả trạng thái</option>
            <option value="Mở bán">Mở bán</option>
            <option value="Đủ sĩ số">Đủ sĩ số</option>
            <option value="Nháp">Nháp</option>
            <option value="Đóng">Đóng</option>
            <option value="Kết thúc">Kết thúc</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b border-slate-200">
            <tr>
              <th className="px-4 py-3">Mã lớp (eShop SKU)</th>
              <th className="px-4 py-3">Tên lớp & Bộ môn</th>
              <th className="px-4 py-3">Lịch & Phòng học</th>
              <th className="px-4 py-3 text-center">Sĩ số</th>
              <th className="px-4 py-3 text-right">Học phí</th>
              <th className="px-4 py-3">Giáo viên (% thù lao)</th>
              <th className="px-4 py-3">Trạng thái</th>
              <th className="px-4 py-3 text-center">eShop</th>
              <th className="px-4 py-3 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/80 transition">
                <td className="px-4 py-3 font-mono font-bold text-blue-600 text-xs">
                  {item.code}
                </td>
                <td className="px-4 py-3">
                  <div className="font-semibold text-slate-900">{item.name}</div>
                  <div className="text-xs text-slate-500">{item.category}</div>
                </td>
                <td className="px-4 py-3 text-xs">
                  <div className="font-medium text-slate-700">{item.schedule}</div>
                  <div className="text-slate-500">{item.room}</div>
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="inline-flex items-center space-x-1 text-xs font-semibold">
                    <span className={item.enrolled >= item.capacity ? 'text-rose-600 font-bold' : 'text-slate-800'}>
                      {item.enrolled}
                    </span>
                    <span className="text-slate-400">/</span>
                    <span className="text-slate-500">{item.capacity}</span>
                  </div>
                  <div className="w-16 bg-slate-100 h-1.5 rounded-full mx-auto mt-1 overflow-hidden">
                    <div
                      className={`h-full ${item.enrolled >= item.capacity ? 'bg-rose-500' : 'bg-blue-500'}`}
                      style={{ width: `${Math.min(100, (item.enrolled / item.capacity) * 100)}%` }}
                    ></div>
                  </div>
                </td>
                <td className="px-4 py-3 text-right font-mono font-bold text-slate-900">
                  {item.price.toLocaleString('vi-VN')} đ
                </td>
                <td className="px-4 py-3 text-xs">
                  <div className="font-medium text-slate-800">{item.teacherName}</div>
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono font-semibold">
                    Tỷ lệ: {item.teacherRatePercent}%
                  </span>
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={item.status} />
                </td>
                <td className="px-4 py-3 text-center">
                  {item.syncedToEshop ? (
                    <span className="inline-flex items-center text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300 font-medium" title="Đã có mã SKU bên eShop">
                      <CheckCircle className="w-3 h-3 mr-1" /> Đã đẩy
                    </span>
                  ) : (
                    <button
                      onClick={() => handlePushToEshop(item.id)}
                      className="inline-flex items-center text-[11px] text-blue-700 bg-blue-50 hover:bg-blue-100 px-2 py-0.5 rounded border border-blue-300 font-semibold cursor-pointer"
                    >
                      <UploadCloud className="w-3 h-3 mr-1" /> Đẩy ngay
                    </button>
                  )}
                </td>
                <td className="px-4 py-3 text-right space-x-1.5 whitespace-nowrap">
                  <button
                    onClick={() => handleDuplicate(item)}
                    className="p-1 text-slate-400 hover:text-blue-600 rounded transition"
                    title="Nhân bản lớp sang khóa mới"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  {item.status === 'Mở bán' ? (
                    <button
                      onClick={() => handleToggleStatus(item.id, 'Đóng')}
                      className="p-1 text-slate-400 hover:text-amber-600 rounded transition"
                      title="Đóng lớp"
                    >
                      <XCircle className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleToggleStatus(item.id, 'Mở bán')}
                      className="p-1 text-slate-400 hover:text-emerald-600 rounded transition"
                      title="Mở bán lớp"
                    >
                      <PlayCircle className="w-4 h-4" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

