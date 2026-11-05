import React, { useState } from 'react';
import { Layers, Plus, Ban, CheckCircle2, UserCheck, Search, AlertCircle } from 'lucide-react';
import { MOCK_CARD_BATCHES } from '../../data/mockData';
import { CardBatch } from '../../types';
import { CancelModal } from '../common/CancelModal';

export const MH06_LoThe: React.FC = () => {
  const [batches, setBatches] = useState<CardBatch[]>(MOCK_CARD_BATCHES);
  const [cancelModal, setCancelModal] = useState<{ isOpen: boolean; batchCode: string }>({
    isOpen: false,
    batchCode: '',
  });
  const [showAssignModal, setShowAssignModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-06</span>
            <h1 className="text-xl font-bold text-slate-900">Quản lý cấp phát lô thẻ giấy</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Giao dải số thẻ giấy cho nhân viên ghi danh, theo dõi tồn kho thẻ, hủy thẻ hư hỏng có lưu lý do
          </p>
        </div>

        <button
          onClick={() => setShowAssignModal(true)}
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm shadow-blue-600/30 transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Giao lô thẻ mới</span>
        </button>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium">Tổng thẻ đã giao</div>
          <div className="text-2xl font-bold text-slate-900 mt-1">1.300</div>
          <div className="text-[11px] text-blue-600 mt-0.5">3 Lô đang quản lý</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium">Số thẻ đã phát hành</div>
          <div className="text-2xl font-bold text-emerald-600 mt-1">1.020</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Tỷ lệ dùng 78.4%</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium">Số thẻ còn tồn dải</div>
          <div className="text-2xl font-bold text-blue-600 mt-1">273</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Đang nằm tại quầy</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500 font-medium">Số thẻ đã hủy hỏng</div>
          <div className="text-2xl font-bold text-rose-600 mt-1">7</div>
          <div className="text-[11px] text-rose-600 mt-0.5">Có biên bản lý do</div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b border-slate-200">
            <tr>
              <th className="px-4 py-3">Mã lô</th>
              <th className="px-4 py-3">Nhân sự nhận thẻ</th>
              <th className="px-4 py-3">Dải số serial</th>
              <th className="px-4 py-3 text-center">Tổng số</th>
              <th className="px-4 py-3 text-center">Đã phát</th>
              <th className="px-4 py-3 text-center">Hủy hỏng</th>
              <th className="px-4 py-3 text-center">Còn lại</th>
              <th className="px-4 py-3">Ngày giao</th>
              <th className="px-4 py-3">Trạng thái</th>
              <th className="px-4 py-3 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {batches.map((b) => (
              <tr key={b.id} className="hover:bg-slate-50/80 transition">
                <td className="px-4 py-3 font-mono font-bold text-blue-600">{b.batchCode}</td>
                <td className="px-4 py-3 font-medium text-slate-900">{b.assignedTo}</td>
                <td className="px-4 py-3 font-mono text-xs">
                  <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                    {b.startSerial} → {b.endSerial}
                  </span>
                </td>
                <td className="px-4 py-3 text-center font-semibold">{b.totalCards}</td>
                <td className="px-4 py-3 text-center text-emerald-600 font-semibold">{b.usedCards}</td>
                <td className="px-4 py-3 text-center text-rose-600 font-semibold">{b.cancelledCards}</td>
                <td className="px-4 py-3 text-center text-blue-600 font-bold">{b.remainCards}</td>
                <td className="px-4 py-3 text-xs text-slate-500">{b.dateAssigned}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center text-xs px-2.5 py-0.5 rounded-full font-medium ${
                      b.status === 'Đang phát hành'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                        : 'bg-slate-100 text-slate-600 border border-slate-300'
                    }`}
                  >
                    {b.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button
                    onClick={() => setCancelModal({ isOpen: true, batchCode: b.batchCode })}
                    className="inline-flex items-center text-xs text-rose-600 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 px-2 py-1 rounded border border-rose-200 transition"
                  >
                    <Ban className="w-3.5 h-3.5 mr-1" /> Báo hủy thẻ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Cancel Card */}
      <CancelModal
        isOpen={cancelModal.isOpen}
        title="Báo hủy thẻ giấy hư hỏng"
        targetName={`Lô ${cancelModal.batchCode}`}
        onClose={() => setCancelModal({ isOpen: false, batchCode: '' })}
        onConfirm={(reason) => {
          alert(`Đã ghi nhận biên bản hủy thẻ cho lô [${cancelModal.batchCode}]. Lý do: ${reason}`);
          setCancelModal({ isOpen: false, batchCode: '' });
        }}
      />

      {/* Modal Assign */}
      {showAssignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full border border-slate-200 p-6 space-y-4">
            <h3 className="font-bold text-slate-900 text-base">Giao dải số thẻ giấy mới</h3>
            <div className="space-y-3 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nhân sự nhận lô thẻ</label>
                <input
                  type="text"
                  placeholder="Họ tên nhân viên ghi danh..."
                  defaultValue="Lê Thu Trang (Quầy TS)"
                  className="w-full border rounded-lg p-2 text-sm border-slate-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Số serial bắt đầu</label>
                  <input type="number" defaultValue={20301} className="w-full border rounded-lg p-2 text-sm border-slate-300 font-mono" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Số serial kết thúc</label>
                  <input type="number" defaultValue={20600} className="w-full border rounded-lg p-2 text-sm border-slate-300 font-mono" />
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-2 pt-3 border-t">
              <button onClick={() => setShowAssignModal(false)} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg">
                Hủy
              </button>
              <button
                onClick={() => {
                  alert('Đã giao lô thẻ 300 số thành công!');
                  setShowAssignModal(false);
                }}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg font-semibold"
              >
                Xác nhận giao thẻ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

