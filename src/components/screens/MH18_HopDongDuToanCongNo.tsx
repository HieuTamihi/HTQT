import React, { useState } from 'react';
import {
  FileCheck2,
  Calendar,
  AlertTriangle,
  Clock,
  CheckCircle2,
  PieChart,
  Search,
} from 'lucide-react';

export const MH18_HopDongDuToanCongNo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'contracts' | 'budget' | 'debts'>('contracts');

  const contracts = [
    {
      code: 'HDBT-2026/09-DK',
      title: 'Bảo trì hệ thống máy lạnh trung tâm Hội trường',
      partner: 'Công ty Cơ điện Lạnh Đông Nam',
      totalValue: 55000000,
      paid: 36500000,
      remain: 18500000,
      stage: 'Đợt 2/2 (Nghiệm thu)',
      dueDate: '15/11/2026',
    },
    {
      code: 'HDAST-2026/02-SK',
      title: 'Nâng cấp hệ thống âm thanh ánh sáng ngoài trời CS2',
      partner: 'Công ty TNHH Sự kiện & Âm nhạc Việt',
      totalValue: 280000000,
      paid: 135000000,
      remain: 145000000,
      stage: 'Đợt 1 (Tạm ứng 50%)',
      dueDate: '30/11/2026',
    },
  ];

  const debts = [
    {
      id: 'D-01',
      contractCode: 'HDBT-2026/09-DK',
      partner: 'Công ty Cơ điện Lạnh Đông Nam',
      amountDue: 18500000,
      dueDate: '15/11/2026',
      daysLeft: 11,
      status: 'Sắp đến hạn',
    },
    {
      id: 'D-02',
      contractCode: 'HD-VP-102',
      partner: 'Công ty Giấy & Văn phòng phẩm Sài Gòn',
      amountDue: 6200000,
      dueDate: '05/11/2026',
      daysLeft: 1,
      status: 'Hạn ngày mai',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-18</span>
            <h1 className="text-xl font-bold text-slate-900">Sổ hợp đồng, dự toán năm & Theo dõi công nợ</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Theo dõi tiến độ giải ngân từng đợt của hợp đồng kinh tế, số dư dự toán từng mục chi và công nợ đến hạn thanh toán
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 border-b border-slate-200">
        <button
          onClick={() => setActiveTab('contracts')}
          className={`py-3 px-4 font-semibold text-sm border-b-2 transition cursor-pointer ${
            activeTab === 'contracts'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Sổ hợp đồng & Tiến độ ({contracts.length})
        </button>
        <button
          onClick={() => setActiveTab('budget')}
          className={`py-3 px-4 font-semibold text-sm border-b-2 transition cursor-pointer ${
            activeTab === 'budget'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Dự toán năm theo mục chi
        </button>
        <button
          onClick={() => setActiveTab('debts')}
          className={`py-3 px-4 font-semibold text-sm border-b-2 transition cursor-pointer ${
            activeTab === 'debts'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Công nợ phải trả đến hạn ({debts.length})
        </button>
      </div>

      {activeTab === 'contracts' && (
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b">
              <tr>
                <th className="px-4 py-3">Số Hợp đồng</th>
                <th className="px-4 py-3">Tên gói thầu / Đối tác</th>
                <th className="px-4 py-3 text-right">Tổng giá trị</th>
                <th className="px-4 py-3 text-right">Đã thanh toán</th>
                <th className="px-4 py-3 text-right">Còn lại</th>
                <th className="px-4 py-3">Đợt hiện tại</th>
                <th className="px-4 py-3">Hạn thanh toán</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {contracts.map((c) => (
                <tr key={c.code} className="hover:bg-slate-50 transition">
                  <td className="px-4 py-3 font-mono font-bold text-blue-600 text-xs">{c.code}</td>
                  <td className="px-4 py-3">
                    <div className="font-semibold text-slate-900">{c.title}</div>
                    <div className="text-xs text-slate-500">{c.partner}</div>
                  </td>
                  <td className="px-4 py-3 text-right font-mono font-semibold text-slate-900">
                    {c.totalValue.toLocaleString('vi-VN')} đ
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-emerald-600 font-semibold">
                    {c.paid.toLocaleString('vi-VN')} đ
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-rose-600 font-bold">
                    {c.remain.toLocaleString('vi-VN')} đ
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-medium">
                      {c.stage}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600">{c.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'budget' && (
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 space-y-4">
          <h3 className="font-bold text-slate-800 text-sm">
            Tiến độ giải ngân Dự toán năm 2026 - Nguồn sự nghiệp có thu
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>1. Chi thù lao chuyên môn, giáo viên (Đã chi 82%)</span>
                <span>3.280.000.000 / 4.000.000.000 đ</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full" style={{ width: '82%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>2. Bảo trì cơ sở vật chất & Sân bãi (Đã chi 65%)</span>
                <span>650.000.000 / 1.000.000.000 đ</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-600 h-full rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>3. Mua sắm trang thiết bị chuyên dùng (Đã chi 45%)</span>
                <span>225.000.000 / 500.000.000 đ</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'debts' && (
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b">
              <tr>
                <th className="px-4 py-3">Hợp đồng</th>
                <th className="px-4 py-3">Nhà cung cấp / Đối tác</th>
                <th className="px-4 py-3 text-right">Số tiền đến hạn</th>
                <th className="px-4 py-3">Thời hạn</th>
                <th className="px-4 py-3">Cảnh báo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {debts.map((d) => (
                <tr key={d.id} className="hover:bg-slate-50 transition">
                  <td className="px-4 py-3 font-mono font-bold text-blue-600 text-xs">{d.contractCode}</td>
                  <td className="px-4 py-3 font-medium text-slate-900">{d.partner}</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-rose-600 text-base">
                    {d.amountDue.toLocaleString('vi-VN')} đ
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-600">{d.dueDate}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-300">
                      <Clock className="w-3.5 h-3.5 mr-1 text-amber-600" /> Còn {d.daysLeft} ngày
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

