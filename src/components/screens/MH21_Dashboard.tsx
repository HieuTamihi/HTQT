import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Building2,
  Users,
  DollarSign,
  GraduationCap,
  Calendar,
  Filter,
} from 'lucide-react';
import { FACILITIES } from '../../data/mockData';

export const MH21_Dashboard: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Tháng 11/2026');
  const [selectedFacility, setSelectedFacility] = useState('ALL');

  // 8 Chỉ số BC-01 đến BC-08 theo tài liệu yêu cầu
  const metrics = [
    { code: 'BC-01', title: 'Tổng doanh thu toàn hệ thống', value: '1.450.000.000 đ', change: '+12.5%', isUp: true, sub: '7 Cơ sở hoạt động' },
    { code: 'BC-02', title: 'Doanh thu thu tại quầy', value: '890.000.000 đ', change: '+8.2%', isUp: true, sub: '61.4% tỷ trọng' },
    { code: 'BC-03', title: 'Doanh thu trực tuyến (VietQR)', value: '560.000.000 đ', change: '+24.6%', isUp: true, sub: '38.6% tỷ trọng' },
    { code: 'BC-04', title: 'Tổng số lượt học viên ghi danh', value: '1.240 Học viên', change: '+15.1%', isUp: true, sub: '84 lớp mở bán' },
    { code: 'BC-05', title: 'Tổng thù lao giáo viên phải trả', value: '820.500.000 đ', change: '+10.0%', isUp: true, sub: 'Trung bình 63.5%' },
    { code: 'BC-06', title: 'Chi phí hoạt động đã duyệt (PĐC)', value: '245.000.000 đ', change: '-4.2%', isUp: false, sub: 'Trong dự toán' },
    { code: 'BC-07', title: 'Ngoại lệ đối soát chưa giải trình', value: '3 Đơn hàng', change: '-2 đơn', isUp: false, sub: 'Cần kế toán xử lý', isAlert: true },
    { code: 'BC-08', title: 'Tỷ lệ lấp đầy sĩ số các lớp', value: '88.4%', change: '+3.5%', isUp: true, sub: 'Vượt chỉ tiêu quý 4' },
  ];

  const facilityRevenues = [
    { name: 'Trụ sở chính', revenue: 620000000, percent: 42.8, color: 'bg-blue-600' },
    { name: 'Cơ sở 1 (CLB Thể thao & Khiêu vũ)', revenue: 310000000, percent: 21.4, color: 'bg-indigo-600' },
    { name: 'Cơ sở 2 (Khu biểu diễn nghệ thuật)', revenue: 195000000, percent: 13.4, color: 'bg-emerald-600' },
    { name: 'Cơ sở 3 (Đào tạo Kỹ năng)', revenue: 120000000, percent: 8.3, color: 'bg-amber-500' },
    { name: 'Cơ sở 4 (CLB Bơi lặn & Thể hình)', revenue: 105000000, percent: 7.2, color: 'bg-teal-500' },
    { name: 'Cơ sở 5 & Cơ sở 6', revenue: 100000000, percent: 6.9, color: 'bg-slate-500' },
  ];

  const serviceRevenues = [
    { service: 'Khiêu vũ cổ điển & Hiện đại', amount: 580000000, percent: 40 },
    { service: 'Thể thao (Bơi lội, Gym, Aerobic)', amount: 435000000, percent: 30 },
    { service: 'Âm nhạc, Hội họa & Kỹ năng', amount: 290000000, percent: 20 },
    { service: 'Thuê sân bãi & Hoạt động khác', amount: 145000000, percent: 10 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-21</span>
            <h1 className="text-xl font-bold text-slate-900">
              Dashboard Tổng quan Lãnh đạo (8 Chỉ số BC-01 đến BC-08)
            </h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Trung tâm dữ liệu điều hành toàn diện của Ban Giám đốc CVHLĐ: doanh thu, học viên, thù lao và cảnh báo ngoại lệ
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex items-center space-x-2">
          <select
            aria-label="Chọn kỳ báo cáo"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-semibold bg-white"
          >
            <option>Hôm nay (04/11/2026)</option>
            <option>Tuần này (Tuần 44)</option>
            <option>Tháng 11/2026</option>
            <option>Quý 4/2026</option>
            <option>Cả năm 2026</option>
          </select>

          <select
            aria-label="Chọn cơ sở lọc"
            value={selectedFacility}
            onChange={(e) => setSelectedFacility(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-semibold bg-white"
          >
            <option value="ALL">Toàn bộ 7 Cơ sở</option>
            {FACILITIES.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 8 Cards BC-01 to BC-08 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div
            key={m.code}
            className={`p-4 rounded-xl border bg-white shadow-xs relative overflow-hidden ${
              m.isAlert ? 'border-rose-300 ring-2 ring-rose-500/20' : 'border-slate-200'
            }`}
          >
            <div className="flex justify-between items-center text-xs">
              <span className="font-mono font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                {m.code}
              </span>
              <span
                className={`text-[11px] font-bold ${
                  m.isAlert
                    ? 'text-rose-600'
                    : m.isUp
                    ? 'text-emerald-600'
                    : 'text-slate-500'
                }`}
              >
                {m.change}
              </span>
            </div>
            <div className="text-xs text-slate-500 font-medium mt-2 line-clamp-1">{m.title}</div>
            <div
              className={`text-xl font-bold font-mono mt-1 ${
                m.isAlert ? 'text-rose-600' : 'text-slate-900'
              }`}
            >
              {m.value}
            </div>
            <div className="text-[10px] text-slate-400 mt-1">{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Charts & Breakdowns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Doanh thu theo 7 Cơ sở */}
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 space-y-4">
          <div className="flex justify-between items-center border-b pb-3 border-slate-100">
            <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span>Phân bổ Doanh thu theo Cơ sở trực thuộc</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">Tỷ lệ %</span>
          </div>

          <div className="space-y-3 pt-1">
            {facilityRevenues.map((f, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-800">{f.name}</span>
                  <span className="font-mono font-bold text-slate-900">
                    {f.revenue.toLocaleString('vi-VN')} đ ({f.percent}%)
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className={`${f.color} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${f.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Doanh thu theo nhóm bộ môn dịch vụ */}
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 space-y-4">
          <div className="flex justify-between items-center border-b pb-3 border-slate-100">
            <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
              <BarChart3 className="w-4 h-4 text-emerald-600" />
              <span>Cơ cấu Doanh thu theo Bộ môn Dịch vụ</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">Kỳ báo cáo</span>
          </div>

          <div className="space-y-3 pt-1">
            {serviceRevenues.map((s, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-800">{s.service}</span>
                  <span className="font-mono font-bold text-emerald-700">
                    {s.amount.toLocaleString('vi-VN')} đ ({s.percent}%)
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${s.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

