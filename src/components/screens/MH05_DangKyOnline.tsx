import React, { useState, useEffect } from 'react';
import {
  QrCode,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Search,
  AlertTriangle,
  Smartphone,
  Copy,
  ChevronRight,
} from 'lucide-react';
import { MOCK_CLASSES } from '../../data/mockData';

export const MH05_DangKyOnline: React.FC = () => {
  const [selectedClassId, setSelectedClassId] = useState(MOCK_CLASSES[0].id);
  const [fullName, setFullName] = useState('Lê Phương Thảo');
  const [phone, setPhone] = useState('0909123889');
  const [email, setEmail] = useState('thao.le@gmail.com');
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [orderCode, setOrderCode] = useState('DH-ONL-20261104-98');
  const [timeLeft, setTimeLeft] = useState(900); // 15 phút đếm ngược (900s)

  const selectedClass = MOCK_CLASSES.find((c) => c.id === selectedClassId) || MOCK_CLASSES[0];

  useEffect(() => {
    if (!submitted) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [submitted]);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert('Vui lòng đồng ý với điều khoản xử lý dữ liệu cá nhân!');
      return;
    }
    setOrderCode(`DH-ONL-20261104-${Math.floor(10 + Math.random() * 89)}`);
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2 pb-4 border-b border-slate-200">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
          <span>MH-05</span>
          <span>•</span>
          <span>Cổng Đăng Ký Học Viên Trực Tuyến</span>
        </div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          Đăng Ký Khóa Học & Hoạt Động CVHLĐ
        </h1>
        <p className="text-xs text-slate-500 max-w-md mx-auto">
          Không cần đăng nhập tài khoản. Chọn lớp, nhập thông tin cá nhân và quét mã VietQR thanh toán tự động trong 15 phút.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleRegister} className="space-y-6">
          {/* Bước 1: Chọn lớp */}
          <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-6 space-y-4">
            <h3 className="font-bold text-slate-900 text-base flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
                1
              </span>
              <span>Chọn môn học & Lớp học mong muốn</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {MOCK_CLASSES.filter((c) => c.status === 'Mở bán').map((c) => (
                <div
                  key={c.id}
                  onClick={() => setSelectedClassId(c.id)}
                  className={`p-4 rounded-xl border-2 transition cursor-pointer relative ${
                    selectedClassId === c.id
                      ? 'border-blue-600 bg-blue-50/50 ring-2 ring-blue-500/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] font-mono font-bold text-blue-600 bg-blue-100/60 px-2 py-0.5 rounded">
                      {c.code}
                    </span>
                    <span className="font-bold text-rose-600 text-sm">
                      {c.price.toLocaleString('vi-VN')} đ
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mt-2">{c.name}</h4>
                  <p className="text-xs text-slate-500 mt-1">{c.schedule}</p>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                    <span>GV: {c.teacherName}</span>
                    <span className="text-emerald-700 font-medium">Còn {c.capacity - c.enrolled} chỗ</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bước 2: Thông tin học viên */}
          <div className="bg-white rounded-2xl shadow-xs border border-slate-200 p-6 space-y-4">
            <h3 className="font-bold text-slate-900 text-base flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
                2
              </span>
              <span>Thông tin người đăng ký</span>
            </h3>

            <div className="space-y-3 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Họ và tên học viên <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Nguyễn Văn A"
                  className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:border-blue-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Số điện thoại nhận SMS xác nhận <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0912..."
                    className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email nhận biên nhận hóa đơn
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Điều khoản bảo mật cá nhân theo Nghị định 13 */}
              <div className="pt-2">
                <label className="flex items-start space-x-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    Tôi đồng ý để Cung Văn hóa Lao động TP.HCM xử lý dữ liệu cá nhân (họ tên, số điện thoại, hình ảnh ghi danh) phục vụ công tác quản lý học vụ và phát hành hóa đơn theo quy định pháp luật.
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/30 text-base transition cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Tiếp tục: Thanh toán qua VietQR</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      ) : (
        /* Màn hình hiển thị VietQR và giữ chỗ */
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-2 bg-amber-50 text-amber-800 border border-amber-300 px-3 py-1 rounded-full text-xs font-semibold">
              <Clock className="w-4 h-4 animate-spin text-amber-600" />
              <span>Thời gian giữ chỗ còn lại: <strong className="text-base text-rose-600">{formatTimer(timeLeft)}</strong></span>
            </div>
            <h2 className="text-xl font-black text-slate-900">Quét mã VietQR để hoàn tất giữ chỗ</h2>
            <p className="text-xs text-slate-500">
              Vui lòng giữ nguyên nội dung chuyển khoản để hệ thống tự động xác nhận đơn trong 10 giây.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* VietQR Mockup */}
            <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center space-y-3">
              <div className="w-48 h-48 mx-auto bg-white border border-slate-200 rounded-xl p-2 shadow-inner flex flex-col items-center justify-center">
                <QrCode className="w-40 h-40 text-slate-900" />
              </div>
              <div className="text-xs font-mono font-semibold text-slate-700">
                Napas247 | Vietcombank - CN TP.HCM
              </div>
              <div className="text-xs text-slate-500">Số tài khoản: <strong className="text-slate-900">0071000987654</strong></div>
            </div>

            {/* Chi tiết đơn */}
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-slate-50 rounded-xl space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Mã đơn đặt:</span>
                  <span className="font-mono font-bold text-blue-700">{orderCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Học viên:</span>
                  <span className="font-semibold text-slate-800">{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Khóa học:</span>
                  <span className="font-semibold text-slate-800">{selectedClass.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Số tiền cần thanh toán:</span>
                  <span className="font-bold text-rose-600 text-sm">
                    {selectedClass.price.toLocaleString('vi-VN')} đ
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Nội dung CK chuẩn:</span>
                  <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                    {orderCode} {phone}
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => alert('Đã sao chép nội dung chuyển khoản!')}
                  className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg text-xs flex items-center justify-center space-x-1.5 transition"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Sao chép nội dung chuyển khoản</span>
                </button>

                <button
                  type="button"
                  onClick={() => alert('Hệ thống ngân hàng đã khớp lệnh! Trạng thái đơn chuyển sang: ĐÃ THANH TOÁN.')}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition shadow-md shadow-emerald-600/30 cursor-pointer"
                >
                  Giả lập: Thanh toán thành công (Webhook Bank)
                </button>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="w-full py-2 text-xs text-slate-500 hover:text-slate-800"
                >
                  ← Quay lại chỉnh sửa thông tin
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

