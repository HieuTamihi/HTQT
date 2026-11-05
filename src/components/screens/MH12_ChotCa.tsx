import React, { useState } from 'react';
import { Lock, Unlock, Calendar, CheckCircle2, ShieldCheck, Printer, AlertTriangle } from 'lucide-react';

export const MH12_ChotCa: React.FC = () => {
  const [isLocked, setIsLocked] = useState(false);
  const [reportDate, setReportDate] = useState('04/11/2026');

  const handleLock = () => {
    setIsLocked(true);
    alert('Đã chốt sổ và khóa ngày cơ sở lúc 21:00! Mọi thao tác sửa đổi hóa đơn và đơn hàng trong ngày đã bị đóng.');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-12</span>
            <h1 className="text-xl font-bold text-slate-900">Chốt ca & Khóa ngày cơ sở (21:00)</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Bảng tổng hợp thu chi trong ngày của cơ sở, thực hiện chốt sổ hằng ngày lúc 21h theo quy định
          </p>
        </div>

        <div className="flex items-center space-x-2">
          {isLocked ? (
            <div className="inline-flex items-center space-x-2 bg-rose-50 border border-rose-300 text-rose-800 px-4 py-2 rounded-lg text-sm font-bold">
              <Lock className="w-4 h-4 text-rose-600" />
              <span>ĐÃ KHÓA SỔ NGÀY (KHÔNG CHO PHÉP SỬA)</span>
            </div>
          ) : (
            <button
              onClick={handleLock}
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm shadow-blue-600/30 transition cursor-pointer"
            >
              <Lock className="w-4 h-4" />
              <span>Xác nhận & Khóa ngày (21:00)</span>
            </button>
          )}
        </div>
      </div>

      {/* Status banner */}
      <div
        className={`p-4 rounded-xl border flex items-center justify-between ${
          isLocked
            ? 'bg-rose-50 border-rose-200 text-rose-900'
            : 'bg-amber-50 border-amber-200 text-amber-900'
        }`}
      >
        <div className="flex items-center space-x-3">
          {isLocked ? <Lock className="w-5 h-5 text-rose-600" /> : <Unlock className="w-5 h-5 text-amber-600" />}
          <div>
            <div className="font-bold text-sm">
              {isLocked
                ? 'Dữ liệu ngày 04/11/2026 đã được Trưởng cơ sở và Kế toán thu khóa sổ!'
                : 'Ca trực đang mở. Vui lòng rà soát đầy đủ biên nhận trước khi chốt sổ lúc 21:00.'}
            </div>
            <div className="text-xs opacity-80">
              Quy chuẩn CVHLĐ: Sau 21:00 mỗi ngày, hệ thống tự động chốt doanh thu để phục vụ hạch toán MISA kế toán.
            </div>
          </div>
        </div>

        <button
          onClick={() => alert('Đang xuất file PDF bảng kê ngày...')}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-xs"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>In Bảng kê ngày</span>
        </button>
      </div>

      {/* Summary table */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 space-y-4">
        <h3 className="font-bold text-slate-900 text-base">Bảng tổng hợp thu tiền ngày 04/11/2026 - Trụ sở</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-xs text-slate-500">Tổng số đơn hàng ghi nhận</span>
            <div className="text-xl font-bold text-slate-900 mt-1">12 Đơn</div>
            <span className="text-xs text-emerald-600">100% đã xuất hóa đơn</span>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-xs text-slate-500">Tổng doanh thu thực thu</span>
            <div className="text-xl font-bold text-blue-700 mt-1">21.800.000 đ</div>
            <span className="text-xs text-slate-500">Tiền mặt: 8.600.000 đ | CK: 13.200.000 đ</span>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <span className="text-xs text-slate-500">Trạng thái quỹ tiền mặt</span>
            <div className="text-xl font-bold text-emerald-600 mt-1">Đã nộp thủ quỹ</div>
            <span className="text-xs text-slate-500">Phiếu nộp quỹ số: PNQ-0411-01</span>
          </div>
        </div>
      </div>
    </div>
  );
};

