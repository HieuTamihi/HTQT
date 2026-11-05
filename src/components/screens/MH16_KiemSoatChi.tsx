import React, { useState } from 'react';
import {
  ShieldAlert,
  CheckSquare,
  AlertTriangle,
  RotateCcw,
  PauseCircle,
  CheckCircle2,
  FileCheck2,
  DollarSign,
} from 'lucide-react';
import { MOCK_EXPENSE_REQUESTS } from '../../data/mockData';
import { ExpenseRequest } from '../../types';
import { StatusBadge } from '../common/StatusBadge';

export const MH16_KiemSoatChi: React.FC = () => {
  const [selectedReq, setSelectedReq] = useState<ExpenseRequest>(MOCK_EXPENSE_REQUESTS[2]); // EXP-03
  const [checklist, setChecklist] = useState({
    invoiceValid: true,
    contractAttached: true,
    budgetAvailable: true,
    acceptanceSigned: false, // Còn thiếu
  });
  const [actionReason, setActionReason] = useState('');
  const [showActionModal, setShowActionModal] = useState<'return' | 'pause' | null>(null);

  const budgetRemaining = 385000000; // Số dư dự toán mục chi này

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-16</span>
            <h1 className="text-xl font-bold text-slate-900">Kiểm soát chi & Thẩm tra hồ sơ thanh toán</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Dành cho Kế toán thanh toán: kiểm tra checklist tính pháp lý, đối chiếu số dư dự toán và cảnh báo rủi ro chia tách gói chi
          </p>
        </div>
      </div>

      {/* Cảnh báo chia tách gói chi */}
      <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 flex items-start space-x-3 text-xs text-amber-900">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <div className="font-bold uppercase tracking-wider text-amber-950">
            Hệ thống phát hiện dấu hiệu chia tách khoản chi:
          </div>
          <p className="mt-0.5">
            Phòng TC-HC-QT vừa lập 2 phiếu chi trong vòng 7 ngày cho cùng nhà cung cấp với tổng giá trị 95.000.000 đ (gần ngưỡng chỉ định thầu 100 triệu). Kế toán thanh toán cần yêu cầu giải trình gộp gói.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Danh sách phiếu chờ kiểm soát */}
        <div className="lg:col-span-5 bg-white rounded-xl shadow-xs border border-slate-200 p-4 space-y-3">
          <h3 className="font-bold text-slate-800 text-sm border-b pb-2">
            Hồ sơ chi chờ kiểm soát ({MOCK_EXPENSE_REQUESTS.length})
          </h3>
          <div className="space-y-2">
            {MOCK_EXPENSE_REQUESTS.map((req) => (
              <div
                key={req.id}
                onClick={() => setSelectedReq(req)}
                className={`p-3 rounded-xl border transition cursor-pointer text-xs space-y-1 ${
                  selectedReq.id === req.id
                    ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20'
                    : 'border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono font-bold text-blue-700">{req.requestCode}</span>
                  <StatusBadge status={req.status} />
                </div>
                <div className="font-semibold text-slate-900 line-clamp-1">{req.content}</div>
                <div className="flex justify-between items-center pt-1 text-slate-500">
                  <span>{req.creatorName}</span>
                  <span className="font-mono font-bold text-slate-900">
                    {req.amount.toLocaleString('vi-VN')} đ
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Thẩm tra chi tiết & Checklist */}
        <div className="lg:col-span-7 bg-white rounded-xl shadow-xs border border-slate-200 p-6 space-y-5">
          <div className="flex items-center justify-between border-b pb-3">
            <div>
              <span className="text-xs text-blue-600 font-mono font-bold">{selectedReq.requestCode}</span>
              <h2 className="font-bold text-slate-900 text-base">{selectedReq.content}</h2>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400">Số tiền đề nghị:</span>
              <div className="text-xl font-bold text-blue-700 font-mono">
                {selectedReq.amount.toLocaleString('vi-VN')} đ
              </div>
            </div>
          </div>

          {/* Số dư dự toán */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-slate-500">Mục chi ngân sách:</span>
              <div className="font-semibold text-slate-800">{selectedReq.budgetCategory}</div>
            </div>
            <div>
              <span className="text-slate-500">Số dư dự toán còn lại:</span>
              <div className="font-mono font-bold text-emerald-700">
                {budgetRemaining.toLocaleString('vi-VN')} đ (Đủ bảo đảm)
              </div>
            </div>
          </div>

          {/* Checklist thẩm tra hồ sơ */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center space-x-1.5">
              <CheckSquare className="w-4 h-4 text-blue-600" />
              <span>Checklist thẩm tra hồ sơ pháp lý bắt buộc</span>
            </h4>

            <div className="space-y-2 text-xs">
              <label className="flex items-center space-x-2.5 p-2 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.invoiceValid}
                  onChange={(e) => setChecklist({ ...checklist, invoiceValid: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="font-medium text-slate-800">
                  Hóa đơn điện tử hợp lệ (Đã tra cứu Tổng cục Thuế)
                </span>
              </label>

              <label className="flex items-center space-x-2.5 p-2 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.contractAttached}
                  onChange={(e) => setChecklist({ ...checklist, contractAttached: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="font-medium text-slate-800">
                  Hợp đồng kinh tế và cam kết bảo hành kèm theo
                </span>
              </label>

              <label className="flex items-center space-x-2.5 p-2 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.acceptanceSigned}
                  onChange={(e) => setChecklist({ ...checklist, acceptanceSigned: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="font-medium text-slate-800">
                  Biên bản nghiệm thu hoàn thành có đầy đủ chữ ký 2 bên
                </span>
              </label>

              <label className="flex items-center space-x-2.5 p-2 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checklist.budgetAvailable}
                  onChange={(e) => setChecklist({ ...checklist, budgetAvailable: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="font-medium text-slate-800">
                  Phù hợp với dự toán được giao và quy chế chi tiêu nội bộ
                </span>
              </label>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-end gap-2 pt-4 border-t border-slate-100">
            <button
              onClick={() => setShowActionModal('return')}
              className="px-3.5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg text-xs font-semibold flex items-center space-x-1 border border-rose-200 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Trả lại hồ sơ</span>
            </button>

            <button
              onClick={() => setShowActionModal('pause')}
              className="px-3.5 py-2 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-lg text-xs font-semibold flex items-center space-x-1 border border-amber-200 cursor-pointer"
            >
              <PauseCircle className="w-3.5 h-3.5" />
              <span>Tạm dừng (Bổ sung chứng từ)</span>
            </button>

            <button
              onClick={() => {
                if (!checklist.acceptanceSigned) {
                  alert('Hồ sơ chưa tick đủ checklist (chưa có biên bản nghiệm thu)! Vui lòng kiểm tra lại.');
                  return;
                }
                alert('Đã kiểm soát xong hồ sơ! Phiếu chi đã được chuyển tới Hộp duyệt Ban Giám đốc (MH-17).');
              }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs cursor-pointer flex items-center space-x-1"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Chuyển Ban Giám đốc phê duyệt</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal Trả lại / Tạm dừng kèm căn cứ */}
      {showActionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full border border-slate-200 p-6 space-y-4">
            <h3 className="font-bold text-slate-900 text-base">
              {showActionModal === 'return' ? 'Trả lại hồ sơ đề xuất chi' : 'Tạm dừng xử lý khoản chi'}
            </h3>
            <p className="text-xs text-slate-500">
              Nhập căn cứ pháp lý hoặc yêu cầu chứng từ cần bổ sung để người lập phiếu hoàn thiện:
            </p>
            <textarea
              rows={3}
              required
              value={actionReason}
              onChange={(e) => setActionReason(e.target.value)}
              placeholder="Ví dụ: Thiếu biên bản nghiệm thu kỹ thuật và hóa đơn VAT chưa có chữ ký số bên bán..."
              className="w-full text-xs border rounded-lg p-2.5 border-slate-300 outline-none"
            />
            <div className="flex justify-end space-x-2 pt-2 border-t">
              <button
                onClick={() => setShowActionModal(null)}
                className="px-4 py-2 text-xs text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  alert(`Đã lưu ý kiến căn cứ: "${actionReason}". Đã chuyển thông báo cho phòng ban đề xuất!`);
                  setShowActionModal(null);
                  setActionReason('');
                }}
                className="px-4 py-2 text-xs bg-rose-600 text-white rounded-lg font-bold"
              >
                Xác nhận gửi ý kiến
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

