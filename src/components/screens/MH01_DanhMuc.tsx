import React, { useState } from 'react';
import { Plus, Edit2, Ban, CheckCircle, Search, Building2, Layers, DollarSign } from 'lucide-react';
import { FACILITIES, MOCK_SERVICES, MOCK_FUND_SOURCES } from '../../data/mockData';
import { CancelModal } from '../common/CancelModal';

export const MH01_DanhMuc: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'facilities' | 'services' | 'funds'>('facilities');
  const [searchTerm, setSearchTerm] = useState('');
  const [cancelModal, setCancelModal] = useState<{ isOpen: boolean; name: string }>({
    isOpen: false,
    name: '',
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-01</span>
            <h1 className="text-xl font-bold text-slate-900">Danh mục cơ sở, dịch vụ, nguồn kinh phí</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Khai báo cơ sở & tiền tố mã mặt hàng eShop, danh mục dịch vụ học vụ/thể thao và các nguồn kinh phí đơn vị
          </p>
        </div>
        <button
          onClick={() => alert('Mở form Thêm mới danh mục')}
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm shadow-blue-600/30 transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Thêm mới</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 border-b border-slate-200">
        <button
          onClick={() => setActiveTab('facilities')}
          className={`flex items-center space-x-2 py-3 px-4 font-semibold text-sm border-b-2 transition cursor-pointer ${
            activeTab === 'facilities'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>Cơ sở & Tiền tố eShop ({FACILITIES.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('services')}
          className={`flex items-center space-x-2 py-3 px-4 font-semibold text-sm border-b-2 transition cursor-pointer ${
            activeTab === 'services'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Dịch vụ & Môn học ({MOCK_SERVICES.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('funds')}
          className={`flex items-center space-x-2 py-3 px-4 font-semibold text-sm border-b-2 transition cursor-pointer ${
            activeTab === 'funds'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <DollarSign className="w-4 h-4" />
          <span>Nguồn kinh phí ({MOCK_FUND_SOURCES.length})</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm kiếm danh mục..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
          />
        </div>
      </div>

      {/* Tab 1: Cơ sở */}
      {activeTab === 'facilities' && (
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b border-slate-200">
              <tr>
                <th className="px-4 py-3">Mã đơn vị</th>
                <th className="px-4 py-3">Tên cơ sở</th>
                <th className="px-4 py-3">Địa chỉ hoạt động</th>
                <th className="px-4 py-3">Tiền tố eShop (Mặt hàng)</th>
                <th className="px-4 py-3">Trạng thái</th>
                <th className="px-4 py-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {FACILITIES.map((fac) => (
                <tr key={fac.id} className="hover:bg-slate-50/80 transition">
                  <td className="px-4 py-3 font-semibold text-blue-600">{fac.code}</td>
                  <td className="px-4 py-3 font-medium text-slate-900">{fac.name}</td>
                  <td className="px-4 py-3 text-slate-600 text-xs">{fac.address}</td>
                  <td className="px-4 py-3">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-300 font-bold">
                      {fac.prefix}-*
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300">
                      <CheckCircle className="w-3 h-3 mr-1" /> Hoạt động
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <button
                      onClick={() => alert(`Sửa cơ sở: ${fac.name}`)}
                      className="p-1 text-slate-400 hover:text-blue-600 rounded transition"
                      title="Sửa"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCancelModal({ isOpen: true, name: fac.name })}
                      className="p-1 text-slate-400 hover:text-rose-600 rounded transition"
                      title="Ngừng dùng"
                    >
                      <Ban className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab 2: Dịch vụ */}
      {activeTab === 'services' && (
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b border-slate-200">
              <tr>
                <th className="px-4 py-3">Mã dịch vụ</th>
                <th className="px-4 py-3">Tên dịch vụ</th>
                <th className="px-4 py-3">Nhóm bộ môn</th>
                <th className="px-4 py-3">Đơn vị tính</th>
                <th className="px-4 py-3 text-right">Đơn giá niêm yết</th>
                <th className="px-4 py-3">Trạng thái</th>
                <th className="px-4 py-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_SERVICES.map((srv) => (
                <tr key={srv.id} className="hover:bg-slate-50/80 transition">
                  <td className="px-4 py-3 font-semibold text-blue-600">{srv.code}</td>
                  <td className="px-4 py-3 font-medium text-slate-900">{srv.name}</td>
                  <td className="px-4 py-3 text-slate-600">{srv.category}</td>
                  <td className="px-4 py-3 text-slate-600">{srv.unit}</td>
                  <td className="px-4 py-3 text-right font-mono font-semibold text-slate-900">
                    {srv.basePrice.toLocaleString('vi-VN')} đ
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300">
                      {srv.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <button
                      onClick={() => alert(`Sửa dịch vụ: ${srv.name}`)}
                      className="p-1 text-slate-400 hover:text-blue-600 rounded transition"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCancelModal({ isOpen: true, name: srv.name })}
                      className="p-1 text-slate-400 hover:text-rose-600 rounded transition"
                    >
                      <Ban className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab 3: Nguồn kinh phí */}
      {activeTab === 'funds' && (
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b border-slate-200">
              <tr>
                <th className="px-4 py-3">Mã nguồn</th>
                <th className="px-4 py-3">Tên nguồn kinh phí</th>
                <th className="px-4 py-3 text-right">Số dư khả dụng</th>
                <th className="px-4 py-3">Trạng thái</th>
                <th className="px-4 py-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_FUND_SOURCES.map((fnd) => (
                <tr key={fnd.id} className="hover:bg-slate-50/80 transition">
                  <td className="px-4 py-3 font-semibold text-blue-600">{fnd.code}</td>
                  <td className="px-4 py-3 font-medium text-slate-900">{fnd.name}</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-emerald-700">
                    {fnd.balance.toLocaleString('vi-VN')} đ
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-300">
                      {fnd.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <button
                      onClick={() => alert(`Sửa nguồn: ${fnd.name}`)}
                      className="p-1 text-slate-400 hover:text-blue-600 rounded transition"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCancelModal({ isOpen: true, name: fnd.name })}
                      className="p-1 text-slate-400 hover:text-rose-600 rounded transition"
                    >
                      <Ban className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Cancel Modal */}
      <CancelModal
        isOpen={cancelModal.isOpen}
        title="Ngừng sử dụng danh mục"
        targetName={cancelModal.name}
        onClose={() => setCancelModal({ isOpen: false, name: '' })}
        onConfirm={(reason) => {
          alert(`Đã ngừng sử dụng '${cancelModal.name}'. Lý do: ${reason}`);
          setCancelModal({ isOpen: false, name: '' });
        }}
      />
    </div>
  );
};

