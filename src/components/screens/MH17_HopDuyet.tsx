import React, { useState } from 'react';
import {
  Inbox,
  Check,
  RotateCcw,
  X,
  Paperclip,
  FileText,
  User,
  Building,
  ShieldCheck,
  Eye,
} from 'lucide-react';
import { MOCK_EXPENSE_REQUESTS } from '../../data/mockData';
import { ExpenseRequest } from '../../types';

export const MH17_HopDuyet: React.FC = () => {
  const [requests, setRequests] = useState<ExpenseRequest[]>(
    MOCK_EXPENSE_REQUESTS.filter((r) => r.status === 'Chờ duyệt')
  );
  const [selectedReq, setSelectedReq] = useState<ExpenseRequest | null>(requests[0] || null);
  const [opinion, setOpinion] = useState('');

  const handleAction = (decision: 'Đồng ý' | 'Trả lại' | 'Từ chối') => {
    if (!selectedReq) return;
    alert(`Ban Giám đốc đã quyết định [${decision}] cho phiếu [${selectedReq.requestCode}]. Ý kiến: "${opinion || 'Đồng ý duyệt theo thẩm quyền'}"`);
    setRequests(requests.filter((r) => r.id !== selectedReq.id));
    setSelectedReq(null);
    setOpinion('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-17</span>
            <span className="px-2 py-0.5 text-xs font-bold bg-amber-100 text-amber-800 rounded">
              Yêu cầu 2FA
            </span>
            <h1 className="text-xl font-bold text-slate-900">Hộp duyệt chi - Ban Giám đốc</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Phê duyệt các khoản chi hoạt động, thù lao và hợp đồng kinh tế theo phân cấp thẩm quyền quy định
          </p>
        </div>

        <div className="text-xs bg-slate-100 px-3 py-1.5 rounded-lg text-slate-600 font-medium">
          Còn <strong className="text-blue-700">{requests.length}</strong> phiếu cần xử lý
        </div>
      </div>

      {requests.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-3">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
            <Check className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-800 text-base">Hộp duyệt trống</h3>
          <p className="text-xs text-slate-500">Tất cả các khoản đề xuất chi đã được Ban Giám đốc xử lý hoàn tất!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* List phiếu bên trái */}
          <div className="lg:col-span-5 space-y-3">
            {requests.map((r) => (
              <div
                key={r.id}
                onClick={() => setSelectedReq(r)}
                className={`p-4 rounded-xl border transition cursor-pointer bg-white space-y-2 ${
                  selectedReq?.id === r.id
                    ? 'border-blue-600 ring-2 ring-blue-500/20 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono font-bold text-blue-600 text-xs">{r.requestCode}</span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                    {r.flowType}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{r.content}</h4>
                <div className="flex justify-between items-center pt-2 text-xs border-t border-slate-100">
                  <span className="text-slate-500">{r.creatorName}</span>
                  <span className="font-mono font-bold text-rose-600 text-sm">
                    {r.amount.toLocaleString('vi-VN')} đ
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Chi tiết thẩm tra bên phải */}
          {selectedReq && (
            <div className="lg:col-span-7 bg-white rounded-xl shadow-xs border border-slate-200 p-6 space-y-5">
              <div className="border-b pb-4 space-y-1">
                <div className="text-xs font-mono text-blue-600 font-bold">
                  {selectedReq.requestCode} • {selectedReq.flowType}
                </div>
                <h2 className="text-lg font-bold text-slate-900">{selectedReq.content}</h2>
                <div className="text-xs text-slate-500">
                  Phòng ban: <strong>{selectedReq.department}</strong> | Ngày gửi: {selectedReq.createdAt}
                </div>
              </div>

              {/* Số tiền và thẩm tra kế toán */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Số tiền đề nghị duyệt chi:</span>
                  <span className="text-xl font-bold font-mono text-rose-600">
                    {selectedReq.amount.toLocaleString('vi-VN')} đ
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Nguồn kinh phí:</span>
                  <span className="font-semibold text-slate-800">{selectedReq.fundSource}</span>
                </div>
                {selectedReq.accountantNote && (
                  <div className="pt-2 border-t border-slate-200 text-emerald-800">
                    <strong>Ý kiến kiểm soát chi của Kế toán:</strong> {selectedReq.accountantNote}
                  </div>
                )}
              </div>

              {/* Hồ sơ đính kèm */}
              <div className="space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700 flex items-center">
                  <Paperclip className="w-3.5 h-3.5 mr-1 text-slate-500" />
                  <span>Hồ sơ chứng từ đính kèm (3 tệp)</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 flex justify-between items-center cursor-pointer">
                    <span className="font-medium text-slate-800 truncate">1. Bang_ke_thu_lao_T10.pdf</span>
                    <Eye className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  </div>
                  <div className="p-2.5 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 flex justify-between items-center cursor-pointer">
                    <span className="font-medium text-slate-800 truncate">2. Chung_tu_thue_TNCN.pdf</span>
                    <Eye className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  </div>
                </div>
              </div>

              {/* Ô nhập ý kiến lãnh đạo */}
              <div className="space-y-1.5 pt-2">
                <label className="block text-xs font-bold text-slate-700 uppercase">
                  Ý kiến chỉ đạo của Ban Giám đốc:
                </label>
                <textarea
                  rows={2}
                  value={opinion}
                  onChange={(e) => setOpinion(e.target.value)}
                  placeholder="Ghi rõ ý kiến chỉ đạo nếu có điều kiện thanh toán hoặc lý do trả lại..."
                  className="w-full text-xs border border-slate-300 rounded-lg p-2.5 outline-none focus:border-blue-500"
                />
              </div>

              {/* 3 Nút Quyết định */}
              <div className="pt-4 border-t flex flex-wrap items-center justify-end gap-2.5">
                <button
                  onClick={() => handleAction('Từ chối')}
                  className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-xl text-xs font-bold transition flex items-center space-x-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Từ chối chi</span>
                </button>
                <button
                  onClick={() => handleAction('Trả lại')}
                  className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 rounded-xl text-xs font-bold transition flex items-center space-x-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Trả lại bổ sung</span>
                </button>
                <button
                  onClick={() => handleAction('Đồng ý')}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-600/30 transition flex items-center space-x-1 cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>Đồng ý phê duyệt</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

