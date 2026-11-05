import React, { useState } from 'react';
import {
  FileText,
  Plus,
  Paperclip,
  Search,
  CheckCircle,
  Clock,
  AlertCircle,
  FileCheck,
} from 'lucide-react';
import { MOCK_EXPENSE_REQUESTS } from '../../data/mockData';
import { ExpenseRequest } from '../../types';
import { StatusBadge } from '../common/StatusBadge';

export const MH15_DeXuatChi: React.FC = () => {
  const [requests, setRequests] = useState<ExpenseRequest[]>(MOCK_EXPENSE_REQUESTS);
  const [showModal, setShowModal] = useState(false);
  const [flowType, setFlowType] = useState<'Luồng A' | 'Luồng B'>('Luồng A');
  const [amount, setAmount] = useState<number>(25000000);
  const [content, setContent] = useState('');
  const [fundSource, setFundSource] = useState('Nguồn sự nghiệp có thu');

  const handleCreateRequest = (e: React.FormEvent) => {
    e.preventDefault();
    const newReq: ExpenseRequest = {
      id: `EXP-${Date.now()}`,
      requestCode: `PDC-2026-11-${Math.floor(100 + Math.random() * 900)}`,
      creatorName: 'Người dùng nội bộ (Tôi)',
      department: 'Phòng TC-HC-QT',
      facilityId: 'TS',
      content: content || 'Mua sắm bổ sung văn phòng phẩm quý 4/2026',
      amount: Number(amount),
      fundSource,
      budgetCategory: 'Văn phòng phẩm, tài liệu chuyên môn',
      flowType,
      status: 'Chờ kế toán',
      createdAt: new Date().toLocaleString('vi-VN'),
      attachmentCount: 2,
    };
    setRequests([newReq, ...requests]);
    setShowModal(false);
    alert('Đã lập Phiếu đề xuất chi thành công và gửi sang Kế toán thanh toán kiểm soát!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-15</span>
            <h1 className="text-xl font-bold text-slate-900">Lập & Theo dõi Đề xuất chi (Luồng A/B)</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Dành cho toàn thể CBCC/Đơn vị nội bộ: khởi tạo đề xuất thanh toán, chọn luồng kiểm soát và đính kèm hồ sơ chứng từ
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm shadow-blue-600/30 transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Lập phiếu đề xuất chi mới</span>
        </button>
      </div>

      {/* Luồng A/B Explanatory Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl space-y-1">
          <div className="font-bold text-blue-900 text-sm">Luồng A: Chi trong dự toán thường quy</div>
          <p className="text-xs text-blue-800 leading-relaxed">
            Áp dụng cho các khoản chi hoạt động nghiệp vụ thường xuyên, chi thù lao giảng dạy có trong dự toán năm đã duyệt. Phê duyệt qua Kế toán thanh toán → Giám đốc/Phó Giám đốc phụ trách.
          </p>
        </div>
        <div className="p-4 bg-purple-50/60 border border-purple-200 rounded-xl space-y-1">
          <div className="font-bold text-purple-900 text-sm">Luồng B: Ngoài dự toán / Dự án lớn</div>
          <p className="text-xs text-purple-800 leading-relaxed">
            Áp dụng cho các gói mua sắm tài sản, cải tạo cơ sở vật chất, hợp đồng lớn vượt thẩm quyền thường quy hoặc phát sinh ngoài dự toán năm. Yêu cầu thẩm định hồ sơ chặt chẽ và Ban Giám đốc họp duyệt.
          </p>
        </div>
      </div>

      {/* Table Requests */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b border-slate-200">
            <tr>
              <th className="px-4 py-3">Mã phiếu</th>
              <th className="px-4 py-3">Loại luồng</th>
              <th className="px-4 py-3">Người đề xuất / Phòng ban</th>
              <th className="px-4 py-3">Nội dung đề xuất chi</th>
              <th className="px-4 py-3 text-right">Số tiền đề xuất</th>
              <th className="px-4 py-3">Nguồn kinh phí</th>
              <th className="px-4 py-3 text-center">Hồ sơ</th>
              <th className="px-4 py-3">Trạng thái</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {requests.map((req) => (
              <tr key={req.id} className="hover:bg-slate-50/80 transition">
                <td className="px-4 py-3 font-mono font-bold text-blue-600 text-xs">
                  {req.requestCode}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-2 py-0.5 rounded font-bold ${
                      req.flowType === 'Luồng A'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {req.flowType}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="font-semibold text-slate-900">{req.creatorName}</div>
                  <div className="text-xs text-slate-500">{req.department}</div>
                </td>
                <td className="px-4 py-3 text-xs max-w-sm">
                  <div className="font-medium text-slate-900">{req.content}</div>
                  {req.contractNumber && (
                    <div className="text-[10px] text-blue-600 font-mono mt-0.5">
                      HĐ: {req.contractNumber}
                    </div>
                  )}
                </td>
                <td className="px-4 py-3 text-right font-mono font-bold text-slate-900 text-base">
                  {req.amount.toLocaleString('vi-VN')} đ
                </td>
                <td className="px-4 py-3 text-xs text-slate-600">{req.fundSource}</td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-flex items-center text-xs text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    <Paperclip className="w-3 h-3 mr-1" /> {req.attachmentCount} file
                  </span>
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={req.status} />
                  {req.accountantNote && (
                    <div className="text-[10px] text-amber-700 mt-1 line-clamp-1" title={req.accountantNote}>
                      Ý kiến KT: {req.accountantNote}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Lập phiếu */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full border border-slate-200 p-6 space-y-4">
            <h3 className="font-bold text-slate-900 text-base">Lập phiếu đề xuất chi mới</h3>
            <form onSubmit={handleCreateRequest} className="space-y-3 text-sm">
              <div className="flex gap-4">
                <label className="flex items-center space-x-2 cursor-pointer font-medium">
                  <input
                    type="radio"
                    name="flow"
                    checked={flowType === 'Luồng A'}
                    onChange={() => setFlowType('Luồng A')}
                  />
                  <span>Luồng A (Trong dự toán thường quy)</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer font-medium">
                  <input
                    type="radio"
                    name="flow"
                    checked={flowType === 'Luồng B'}
                    onChange={() => setFlowType('Luồng B')}
                  />
                  <span>Luồng B (Ngoài dự toán / Lớn)</span>
                </label>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nội dung đề xuất chi <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={2}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Ví dụ: Thanh toán tiền điện nước tháng 10/2026 cơ sở Trụ sở..."
                  className="w-full border rounded-lg p-2 text-sm border-slate-300 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Số tiền đề xuất (VNĐ) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full border rounded-lg p-2 text-sm font-mono font-bold border-slate-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Nguồn kinh phí</label>
                  <select
                    aria-label="Nguồn kinh phí"
                    value={fundSource}
                    onChange={(e) => setFundSource(e.target.value)}
                    className="w-full border rounded-lg p-2 text-sm border-slate-300 bg-white"
                  >
                    <option>Nguồn sự nghiệp có thu</option>
                    <option>Kinh phí Công đoàn cấp</option>
                    <option>Ngân sách Nhà nước</option>
                  </select>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1">
                <span className="font-semibold text-slate-700 flex items-center">
                  <Paperclip className="w-3.5 h-3.5 mr-1" /> Đính kèm hồ sơ thanh toán:
                </span>
                <p className="text-slate-500">Giấy đề nghị thanh toán, hóa đơn VAT, biên bản nghiệm thu, hợp đồng (nếu có)</p>
              </div>

              <div className="flex justify-end space-x-2 pt-3 border-t">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Đóng
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 cursor-pointer"
                >
                  Gửi đề xuất
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

