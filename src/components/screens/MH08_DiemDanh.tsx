import React, { useState } from 'react';
import {
  UserCheck,
  UserX,
  UserPlus,
  AlertTriangle,
  Smartphone,
  Calendar,
  CheckCircle,
  Save,
} from 'lucide-react';

interface StudentAttendance {
  id: string;
  name: string;
  cardSerial: string;
  phone: string;
  isPresent: boolean;
  note?: string;
}

export const MH08_DiemDanh: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState('TS-KV01');
  const [sessionDate, setSessionDate] = useState('04/11/2026');
  const [students, setStudents] = useState<StudentAttendance[]>([
    { id: '1', name: 'Trần Minh Hoàng', cardSerial: 'THE-2026-0891', phone: '0903123456', isPresent: true },
    { id: '2', name: 'Nguyễn Thị Hồng Nhung', cardSerial: 'THE-2026-0892', phone: '0918765432', isPresent: true },
    { id: '3', name: 'Lê Hoàng Long', cardSerial: 'THE-2026-0893', phone: '0977112233', isPresent: false },
    { id: '4', name: 'Phạm Thu Thảo', cardSerial: 'THE-2026-0894', phone: '0933887766', isPresent: true },
  ]);

  const [unregisteredGuests, setUnregisteredGuests] = useState<string[]>([]);
  const [guestName, setGuestName] = useState('');
  const [isSubstitute, setIsSubstitute] = useState(false);
  const [substituteTeacher, setSubstituteTeacher] = useState('');

  const toggleAttendance = (id: string) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isPresent: !s.isPresent } : s))
    );
  };

  const handleAddGuest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;
    setUnregisteredGuests([...unregisteredGuests, guestName.trim()]);
    setGuestName('');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-08</span>
            <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold flex items-center">
              <Smartphone className="w-3 h-3 mr-1" /> Tối ưu Mobile
            </span>
            <h1 className="text-xl font-bold text-slate-900">Điểm danh lớp học & Ghi nhận người lạ</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Dành cho giáo viên/HLV: điểm danh buổi học, ghi nhận học viên chưa có thẻ/người lạ, báo nghỉ hoặc dạy thay
          </p>
        </div>

        <button
          onClick={() => alert('Đã lưu dữ liệu điểm danh buổi học thành công vào hệ thống!')}
          className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition cursor-pointer"
        >
          <Save className="w-4 h-4" />
          <span>Lưu điểm danh</span>
        </button>
      </div>

      {/* Class & Session Selector */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Lớp giảng dạy</label>
          <select
            aria-label="Lớp giảng dạy"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full border border-slate-300 rounded-lg p-2 font-semibold bg-white"
          >
            <option value="TS-KV01">TS-KV01: Khiêu vũ giao tiếp CB (T2-4-6)</option>
            <option value="TS-KV02">TS-KV02: Khiêu vũ Latin Chuyên đề (T3-5-7)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Ngày buổi học</label>
          <div className="flex items-center border border-slate-300 rounded-lg px-3 py-2 bg-slate-50">
            <Calendar className="w-4 h-4 text-slate-500 mr-2" />
            <input
              type="text"
              value={sessionDate}
              onChange={(e) => setSessionDate(e.target.value)}
              className="bg-transparent font-medium text-slate-800 outline-none w-full"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Tình trạng giáo viên</label>
          <button
            type="button"
            onClick={() => setIsSubstitute(!isSubstitute)}
            className={`w-full py-2 px-3 rounded-lg text-xs font-semibold border transition text-left flex justify-between items-center ${
              isSubstitute
                ? 'bg-amber-50 border-amber-300 text-amber-900'
                : 'bg-slate-50 border-slate-300 text-slate-700'
            }`}
          >
            <span>{isSubstitute ? 'Báo dạy thay / Báo nghỉ' : 'Giáo viên chính thức dạy'}</span>
            <span className="text-[10px] text-blue-600 underline">Đổi</span>
          </button>
        </div>
      </div>

      {/* Báo dạy thay alert */}
      {isSubstitute && (
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 space-y-2">
          <div className="flex items-center space-x-2 text-amber-900 font-bold text-xs uppercase">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Khai báo giáo viên dạy thay</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <input
              type="text"
              placeholder="Nhập tên giáo viên dạy thay..."
              value={substituteTeacher}
              onChange={(e) => setSubstituteTeacher(e.target.value)}
              className="border border-amber-300 rounded-lg p-2 text-sm bg-white"
            />
            <input
              type="text"
              placeholder="Lý do báo nghỉ/dạy thay..."
              defaultValue="Giáo viên bận công tác hội thi chuyên môn"
              className="border border-amber-300 rounded-lg p-2 text-sm bg-white"
            />
          </div>
        </div>
      )}

      {/* Danh sách học viên điểm danh */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="text-sm font-bold text-slate-800">
            Danh sách học viên theo thẻ giấy ({students.filter((s) => s.isPresent).length}/{students.length} có mặt)
          </div>
          <div className="text-xs text-slate-500">Bấm nút để đánh dấu Có mặt / Vắng</div>
        </div>

        <div className="divide-y divide-slate-100">
          {students.map((st) => (
            <div
              key={st.id}
              className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/50 transition"
            >
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-slate-900 text-sm">{st.name}</span>
                  <span className="text-xs font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
                    {st.cardSerial}
                  </span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">SĐT: {st.phone}</div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => toggleAttendance(st.id)}
                  className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    st.isPresent
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                  }`}
                >
                  {st.isPresent ? <UserCheck className="w-4 h-4" /> : <UserX className="w-4 h-4" />}
                  <span>{st.isPresent ? 'Có mặt' : 'Vắng mặt'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mục ghi người lạ / Học viên chưa có thẻ */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-5 space-y-4">
        <div className="flex items-center space-x-2 border-b pb-3 border-slate-100">
          <UserPlus className="w-4 h-4 text-rose-600" />
          <h3 className="font-bold text-slate-800 text-sm">
            Ghi nhận người lạ / Học viên học thử / Chưa xuất trình thẻ
          </h3>
        </div>

        <form onSubmit={handleAddGuest} className="flex gap-2">
          <input
            type="text"
            placeholder="Nhập tên người lạ hoặc ghi chú đặc điểm (ví dụ: Học thử bạn của anh Hoàng)..."
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            className="flex-1 text-sm border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-rose-500"
          />
          <button
            type="submit"
            className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            Thêm ghi chú
          </button>
        </form>

        {unregisteredGuests.length > 0 && (
          <div className="space-y-2 pt-2">
            {unregisteredGuests.map((guest, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 bg-rose-50/60 border border-rose-200 rounded-lg text-xs"
              >
                <span className="font-medium text-rose-900">• {guest}</span>
                <span className="text-[10px] text-rose-600 font-semibold uppercase">Cần quầy đối chiếu</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

