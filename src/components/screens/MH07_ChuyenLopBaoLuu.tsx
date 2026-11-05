import React, { useState } from 'react';
import { ArrowRightLeft, ShieldCheck, Check, X, Plus, Search, Calendar, AlertCircle } from 'lucide-react';
import { StatusBadge } from '../common/StatusBadge';

interface RequestItem {
  id: string;
  code: string;
  type: 'Chuyển lớp' | 'Bảo lưu';
  studentName: string;
  phone: string;
  fromClass: string;
  toClass?: string;
  reason: string;
  status: 'Chờ duyệt' | 'Đã duyệt' | 'Từ chối';
  createdAt: string;
  approvedBy?: string;
}

export const MH07_ChuyenLopBaoLuu: React.FC = () => {
  const [requests, setRequests] = useState<RequestItem[]>([
    {
      id: 'REQ-01',
      code: 'YCCL-202611-01',
      type: 'Chuyển lớp',
      studentName: 'Phạm Minh Quân',
      phone: '0903112233',
      fromClass: 'TS-KV01 (Khiêu vũ căn bản T2-4-6)',
      toClass: 'TS-KV02 (Khiêu vũ căn bản T3-5-7)',
      reason: 'Học viên đổi ca làm việc buổi tối sang các ngày chẵn.',
      status: 'Chờ duyệt',
      createdAt: '04/11/2026 10:15',
    },
    {
      id: 'REQ-02',
      code: 'YCBL-202611-02',
      type: 'Bảo lưu',
      studentName: 'Đặng Quốc Huy',
      phone: '0934556677',
      fromClass: 'TS-KV01 (Khiêu vũ căn bản T2-4-6)',
      reason: 'Học viên đi công tác đột xuất 2 tuần, bảo lưu sang khóa 12/2026.',
      status: 'Đã duyệt',
      createdAt: '03/11/2026 14:00',
      approvedBy: 'Trần Văn Hòa (Trưởng phòng Văn hóa)',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [reqType, setReqType] = useState<'Chuyển lớp' | 'Bảo lưu'>('Chuyển lớp');

  const handleApprove = (id: string, isAgree: boolean) => {
    setRequests((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              status: isAgree ? 'Đã duyệt' : 'Từ chối',
              approvedBy: isAgree ? 'Ban Giám đốc / Trưởng phòng VH' : undefined,
            }
          : r
      )
    );
    alert(isAgree ? 'Đã duyệt yêu cầu và tự động cập nhật danh sách ghi danh!' : 'Đã từ chối yêu cầu.');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-07</span>
            <h1 className="text-xl font-bold text-slate-900">Quản lý Chuyển lớp & Bảo lưu học phí</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Tiếp nhận yêu cầu từ quầy ghi danh, luân chuyển hồ sơ phê duyệt và tự động cập nhật trạng thái lớp học
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm shadow-blue-600/30 transition cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Lập yêu cầu mới</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b border-slate-200">
            <tr>
              <th className="px-4 py-3">Mã phiếu</th>
              <th className="px-4 py-3">Loại yêu cầu</th>
              <th className="px-4 py-3">Học viên</th>
              <th className="px-4 py-3">Lớp hiện tại</th>
              <th className="px-4 py-3">Lớp chuyển tới / Thời hạn</th>
              <th className="px-4 py-3">Lý do</th>
              <th className="px-4 py-3">Trạng thái</th>
              <th className="px-4 py-3 text-right">Phê duyệt</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {requests.map((r) => (
              <tr key={r.id} className="hover:bg-slate-50/80 transition">
                <td className="px-4 py-3 font-mono font-bold text-blue-600">{r.code}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-2 py-0.5 rounded font-semibold ${
                      r.type === 'Chuyển lớp' ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' : 'bg-purple-50 text-purple-700 border border-purple-200'
                    }`}
                  >
                    {r.type}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="font-semibold text-slate-900">{r.studentName}</div>
                  <div className="text-xs text-slate-500">{r.phone}</div>
                </td>
                <td className="px-4 py-3 text-xs text-slate-700">{r.fromClass}</td>
                <td className="px-4 py-3 text-xs font-medium text-slate-900">
                  {r.type === 'Chuyển lớp' ? r.toClass : 'Bảo lưu 60 ngày'}
                </td>
                <td className="px-4 py-3 text-xs text-slate-600 max-w-xs">{r.reason}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={r.status} />
                  {r.approvedBy && (
                    <div className="text-[10px] text-slate-400 mt-0.5">Duyệt bởi: {r.approvedBy}</div>
                  )}
                </td>
                <td className="px-4 py-3 text-right space-x-1.5 whitespace-nowrap">
                  {r.status === 'Chờ duyệt' ? (
                    <>
                      <button
                        onClick={() => handleApprove(r.id, true)}
                        className="p-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg transition"
                        title="Đồng ý duyệt"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleApprove(r.id, false)}
                        className="p-1.5 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded-lg transition"
                        title="Từ chối"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <span className="text-xs text-slate-400 font-mono">Đã xử lý</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Lập yêu cầu */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full border border-slate-200 p-6 space-y-4">
            <h3 className="font-bold text-slate-900 text-base">Lập yêu cầu Chuyển lớp / Bảo lưu</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-4">
                <label className="flex items-center space-x-2 cursor-pointer font-medium">
                  <input
                    type="radio"
                    name="reqType"
                    checked={reqType === 'Chuyển lớp'}
                    onChange={() => setReqType('Chuyển lớp')}
                  />
                  <span>Chuyển sang lớp khác</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer font-medium">
                  <input
                    type="radio"
                    name="reqType"
                    checked={reqType === 'Bảo lưu'}
                    onChange={() => setReqType('Bảo lưu')}
                  />
                  <span>Bảo lưu học phí</span>
                </label>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Học viên yêu cầu</label>
                <input
                  type="text"
                  placeholder="Nhập tên học viên hoặc SĐT..."
                  defaultValue="Lê Văn Khang (0988223344)"
                  className="w-full border rounded-lg p-2 text-sm border-slate-300"
                />
              </div>

              {reqType === 'Chuyển lớp' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Lớp muốn chuyển sang</label>
                  <select
                    aria-label="Lớp muốn chuyển sang"
                    className="w-full border rounded-lg p-2 text-sm border-slate-300 bg-white"
                  >
                    <option>TS-KV02 - Khiêu vũ Latin Chuyên đề</option>
                    <option>CS1-AERO01 - Aerobic Năng lượng</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Lý do yêu cầu</label>
                <textarea
                  rows={3}
                  placeholder="Nhập lý do chuyển/bảo lưu kèm số điện thoại liên hệ..."
                  className="w-full border rounded-lg p-2 text-sm border-slate-300"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-3 border-t">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg">
                Đóng
              </button>
              <button
                onClick={() => {
                  alert('Đã gửi yêu cầu tới cấp thẩm quyền phê duyệt!');
                  setShowModal(false);
                }}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg font-semibold"
              >
                Gửi phê duyệt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

