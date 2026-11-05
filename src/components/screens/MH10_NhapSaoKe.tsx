import React, { useState } from 'react';
import {
  UploadCloud,
  FileSpreadsheet,
  CheckCircle,
  AlertTriangle,
  Save,
  Check,
  RefreshCw,
} from 'lucide-react';

interface BankTransaction {
  id: string;
  txDate: string;
  txId: string;
  amount: number;
  content: string;
  extractedOrderCode?: string;
  isDuplicate: boolean;
}

export const MH10_NhapSaoKe: React.FC = () => {
  const [fileUploaded, setFileUploaded] = useState(true);
  const [transactions, setTransactions] = useState<BankTransaction[]>([
    {
      id: 'TX-01',
      txDate: '04/11/2026 09:30',
      txId: 'VCB8892183',
      amount: 1200000,
      content: 'DH-20261104-002 Nguyen Thi Hong Nhung hoc phi khieu vu',
      extractedOrderCode: 'DH-20261104-002',
      isDuplicate: false,
    },
    {
      id: 'TX-02',
      txDate: '04/11/2026 10:14',
      txId: 'BIDV339182',
      amount: 1800000,
      content: 'Hoc phi DH-20261104-005 Latin Rumba',
      extractedOrderCode: 'DH-20261104-005',
      isDuplicate: false,
    },
    {
      id: 'TX-03',
      txDate: '04/11/2026 11:05',
      txId: 'TCB199201',
      amount: 1000000,
      content: 'DH-20261104-008 chuyen khoan lop boi',
      extractedOrderCode: 'DH-20261104-008',
      isDuplicate: false,
    },
    {
      id: 'TX-04',
      txDate: '04/11/2026 11:20',
      txId: 'VCB8892183', // Báo trùng
      amount: 1200000,
      content: 'DH-20261104-002 Nguyen Thi Hong Nhung hoc phi khieu vu',
      extractedOrderCode: 'DH-20261104-002',
      isDuplicate: true,
    },
  ]);

  const handleCommit = () => {
    alert('Đã ghi nhận thành công 3 giao dịch hợp lệ vào sổ quỹ đối soát (loại bỏ 1 dòng trùng)!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-10</span>
            <h1 className="text-xl font-bold text-slate-900">Nhập sao kê ngân hàng & Trích mã đơn</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Tải file sao kê Excel/CSV, hệ thống tự động kiểm tra cấu trúc, phát hiện giao dịch trùng lặp và trích xuất mã đơn
          </p>
        </div>

        <button
          onClick={handleCommit}
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm shadow-blue-600/30 transition cursor-pointer"
        >
          <Save className="w-4 h-4" />
          <span>Ghi nhận vào hệ thống</span>
        </button>
      </div>

      {/* Upload Dropzone */}
      <div className="bg-white rounded-xl shadow-xs border-2 border-dashed border-slate-300 p-8 text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
          <UploadCloud className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-slate-800 text-sm">Kéo thả file sao kê ngân hàng vào đây</h3>
          <p className="text-xs text-slate-500 mt-1">Hỗ trợ định dạng Vietcombank, BIDV, Agribank (.xlsx, .csv)</p>
        </div>
        <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-mono font-medium">
          <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
          <span>File đang nạp: VCB_SaoKe_20261104.xlsx (4 dòng)</span>
        </div>
      </div>

      {/* Cảnh báo dòng trùng */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center justify-between text-xs text-amber-900">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <div>
            <strong>Phát hiện 1 giao dịch bị trùng lặp mã giao dịch ngân hàng:</strong> Mã TX <code>VCB8892183</code> đã tồn tại trước đó. Hệ thống sẽ tự động bỏ qua khi ghi nhận.
          </div>
        </div>
      </div>

      {/* Table Xem trước giao dịch */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
          <h3 className="font-bold text-slate-800 text-sm">Xem trước dữ liệu trích xuất</h3>
          <span className="text-xs text-slate-500">Thuật toán Regex trích mã đơn theo mẫu: DH-*</span>
        </div>

        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b border-slate-200">
            <tr>
              <th className="px-4 py-3">Thời gian</th>
              <th className="px-4 py-3">Mã GD Ngân hàng</th>
              <th className="px-4 py-3 text-right">Số tiền</th>
              <th className="px-4 py-3">Nội dung chuyển khoản</th>
              <th className="px-4 py-3">Mã đơn trích xuất</th>
              <th className="px-4 py-3 text-center">Trạng thái kiểm tra</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {transactions.map((tx) => (
              <tr
                key={tx.id}
                className={tx.isDuplicate ? 'bg-rose-50/50 hover:bg-rose-50' : 'hover:bg-slate-50/80 transition'}
              >
                <td className="px-4 py-3 text-xs text-slate-500">{tx.txDate}</td>
                <td className="px-4 py-3 font-mono font-bold text-slate-800 text-xs">{tx.txId}</td>
                <td className="px-4 py-3 text-right font-mono font-bold text-slate-900">
                  {tx.amount.toLocaleString('vi-VN')} đ
                </td>
                <td className="px-4 py-3 text-xs text-slate-700 max-w-xs">{tx.content}</td>
                <td className="px-4 py-3">
                  {tx.extractedOrderCode ? (
                    <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {tx.extractedOrderCode}
                    </span>
                  ) : (
                    <span className="text-xs text-rose-500 italic">Không tìm thấy mã đơn</span>
                  )}
                </td>
                <td className="px-4 py-3 text-center">
                  {tx.isDuplicate ? (
                    <span className="inline-flex items-center text-xs text-rose-700 bg-rose-100 px-2 py-0.5 rounded font-bold">
                      ⚠️ Trùng lặp (Bỏ qua)
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300 font-medium">
                      <Check className="w-3 h-3 mr-1" /> Hợp lệ
                    </span>
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

