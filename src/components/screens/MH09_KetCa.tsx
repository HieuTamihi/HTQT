import React, { useState } from 'react';
import {
  Receipt,
  CheckCircle,
  AlertTriangle,
  Smartphone,
  DollarSign,
  Calculator,
  Send,
  FileCheck,
} from 'lucide-react';

export const MH09_KetCa: React.FC = () => {
  const [cashCounted, setCashCounted] = useState<number>(3600000);
  const [explanation, setExplanation] = useState('');
  const [status, setStatus] = useState<'Chưa nộp' | 'Đã lập phiếu' | 'Thủ quỹ đã xác nhận'>('Chưa nộp');

  // Doanh thu theo phương thức theo hệ thống ghi nhận
  const revenueSystem = {
    cash: 3600000,
    bankTransfer: 4200000,
    card: 1500000,
    other: 0,
    total: 9300000,
  };

  const diffCash = cashCounted - revenueSystem.cash;

  const handleCreateFundSlip = (e: React.FormEvent) => {
    e.preventDefault();
    if (diffCash !== 0 && !explanation.trim()) {
      alert('Phát hiện chênh lệch tiền mặt! Bắt buộc phải nhập nội dung giải trình theo quy chế.');
      return;
    }
    setStatus('Đã lập phiếu');
    alert('Đã lập Phiếu nộp quỹ ca thành công! Đang chuyển Thủ quỹ ký nhận.');
  };

  const handleTreasurerConfirm = () => {
    setStatus('Thủ quỹ đã xác nhận');
    alert('Thủ quỹ đã ký duyệt xác nhận đủ tiền nộp quỹ!');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-09</span>
            <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold flex items-center">
              <Smartphone className="w-3 h-3 mr-1" /> Tối ưu Mobile
            </span>
            <h1 className="text-xl font-bold text-slate-900">Bàn giao & Kết ca thu ngân (Nộp quỹ)</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Tổng hợp doanh thu ca trực theo các phương thức thanh toán, đối chiếu kiểm đếm tiền mặt và thủ quỹ xác nhận
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <span
            className={`px-3 py-1 text-xs font-bold rounded-full border ${
              status === 'Thủ quỹ đã xác nhận'
                ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                : status === 'Đã lập phiếu'
                ? 'bg-blue-50 text-blue-700 border-blue-300'
                : 'bg-amber-50 text-amber-700 border-amber-300'
            }`}
          >
            Trạng thái: {status}
          </span>
        </div>
      </div>

      {/* Grid Doanh thu theo phương thức */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-500 font-medium">💵 Tiền mặt hệ thống</span>
          <div className="text-lg font-bold text-slate-900 mt-1">
            {revenueSystem.cash.toLocaleString('vi-VN')} đ
          </div>
          <span className="text-[10px] text-slate-400">3 Đơn quầy</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-500 font-medium">📱 Chuyển khoản (VietQR)</span>
          <div className="text-lg font-bold text-blue-600 mt-1">
            {revenueSystem.bankTransfer.toLocaleString('vi-VN')} đ
          </div>
          <span className="text-[10px] text-slate-400">Vào tài khoản VCB</span>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-500 font-medium">💳 Quẹt thẻ POS</span>
          <div className="text-lg font-bold text-purple-600 mt-1">
            {revenueSystem.card.toLocaleString('vi-VN')} đ
          </div>
          <span className="text-[10px] text-slate-400">1 Giao dịch</span>
        </div>
        <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 shadow-xs">
          <span className="text-xs text-emerald-800 font-bold uppercase">TỔNG THU CA</span>
          <div className="text-xl font-black text-emerald-700 mt-1">
            {revenueSystem.total.toLocaleString('vi-VN')} đ
          </div>
          <span className="text-[10px] text-emerald-700">Ca sáng 04/11/2026</span>
        </div>
      </div>

      {/* Bảng kiểm đếm tiền mặt */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 space-y-4">
        <div className="flex items-center justify-between border-b pb-3 border-slate-100">
          <div className="flex items-center space-x-2">
            <Calculator className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-slate-800 text-sm">
              Kiểm đếm tiền mặt thực tế bàn giao cho Thủ quỹ
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Số tiền mặt thực đếm được tại két (VNĐ) <span className="text-rose-500">*</span>
            </label>
            <input
              type="number"
              value={cashCounted}
              onChange={(e) => setCashCounted(Number(e.target.value))}
              className="w-full text-lg font-mono font-bold text-slate-900 border border-slate-300 rounded-xl p-3 focus:border-blue-500 outline-none"
            />
            <div className="flex gap-2 mt-2">
              <button
                type="button"
                onClick={() => setCashCounted(3600000)}
                className="text-xs bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded text-slate-700 cursor-pointer"
              >
                Khớp chuẩn (3.600.000 đ)
              </button>
              <button
                type="button"
                onClick={() => setCashCounted(3500000)}
                className="text-xs bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded text-slate-700 cursor-pointer"
              >
                Giả lập thiếu (3.500.000 đ)
              </button>
            </div>
          </div>

          {/* Hộp hiển thị chênh lệch */}
          <div
            className={`p-4 rounded-xl border flex flex-col justify-center ${
              diffCash === 0
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-rose-50 border-rose-200 text-rose-800'
            }`}
          >
            <div className="text-xs font-semibold uppercase">Chênh lệch tiền mặt kiểm đếm</div>
            <div className="text-2xl font-black mt-1">
              {diffCash === 0 ? '0 đ (Hoàn toàn trùng khớp)' : `${diffCash.toLocaleString('vi-VN')} đ`}
            </div>
            {diffCash !== 0 && (
              <span className="text-xs text-rose-600 mt-1 font-medium">
                {diffCash < 0 ? '⚠️ Thiếu hụt so với hóa đơn hệ thống' : '⚠️ Thừa so với hóa đơn hệ thống'}
              </span>
            )}
          </div>
        </div>

        {/* Ô giải trình nếu chênh lệch */}
        {diffCash !== 0 && (
          <div className="space-y-1.5 pt-2">
            <label className="block text-xs font-bold text-rose-700 uppercase">
              Giải trình lý do chênh lệch tiền mặt <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={2}
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="Nhập chi tiết lý do chênh lệch (ví dụ: Trả lại tiền thừa cho học viên lớp khiêu vũ, v.v.)..."
              className="w-full text-sm border border-rose-300 rounded-lg p-2.5 focus:border-rose-500 outline-none bg-rose-50/20"
            />
          </div>
        )}

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-end gap-3">
          {status === 'Chưa nộp' && (
            <button
              onClick={handleCreateFundSlip}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-md shadow-blue-600/30 flex items-center justify-center space-x-2 transition cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Lập phiếu nộp quỹ ca</span>
            </button>
          )}

          {status === 'Đã lập phiếu' && (
            <button
              onClick={handleTreasurerConfirm}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-md shadow-emerald-600/30 flex items-center justify-center space-x-2 transition cursor-pointer"
            >
              <FileCheck className="w-4 h-4" />
              <span>Thủ quỹ ký nhận nộp quỹ</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

