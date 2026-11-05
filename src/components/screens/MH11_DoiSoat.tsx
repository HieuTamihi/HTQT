import React, { useState } from 'react';
import {
  CheckCheck,
  Filter,
  Link,
  MessageSquare,
  AlertCircle,
  Calendar,
  Search,
} from 'lucide-react';
import { MOCK_RECONCILE_RECORDS } from '../../data/mockData';
import { ReconcileRecord } from '../../types';
import { StatusBadge } from '../common/StatusBadge';

export const MH11_DoiSoat: React.FC = () => {
  const [records, setRecords] = useState<ReconcileRecord[]>(MOCK_RECONCILE_RECORDS);
  const [filterType, setFilterType] = useState<'ALL' | 'MATCH' | 'EXCEPTION'>('ALL');
  const [selectedRecord, setSelectedRecord] = useState<ReconcileRecord | null>(null);
  const [manualModal, setManualModal] = useState<{ isOpen: boolean; record: ReconcileRecord | null }>({
    isOpen: false,
    record: null,
  });
  const [explanationText, setExplanationText] = useState('');
  const [manualReason, setManualReason] = useState('');

  const filtered = records.filter((r) => {
    if (filterType === 'MATCH') return r.status === 'Khớp';
    if (filterType === 'EXCEPTION') return r.status !== 'Khớp';
    return true;
  });

  const handleManualMatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualModal.record) return;
    setRecords((prev) =>
      prev.map((r) =>
        r.id === manualModal.record?.id
          ? {
              ...r,
              status: 'Khớp',
              manualMatchReason: manualReason,
            }
          : r
      )
    );
    alert(`Đã ghép tay thành công cho đơn [${manualModal.record.orderCode}]!`);
    setManualModal({ isOpen: false, record: null });
    setManualReason('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-11</span>
            <h1 className="text-xl font-bold text-slate-900">
              Đối soát 3 bên: Đơn hàng – Hóa đơn – Tiền ngân hàng
            </h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Bảng đối soát tự động hằng ngày theo cơ sở. Phát hiện ngoại lệ thiếu hóa đơn, lệch số tiền hoặc trích thiếu mã đơn.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex space-x-2">
          <button
            onClick={() => setFilterType('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              filterType === 'ALL'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Tất cả ({records.length})
          </button>
          <button
            onClick={() => setFilterType('MATCH')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              filterType === 'MATCH'
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
            }`}
          >
            Khớp ({records.filter((r) => r.status === 'Khớp').length})
          </button>
          <button
            onClick={() => setFilterType('EXCEPTION')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              filterType === 'EXCEPTION'
                ? 'bg-rose-600 text-white'
                : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
            }`}
          >
            Ngoại lệ ({records.filter((r) => r.status !== 'Khớp').length})
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b border-slate-200">
            <tr>
              <th className="px-4 py-3">Mã đơn (eShop)</th>
              <th className="px-4 py-3 text-right">Tiền đơn hàng</th>
              <th className="px-4 py-3">Số hóa đơn ĐT</th>
              <th className="px-4 py-3 text-right">Tiền hóa đơn</th>
              <th className="px-4 py-3">Mã GD & Tiền Bank</th>
              <th className="px-4 py-3">Trạng thái đối soát</th>
              <th className="px-4 py-3">Giải trình / Ghi chú</th>
              <th className="px-4 py-3 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/80 transition">
                <td className="px-4 py-3 font-mono font-bold text-blue-700 text-xs">
                  {item.orderCode}
                </td>
                <td className="px-4 py-3 text-right font-mono font-semibold text-slate-900">
                  {item.amountOrder.toLocaleString('vi-VN')} đ
                </td>
                <td className="px-4 py-3 font-mono text-xs">
                  {item.invoiceCode ? (
                    <span className="text-slate-800">{item.invoiceCode}</span>
                  ) : (
                    <span className="text-rose-500 italic">Chưa phát hành</span>
                  )}
                </td>
                <td className="px-4 py-3 text-right font-mono text-slate-900">
                  {item.amountInvoice > 0 ? `${item.amountInvoice.toLocaleString('vi-VN')} đ` : '-'}
                </td>
                <td className="px-4 py-3">
                  <div className="font-mono text-xs font-semibold text-slate-800">{item.bankTxId || '-'}</div>
                  <div className="text-xs font-mono text-emerald-700 font-bold">
                    {item.amountBank > 0 ? `${item.amountBank.toLocaleString('vi-VN')} đ` : '-'}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={item.status} />
                  {item.manualMatchReason && (
                    <div className="text-[10px] text-blue-600 font-medium mt-0.5">
                      ✓ Ghép tay: {item.manualMatchReason}
                    </div>
                  )}
                </td>
                <td className="px-4 py-3 text-xs text-slate-600 max-w-xs">
                  {item.explanation || '-'}
                </td>
                <td className="px-4 py-3 text-right space-x-2 whitespace-nowrap">
                  {item.status !== 'Khớp' && (
                    <button
                      onClick={() => setManualModal({ isOpen: true, record: item })}
                      className="inline-flex items-center text-xs text-blue-700 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded border border-blue-200 transition cursor-pointer font-semibold"
                    >
                      <Link className="w-3 h-3 mr-1" /> Ghép tay
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Ghép tay */}
      {manualModal.isOpen && manualModal.record && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full border border-slate-200 p-6 space-y-4">
            <h3 className="font-bold text-slate-900 text-base">Ghép tay thủ công đối soát</h3>
            <p className="text-xs text-slate-500">
              Đơn hàng: <strong className="text-slate-800">{manualModal.record.orderCode}</strong> - Số tiền: {manualModal.record.amountOrder.toLocaleString('vi-VN')} đ
            </p>

            <form onSubmit={handleManualMatch} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Căn cứ / Lý do ghép tay ngoại lệ <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={manualReason}
                  onChange={(e) => setManualReason(e.target.value)}
                  placeholder="Ghi rõ lý do (ví dụ: Đã đối chiếu ảnh chụp ủy nhiệm chi ngân hàng khớp số ĐT học viên)..."
                  className="w-full border rounded-lg p-2.5 text-xs border-slate-300 outline-none"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setManualModal({ isOpen: false, record: null })}
                  className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                >
                  Xác nhận Ghép tay
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

