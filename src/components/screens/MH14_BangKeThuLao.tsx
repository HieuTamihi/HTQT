import React, { useState } from 'react';
import {
  Calculator,
  CheckCircle,
  FileText,
  Smartphone,
  Download,
  ArrowRight,
  ShieldCheck,
  Percent,
} from 'lucide-react';
import { MOCK_COMPENSATION_SHEETS } from '../../data/mockData';
import { CompensationSheet } from '../../types';
import { StatusBadge } from '../common/StatusBadge';

export const MH14_BangKeThuLao: React.FC = () => {
  const [sheets, setSheets] = useState<CompensationSheet[]>(MOCK_COMPENSATION_SHEETS);

  const handleTeacherConfirm = (id: string) => {
    setSheets((prev) =>
      prev.map((s) =>
        s.id === id
          ? {
              ...s,
              status: 'Giáo viên xác nhận',
              confirmedByTeacherAt: new Date().toLocaleString('vi-VN'),
            }
          : s
      )
    );
    alert('Giáo viên đã ký xác nhận bảng kê thù lao thành công!');
  };

  const handleAccountantApprove = (id: string) => {
    setSheets((prev) =>
      prev.map((s) =>
        s.id === id
          ? {
              ...s,
              status: 'Kế toán duyệt',
              approvedByAccountantAt: new Date().toLocaleString('vi-VN'),
            }
          : s
      )
    );
    alert('Kế toán thanh toán đã duyệt bảng kê!');
  };

  const handleTransferToExpense = (id: string) => {
    setSheets((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: 'Đã chuyển đề xuất chi' } : s))
    );
    alert('Đã tự động lập Phiếu Đề xuất chi (MH-15) chuyển sang Luồng A kiểm soát chi!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-14</span>
            <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold flex items-center">
              <Smartphone className="w-3 h-3 mr-1" /> Tối ưu Mobile
            </span>
            <h1 className="text-xl font-bold text-slate-900">Bảng kê thù lao giáo viên cuối khóa</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Tổng hợp doanh thu lớp học, tỷ lệ %, thuế TNCN khấu trừ 10%, chữ ký xác nhận của GV và chuyển đề xuất chi
          </p>
        </div>

        <button
          onClick={() => alert('Đang xuất file Excel lệnh chi ngân hàng kèm số tài khoản giáo viên...')}
          className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2 rounded-lg text-sm font-semibold transition cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>Xuất file chi trả ngân hàng</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b border-slate-200">
            <tr>
              <th className="px-4 py-3">Mã bảng kê</th>
              <th className="px-4 py-3">Giáo viên</th>
              <th className="px-4 py-3">Lớp học</th>
              <th className="px-4 py-3 text-right">Tổng doanh thu</th>
              <th className="px-4 py-3 text-center">Tỷ lệ %</th>
              <th className="px-4 py-3 text-right">Tổng thù lao</th>
              <th className="px-4 py-3 text-right">Thuế TNCN (10%)</th>
              <th className="px-4 py-3 text-right">Thực nhận</th>
              <th className="px-4 py-3">Trạng thái</th>
              <th className="px-4 py-3 text-right">Thao tác quy trình</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {sheets.map((s) => (
              <tr key={s.id} className="hover:bg-slate-50/80 transition">
                <td className="px-4 py-3 font-mono font-bold text-blue-600 text-xs">{s.sheetCode}</td>
                <td className="px-4 py-3">
                  <div className="font-bold text-slate-900">{s.teacherName}</div>
                  <div className="text-[10px] text-slate-500">Mã GV: {s.teacherId}</div>
                </td>
                <td className="px-4 py-3 text-xs">
                  <div className="font-semibold text-slate-800">{s.className}</div>
                  <div className="font-mono text-slate-500">{s.classCode}</div>
                </td>
                <td className="px-4 py-3 text-right font-mono font-semibold text-slate-900">
                  {s.totalRevenue.toLocaleString('vi-VN')} đ
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-xs">
                    {s.ratePercent}%
                  </span>
                </td>
                <td className="px-4 py-3 text-right font-mono font-semibold text-slate-800">
                  {s.grossAmount.toLocaleString('vi-VN')} đ
                </td>
                <td className="px-4 py-3 text-right font-mono text-rose-600">
                  -{s.taxAmount.toLocaleString('vi-VN')} đ
                </td>
                <td className="px-4 py-3 text-right font-mono font-bold text-emerald-700 text-base">
                  {s.netAmount.toLocaleString('vi-VN')} đ
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={s.status} />
                  {s.confirmedByTeacherAt && (
                    <div className="text-[10px] text-slate-500 mt-0.5">GV xác nhận: {s.confirmedByTeacherAt}</div>
                  )}
                </td>
                <td className="px-4 py-3 text-right space-x-1.5 whitespace-nowrap">
                  {s.status === 'Nháp' && (
                    <button
                      onClick={() => handleTeacherConfirm(s.id)}
                      className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-white rounded text-xs font-semibold"
                    >
                      GV Xác nhận
                    </button>
                  )}
                  {s.status === 'Giáo viên xác nhận' && (
                    <button
                      onClick={() => handleAccountantApprove(s.id)}
                      className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-semibold"
                    >
                      Kế toán duyệt
                    </button>
                  )}
                  {s.status === 'Kế toán duyệt' && (
                    <button
                      onClick={() => handleTransferToExpense(s.id)}
                      className="inline-flex items-center px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-semibold"
                    >
                      <span>Tạo Đề xuất chi</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
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

