import React, { useState } from 'react';
import {
  FileCode2,
  Download,
  CheckCircle,
  RotateCcw,
  Search,
  FileSpreadsheet,
  AlertTriangle,
} from 'lucide-react';
import { StatusBadge } from '../common/StatusBadge';

interface VoucherItem {
  id: string;
  code: string;
  date: string;
  type: string;
  description: string;
  amount: number;
  status: 'Chờ chuyển' | 'Đã chuyển sang MISA' | 'Yêu cầu hủy chuyển';
  misaVoucherNo?: string;
}

export const MH19_ChungTuKeToan: React.FC = () => {
  const [vouchers, setVouchers] = useState<VoucherItem[]>([
    {
      id: 'V-01',
      code: 'CT-20261104-01',
      date: '04/11/2026',
      type: 'Phiếu thu bán hàng dịch vụ',
      description: 'Tổng hợp thu học phí quầy và online ca sáng 04/11/2026 Trụ sở',
      amount: 21800000,
      status: 'Chờ chuyển',
    },
    {
      id: 'V-02',
      code: 'CT-20261103-02',
      date: '03/11/2026',
      type: 'Ủy nhiệm chi thù lao',
      description: 'Chi thù lao giáo viên khiêu vũ khóa 10/2026',
      amount: 50814000,
      status: 'Đã chuyển sang MISA',
      misaVoucherNo: 'UNC-2026-0891',
    },
  ]);

  const handleExportMisa = () => {
    alert('Đang xuất file XML/Excel cấu trúc chuẩn MISA SME/MISA Mimosa...');
  };

  const handleMarkTransferred = (id: string) => {
    setVouchers((prev) =>
      prev.map((v) =>
        v.id === id ? { ...v, status: 'Đã chuyển sang MISA', misaVoucherNo: `MISA-${Date.now().toString().slice(-6)}` } : v
      )
    );
    alert('Đã cập nhật trạng thái: Đã chuyển sang MISA kế toán!');
  };

  const handleRequestCancel = (id: string) => {
    setVouchers((prev) =>
      prev.map((v) => (v.id === id ? { ...v, status: 'Yêu cầu hủy chuyển' } : v))
    );
    alert('Đã gửi yêu cầu hủy chuyển chứng từ tới Kế toán trưởng phê duyệt theo quy chế!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-19</span>
            <h1 className="text-xl font-bold text-slate-900">Chứng từ kế toán xuất MISA</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Tổng hợp chứng từ thu chi từ HTQT, kết xuất file đồng bộ vào phần mềm MISA Kế toán và quản lý hủy chuyển
          </p>
        </div>

        <button
          onClick={handleExportMisa}
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>Xuất file nhập MISA (XML / Excel)</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b">
            <tr>
              <th className="px-4 py-3">Mã chứng từ HTQT</th>
              <th className="px-4 py-3">Ngày lập</th>
              <th className="px-4 py-3">Loại nghiệp vụ</th>
              <th className="px-4 py-3">Diễn giải nội dung hạch toán</th>
              <th className="px-4 py-3 text-right">Số tiền hạch toán</th>
              <th className="px-4 py-3">Trạng thái đồng bộ</th>
              <th className="px-4 py-3 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {vouchers.map((v) => (
              <tr key={v.id} className="hover:bg-slate-50 transition">
                <td className="px-4 py-3 font-mono font-bold text-blue-600 text-xs">{v.code}</td>
                <td className="px-4 py-3 text-xs text-slate-500">{v.date}</td>
                <td className="px-4 py-3 text-xs font-medium text-slate-800">{v.type}</td>
                <td className="px-4 py-3 text-xs text-slate-700 max-w-sm">{v.description}</td>
                <td className="px-4 py-3 text-right font-mono font-bold text-slate-900">
                  {v.amount.toLocaleString('vi-VN')} đ
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center text-xs px-2.5 py-0.5 rounded-full font-medium ${
                      v.status === 'Đã chuyển sang MISA'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                        : v.status === 'Chờ chuyển'
                        ? 'bg-amber-50 text-amber-700 border border-amber-300'
                        : 'bg-rose-50 text-rose-700 border border-rose-300'
                    }`}
                  >
                    {v.status}
                  </span>
                  {v.misaVoucherNo && (
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                      Số CT MISA: {v.misaVoucherNo}
                    </div>
                  )}
                </td>
                <td className="px-4 py-3 text-right space-x-1.5 whitespace-nowrap">
                  {v.status === 'Chờ chuyển' && (
                    <button
                      onClick={() => handleMarkTransferred(v.id)}
                      className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-semibold cursor-pointer"
                    >
                      Đánh dấu đã chuyển
                    </button>
                  )}
                  {v.status === 'Đã chuyển sang MISA' && (
                    <button
                      onClick={() => handleRequestCancel(v.id)}
                      className="px-2.5 py-1 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded text-xs font-semibold cursor-pointer"
                    >
                      Hủy chuyển (Cần duyệt)
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

