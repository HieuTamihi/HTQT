import React, { useState } from 'react';
import {
  Users,
  Shield,
  History,
  RefreshCw,
  Plus,
  CheckCircle,
  AlertTriangle,
  Search,
  KeyRound,
  ExternalLink,
} from 'lucide-react';
import { FACILITIES } from '../../data/mockData';

export const MH23_NguoiDungNhatKy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'users' | 'audit' | 'syncLogs'>('users');

  const usersList = [
    { username: 'giamdoc_cvh', fullName: 'Vũ Quốc Thái', role: 'Ban Giám đốc', facility: 'Trụ sở chính', is2FA: true, status: 'Hoạt động' },
    { username: 'kt_tonghop', fullName: 'Nguyễn Thị Bích Thủy', role: 'Kế toán tổng hợp', facility: 'Trụ sở chính', is2FA: true, status: 'Hoạt động' },
    { username: 'kt_thutien', fullName: 'Lê Thu Trang', role: 'Kế toán thu', facility: 'Trụ sở chính', is2FA: false, status: 'Hoạt động' },
    { username: 'kt_thanhtoan', fullName: 'Phạm Tuấn Anh', role: 'Kế toán thanh toán', facility: 'Trụ sở chính', is2FA: true, status: 'Hoạt động' },
    { username: 'ghidanh_ts', fullName: 'Nguyễn Thùy Dung', role: 'Nhân viên ghi danh', facility: 'Trụ sở chính', is2FA: false, status: 'Hoạt động' },
    { username: 'gv_haidang', fullName: 'Nguyễn Hải Đăng', role: 'Giáo viên', facility: 'Cơ sở 1', is2FA: false, status: 'Hoạt động' },
  ];

  const auditLogs = [
    { time: '04/11/2026 14:40:12', user: 'ghidanh_ts', action: 'Tạo đơn ghi danh quầy', target: 'DH-20261104-001 (Trần Minh Hoàng)', ip: '192.168.1.45' },
    { time: '04/11/2026 13:15:00', user: 'kt_thanhtoan', action: 'Duyệt bảng kê thù lao', target: 'BKTL-T10-001 (Nguyễn Hải Đăng)', ip: '192.168.1.18' },
    { time: '04/11/2026 11:20:34', user: 'giamdoc_cvh', action: 'Phê duyệt đề xuất chi', target: 'PDC-2026-11-002 (Bảo trì máy lạnh)', ip: '192.168.1.10' },
    { time: '04/11/2026 09:10:15', user: 'system_cron', action: 'Đồng bộ hóa đơn điện tử', target: 'Tự động kiểm tra 12 đơn thành công', ip: 'Localhost' },
  ];

  const syncLogs = [
    { time: '04/11/2026 14:41:00', software: 'MISA eShop', event: 'Đẩy mặt hàng mã lớp TS-KV01', status: 'Thành công', detail: 'HTTP 200 OK - SKU: TS-KV01' },
    { time: '04/11/2026 14:30:15', software: 'Hóa đơn điện tử (MISA meInvoice)', event: 'Lấy danh sách hóa đơn theo ngày', status: 'Thành công', detail: 'Đã nhận 12 hóa đơn' },
    { time: '04/11/2026 11:15:22', software: 'Hóa đơn điện tử (MISA meInvoice)', event: 'Cấp phát hóa đơn DH-20261104-005', status: 'Cảnh báo/Lỗi', detail: 'Timeout kết nối cổng thuế, đã xếp hàng retry' },
    { time: '04/11/2026 09:30:00', software: 'Ngân hàng Vietcombank', event: 'Đọc webhook biến động số dư VietQR', status: 'Thành công', detail: 'Khớp đơn DH-20261104-002 số tiền 1.200.000 đ' },
    { time: '03/11/2026 21:05:00', software: 'MISA Kế toán (Mimosa)', event: 'Xuất file chứng từ XML ngày 03/11', status: 'Thành công', detail: 'Gồm 18 chứng từ thu chi' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-23</span>
            <span className="px-2 py-0.5 text-xs font-bold bg-amber-100 text-amber-800 rounded">
              Yêu cầu 2FA
            </span>
            <h1 className="text-xl font-bold text-slate-900">Quản trị Người dùng & Nhật ký hệ thống</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Quản lý tài khoản, vai trò, cơ sở làm việc, lưu vết nhật ký thao tác (Audit log) và kiểm tra nhật ký đồng bộ phần mềm bên ngoài
          </p>
        </div>

        <button
          onClick={() => alert('Mở form tạo tài khoản người dùng')}
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Tạo tài khoản mới</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 border-b border-slate-200">
        <button
          onClick={() => setActiveTab('users')}
          className={`flex items-center space-x-2 py-3 px-4 font-semibold text-sm border-b-2 transition cursor-pointer ${
            activeTab === 'users' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Tài khoản & Phân quyền ({usersList.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('audit')}
          className={`flex items-center space-x-2 py-3 px-4 font-semibold text-sm border-b-2 transition cursor-pointer ${
            activeTab === 'audit' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <History className="w-4 h-4" />
          <span>Nhật ký thao tác (Audit Log)</span>
        </button>
        <button
          onClick={() => setActiveTab('syncLogs')}
          className={`flex items-center space-x-2 py-3 px-4 font-semibold text-sm border-b-2 transition cursor-pointer ${
            activeTab === 'syncLogs' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <RefreshCw className="w-4 h-4" />
          <span>Nhật ký đồng bộ phần mềm bên ngoài ({syncLogs.length})</span>
        </button>
      </div>

      {/* Tab 1: Danh sách tài khoản */}
      {activeTab === 'users' && (
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b">
              <tr>
                <th className="px-4 py-3">Tên đăng nhập</th>
                <th className="px-4 py-3">Họ và tên</th>
                <th className="px-4 py-3">Vai trò HTQT</th>
                <th className="px-4 py-3">Cơ sở làm việc</th>
                <th className="px-4 py-3 text-center">Bảo mật 2FA</th>
                <th className="px-4 py-3">Trạng thái</th>
                <th className="px-4 py-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {usersList.map((u) => (
                <tr key={u.username} className="hover:bg-slate-50 transition">
                  <td className="px-4 py-3 font-mono font-bold text-blue-600">{u.username}</td>
                  <td className="px-4 py-3 font-medium text-slate-900">{u.fullName}</td>
                  <td className="px-4 py-3">
                    <span className="font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                      {u.role}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{u.facility}</td>
                  <td className="px-4 py-3 text-center">
                    {u.is2FA ? (
                      <span className="inline-flex items-center text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                        <Shield className="w-3 h-3 mr-1" /> Bắt buộc
                      </span>
                    ) : (
                      <span className="text-slate-400">Không bắt buộc</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300 font-medium">
                      <CheckCircle className="w-3 h-3 mr-1" /> {u.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <button
                      onClick={() => alert(`Đổi mật khẩu cho: ${u.username}`)}
                      className="text-slate-400 hover:text-blue-600"
                      title="Reset mật khẩu"
                    >
                      <KeyRound className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab 2: Audit log */}
      {activeTab === 'audit' && (
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b">
              <tr>
                <th className="px-4 py-3">Thời gian ghi</th>
                <th className="px-4 py-3">Tài khoản thao tác</th>
                <th className="px-4 py-3">Hành động nghiệp vụ</th>
                <th className="px-4 py-3">Đối tượng tác động</th>
                <th className="px-4 py-3 font-mono">Địa chỉ IP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {auditLogs.map((log, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition">
                  <td className="px-4 py-3 font-mono text-slate-500">{log.time}</td>
                  <td className="px-4 py-3 font-bold text-slate-800">{log.user}</td>
                  <td className="px-4 py-3 font-medium text-blue-700">{log.action}</td>
                  <td className="px-4 py-3 text-slate-800">{log.target}</td>
                  <td className="px-4 py-3 font-mono text-slate-500">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab 3: Nhật ký đồng bộ phần mềm bên ngoài */}
      {activeTab === 'syncLogs' && (
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b">
              <tr>
                <th className="px-4 py-3">Thời điểm</th>
                <th className="px-4 py-3">Phần mềm ngoài</th>
                <th className="px-4 py-3">Sự kiện đồng bộ</th>
                <th className="px-4 py-3">Trạng thái kết nối</th>
                <th className="px-4 py-3">Chi tiết phản hồi kỹ thuật</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {syncLogs.map((log, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition">
                  <td className="px-4 py-3 font-mono text-slate-500">{log.time}</td>
                  <td className="px-4 py-3 font-bold text-slate-900">{log.software}</td>
                  <td className="px-4 py-3 font-medium text-slate-800">{log.event}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded font-bold ${
                        log.status === 'Thành công'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                          : 'bg-rose-50 text-rose-700 border border-rose-300'
                      }`}
                    >
                      {log.status === 'Thành công' ? <CheckCircle className="w-3 h-3 mr-1" /> : <AlertTriangle className="w-3 h-3 mr-1" />}
                      {log.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-600 text-[11px]">{log.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

