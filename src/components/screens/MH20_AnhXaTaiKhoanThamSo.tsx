import React, { useState } from 'react';
import { Settings2, Clock, Percent, Shield, Save, Check } from 'lucide-react';

export const MH20_AnhXaTaiKhoanThamSo: React.FC = () => {
  const [closingHour, setClosingHour] = useState('21:00');
  const [taxRatePersonal, setTaxRatePersonal] = useState(10);
  const [taxRateVAT, setTaxRateVAT] = useState(0); // Dịch vụ văn hóa TDTT đa phần chịu 0% hoặc 5%

  const approvalLimits = [
    { level: 'Trưởng phòng / Trưởng cơ sở', maxAmount: 20000000, note: 'Chi hoạt động nghiệp vụ trong định mức thường quy' },
    { level: 'Phó Giám đốc phụ trách', maxAmount: 100000000, note: 'Hạn mức chi mua sắm, thù lao định kỳ' },
    { level: 'Giám đốc Cung Văn hóa', maxAmount: 999999999999, note: 'Mọi khoản chi trên 100 triệu và hợp đồng lớn' },
  ];

  const accountMappings = [
    { businessType: 'Thu học phí khiêu vũ, nghệ thuật', debitAccount: '1111 / 1121', creditAccount: '5113 (Doanh thu dịch vụ)', note: 'Tự động hạch toán khi chốt ca' },
    { businessType: 'Thu tiền vé sân bãi Alobo', debitAccount: '1121', creditAccount: '5118 (Doanh thu khác)', note: 'Đồng bộ eShop' },
    { businessType: 'Chi thù lao giáo viên ngoài giờ', debitAccount: '6422 / 154', creditAccount: '3348 / 3335 (Khấu trừ thuế 10%)', note: 'Từ bảng kê thù lao' },
    { businessType: 'Bảo trì, điện nước, hành chính', debitAccount: '642', creditAccount: '331 / 1121', note: 'Theo phiếu Luồng A/B' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-20</span>
            <span className="px-2 py-0.5 text-xs font-bold bg-amber-100 text-amber-800 rounded">
              Yêu cầu 2FA
            </span>
            <h1 className="text-xl font-bold text-slate-900">
              Cấu hình Ánh xạ tài khoản & Tham số hệ thống
            </h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Thiết lập tài khoản kế toán đối ứng MISA, định cấu hình giờ tự động chốt sổ ngày (21:00) và bảng phân quyền hạn mức duyệt chi
          </p>
        </div>

        <button
          onClick={() => alert('Đã lưu cấu hình tham số hệ thống thành công!')}
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition cursor-pointer"
        >
          <Save className="w-4 h-4" />
          <span>Lưu thiết lập</span>
        </button>
      </div>

      {/* Grid 2 cột: Tham số giờ chốt sổ + Thuế */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tham số vận hành */}
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-5 space-y-4">
          <div className="flex items-center space-x-2 text-slate-800 font-bold text-sm border-b pb-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>Thời gian khóa sổ & Tỷ lệ thuế khấu trừ</span>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Giờ tự động chốt sổ ngày hằng ngày (Mặc định 21:00)
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="time"
                  value={closingHour}
                  onChange={(e) => setClosingHour(e.target.value)}
                  className="border border-slate-300 rounded-lg p-2 font-mono font-bold text-slate-900 text-base"
                />
                <span className="text-xs text-slate-500">
                  (Sau giờ này các quầy ghi danh và điểm danh trong ngày tự động khóa)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Thuế TNCN vãng lai giáo viên (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={taxRatePersonal}
                    onChange={(e) => setTaxRatePersonal(Number(e.target.value))}
                    className="w-full border border-slate-300 rounded-lg p-2 font-bold"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-bold">%</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Thuế GTGT dịch vụ học tập (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={taxRateVAT}
                    onChange={(e) => setTaxRateVAT(Number(e.target.value))}
                    className="w-full border border-slate-300 rounded-lg p-2 font-bold"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-bold">%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hạn mức duyệt chi */}
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-5 space-y-4">
          <div className="flex items-center space-x-2 text-slate-800 font-bold text-sm border-b pb-2">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span>Phân quyền hạn mức thẩm quyền duyệt chi</span>
          </div>

          <div className="space-y-2.5">
            {approvalLimits.map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs flex justify-between items-center">
                <div>
                  <div className="font-bold text-slate-900">{item.level}</div>
                  <div className="text-[11px] text-slate-500">{item.note}</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400">Hạn mức:</span>
                  <div className="font-mono font-bold text-blue-700">
                    {item.maxAmount > 1000000000 ? 'Không giới hạn' : `Tối đa ${item.maxAmount.toLocaleString('vi-VN')} đ`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ánh xạ tài khoản kế toán đối ứng */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
          <h3 className="font-bold text-slate-800 text-sm">Bảng ánh xạ tài khoản đối ứng sang MISA Kế toán</h3>
          <span className="text-xs text-slate-500">Chuẩn hệ thống tài khoản Thông tư 107/90/BTC</span>
        </div>

        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b">
            <tr>
              <th className="px-4 py-3">Nghiệp vụ phát sinh</th>
              <th className="px-4 py-3">TK Nợ mặc định</th>
              <th className="px-4 py-3">TK Có mặc định</th>
              <th className="px-4 py-3">Quy tắc sinh chứng từ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {accountMappings.map((am, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition">
                <td className="px-4 py-3 font-semibold text-slate-900">{am.businessType}</td>
                <td className="px-4 py-3 font-mono font-bold text-blue-700">{am.debitAccount}</td>
                <td className="px-4 py-3 font-mono font-bold text-emerald-700">{am.creditAccount}</td>
                <td className="px-4 py-3 text-slate-500">{am.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

