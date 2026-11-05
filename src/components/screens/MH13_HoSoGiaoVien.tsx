import React, { useState } from 'react';
import {
  GraduationCap,
  Plus,
  Edit2,
  FileText,
  CreditCard,
  Percent,
  Search,
  CheckCircle,
} from 'lucide-react';
import { MOCK_TEACHERS } from '../../data/mockData';
import { TeacherProfile } from '../../types';

export const MH13_HoSoGiaoVien: React.FC = () => {
  const [teachers, setTeachers] = useState<TeacherProfile[]>(MOCK_TEACHERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-13</span>
            <h1 className="text-xl font-bold text-slate-900">Hồ sơ giáo viên & Hợp đồng giảng dạy</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Quản lý thông tin thuế, tài khoản nhận thù lao, số hợp đồng giảng dạy và mức tỷ lệ % thù lao thỏa thuận
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm shadow-blue-600/30 transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Thêm hồ sơ giáo viên</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
        <input
          type="text"
          placeholder="Tìm theo tên giáo viên, MST, số hợp đồng..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:border-blue-500 outline-none"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b border-slate-200">
            <tr>
              <th className="px-4 py-3">Mã GV</th>
              <th className="px-4 py-3">Họ và tên giáo viên</th>
              <th className="px-4 py-3">Mã số thuế & CCCD</th>
              <th className="px-4 py-3">Tài khoản ngân hàng</th>
              <th className="px-4 py-3">Số HĐGD & Ngày ký</th>
              <th className="px-4 py-3 text-center">Tỷ lệ thù lao</th>
              <th className="px-4 py-3">Trạng thái</th>
              <th className="px-4 py-3 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {teachers.map((t) => (
              <tr key={t.id} className="hover:bg-slate-50/80 transition">
                <td className="px-4 py-3 font-mono font-bold text-blue-600">{t.id}</td>
                <td className="px-4 py-3">
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.specialty} • {t.phone}</div>
                </td>
                <td className="px-4 py-3 text-xs">
                  <div>MST: <strong className="font-mono text-slate-800">{t.taxCode}</strong></div>
                  <div className="text-slate-500">CCCD: {t.idCard}</div>
                </td>
                <td className="px-4 py-3 text-xs">
                  <div className="font-mono font-bold text-slate-800">{t.bankAccountNumber}</div>
                  <div className="text-slate-500">{t.bankName}</div>
                </td>
                <td className="px-4 py-3 text-xs">
                  <div className="font-mono font-semibold text-blue-700">{t.contractNumber}</div>
                  <div className="text-slate-500">Ký ngày: {t.contractSignDate}</div>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-flex items-center text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-300">
                    {t.remunerationRatePercent}%
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center text-xs text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-300">
                    <CheckCircle className="w-3 h-3 mr-1" /> {t.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button
                    onClick={() => alert(`Sửa thông tin hồ sơ giáo viên: ${t.name}`)}
                    className="p-1 text-slate-400 hover:text-blue-600 rounded transition"
                  >
                    <Edit2 className="w-4 h-4" />
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

