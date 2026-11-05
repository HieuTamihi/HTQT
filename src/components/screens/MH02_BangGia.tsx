import React, { useState } from 'react';
import { Lock, History, Plus, FileText, CheckCircle2, AlertCircle, Calendar } from 'lucide-react';
import { MOCK_SERVICES } from '../../data/mockData';

export const MH02_BangGia: React.FC = () => {
  const [selectedVersion, setSelectedVersion] = useState<'v2026' | 'v2025'>('v2026');
  const [showAddModal, setShowAddModal] = useState(false);

  const priceHistory = [
    {
      id: 'v2026',
      decisionNumber: 'QĐ-88/QĐ-CVHLĐ',
      signDate: '01/01/2026',
      effectiveDate: '15/01/2026',
      signer: 'Giám đốc Cung Văn hóa Lao động',
      status: 'Đang hiệu lực',
      isCurrent: true,
      note: 'Áp dụng biểu giá niêm yết mới cho năm 2026 toàn hệ thống 7 cơ sở.',
    },
    {
      id: 'v2025',
      decisionNumber: 'QĐ-45/QĐ-CVHLĐ',
      signDate: '20/12/2024',
      effectiveDate: '01/01/2025',
      signer: 'Giám đốc Cung Văn hóa Lao động',
      status: 'Hết hiệu lực',
      isCurrent: false,
      note: 'Biểu giá năm 2025 đã được thay thế bởi QĐ-88.',
    },
  ];

  const currentVersion = priceHistory.find((v) => v.id === selectedVersion) || priceHistory[0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-02</span>
            <h1 className="text-xl font-bold text-slate-900">Bảng giá dịch vụ theo Quyết định</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Quản lý quyết định giá, ngày hiệu lực và đơn giá các dịch vụ. Giá đang hiệu lực được khóa không cho sửa đổi trực tiếp.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm shadow-blue-600/30 transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Tạo quyết định giá mới</span>
        </button>
      </div>

      {/* Decision Info Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-xs border border-slate-200 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <h2 className="font-bold text-slate-800 text-base">Thông tin Quyết định đang xem</h2>
            </div>
            {currentVersion.isCurrent ? (
              <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> {currentVersion.status} (Khóa sửa)
              </span>
            ) : (
              <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-300">
                {currentVersion.status}
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div className="text-xs text-slate-500">Số quyết định</div>
              <div className="font-bold text-slate-800 mt-0.5">{currentVersion.decisionNumber}</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div className="text-xs text-slate-500">Ngày ký ban hành</div>
              <div className="font-bold text-slate-800 mt-0.5">{currentVersion.signDate}</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div className="text-xs text-slate-500">Ngày bắt đầu hiệu lực</div>
              <div className="font-bold text-blue-700 mt-0.5">{currentVersion.effectiveDate}</div>
            </div>
          </div>

          <div className="text-xs text-slate-600 bg-blue-50/60 border border-blue-200 rounded-lg p-3 flex items-start space-x-2">
            <Lock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-blue-900">Quy tắc nghiệp vụ HTQT:</span> Theo quy chế, bảng giá đang có hiệu lực pháp lý không được chỉnh sửa trực tiếp. Để áp dụng mức giá mới, cần ban hành Quyết định giá thay thế.
            </div>
          </div>
        </div>

        {/* History Switcher */}
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-5 space-y-3">
          <div className="flex items-center space-x-2">
            <History className="w-5 h-5 text-slate-600" />
            <h2 className="font-bold text-slate-800 text-base">Lịch sử các phiên bản</h2>
          </div>
          <div className="space-y-2 pt-1">
            {priceHistory.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedVersion(item.id as any)}
                className={`w-full text-left p-3 rounded-lg border transition cursor-pointer ${
                  selectedVersion === item.id
                    ? 'bg-blue-50/70 border-blue-400 ring-1 ring-blue-400'
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xs text-slate-800">{item.decisionNumber}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${item.isCurrent ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'}`}>
                    {item.status}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">Hiệu lực: {item.effectiveDate}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Price Table */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-800 text-sm">
            Biểu đơn giá chi tiết theo {currentVersion.decisionNumber}
          </h3>
          <span className="text-xs text-slate-400 font-mono">Đơn vị tính: VNĐ</span>
        </div>

        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b border-slate-200">
            <tr>
              <th className="px-4 py-3">Mã DV</th>
              <th className="px-4 py-3">Tên dịch vụ môn học</th>
              <th className="px-4 py-3">Nhóm</th>
              <th className="px-4 py-3">ĐVT</th>
              <th className="px-4 py-3 text-right">Đơn giá đã duyệt</th>
              <th className="px-4 py-3 text-center">Tình trạng khóa</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {MOCK_SERVICES.map((srv) => (
              <tr key={srv.id} className="hover:bg-slate-50/80 transition">
                <td className="px-4 py-3 font-semibold text-blue-600">{srv.code}</td>
                <td className="px-4 py-3 font-medium text-slate-900">{srv.name}</td>
                <td className="px-4 py-3 text-slate-600 text-xs">{srv.category}</td>
                <td className="px-4 py-3 text-slate-600 text-xs">{srv.unit}</td>
                <td className="px-4 py-3 text-right font-mono font-bold text-slate-900 text-base">
                  {srv.basePrice.toLocaleString('vi-VN')} đ
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-flex items-center text-xs text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                    <Lock className="w-3 h-3 mr-1 text-slate-400" /> Đã chốt theo QĐ
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Add Decision */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full border border-slate-200 p-6 space-y-4">
            <h3 className="font-bold text-slate-900 text-lg">Tạo quyết định giá mới</h3>
            <div className="space-y-3 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Số quyết định</label>
                <input type="text" placeholder="Ví dụ: QĐ-12/QĐ-CVHLĐ" className="w-full border rounded-lg p-2 text-sm border-slate-300" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Ngày ký</label>
                  <input type="date" className="w-full border rounded-lg p-2 text-sm border-slate-300" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Ngày hiệu lực</label>
                  <input type="date" className="w-full border rounded-lg p-2 text-sm border-slate-300" />
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-2 pt-3 border-t">
              <button onClick={() => setShowAddModal(false)} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg">
                Hủy
              </button>
              <button onClick={() => { alert('Đã lưu quyết định giá nháp'); setShowAddModal(false); }} className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg font-semibold">
                Lưu quyết định
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

