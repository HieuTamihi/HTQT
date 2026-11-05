import React, { useState } from 'react';
import {
  Search,
  UserPlus,
  CreditCard,
  Printer,
  ShoppingBag,
  CheckCircle,
  Smartphone,
  Tag,
  Building,
} from 'lucide-react';
import { MOCK_CLASSES, MOCK_REGISTRATIONS } from '../../data/mockData';
import { StudentRegistration } from '../../types';

export const MH04_QuayGhiDanh: React.FC = () => {
  const [phoneSearch, setPhoneSearch] = useState('');
  const [studentInfo, setStudentInfo] = useState({
    name: 'Nguyễn Văn Hùng',
    phone: '0912345678',
    email: 'vanhung@gmail.com',
    address: 'Quận 3, TP.HCM',
  });
  const [selectedClassId, setSelectedClassId] = useState(MOCK_CLASSES[0].id);
  const [cardSerial, setCardSerial] = useState('THE-2026-0895');
  const [paymentMethod, setPaymentMethod] = useState<'Tiền mặt' | 'Chuyển khoản' | 'Thẻ'>('Tiền mặt');
  const [createdOrder, setCreatedOrder] = useState<StudentRegistration | null>(null);

  const selectedClass = MOCK_CLASSES.find((c) => c.id === selectedClassId) || MOCK_CLASSES[0];

  const handleCreateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder: StudentRegistration = {
      id: `REG-${Date.now()}`,
      orderCode: `DH-${Date.now().toString().slice(-8)}`,
      studentName: studentInfo.name,
      phone: studentInfo.phone,
      email: studentInfo.email,
      classCode: selectedClass.code,
      className: selectedClass.name,
      facilityId: selectedClass.facilityId,
      amount: selectedClass.price,
      paymentMethod,
      cardSerialNumber: cardSerial,
      channel: 'Quầy',
      status: 'Đã thanh toán',
      createdAt: new Date().toLocaleString('vi-VN'),
      invoiceNumber: `HD-${Math.floor(10000 + Math.random() * 90000)}`,
    };
    setCreatedOrder(newOrder);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">MH-04</span>
            <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold flex items-center">
              <Smartphone className="w-3 h-3 mr-1" /> Tối ưu Mobile
            </span>
            <h1 className="text-xl font-bold text-slate-900">Quầy ghi danh & Bán vé</h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Ghi danh học viên trực tiếp tại quầy, cấp phát thẻ giấy, đẩy đơn sang MISA eShop và in biên nhận
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left column: Form ghi danh */}
        <div className="lg:col-span-7 space-y-5">
          {/* Card 1: Học viên */}
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-5 space-y-4">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <div className="flex items-center space-x-2">
                <Search className="w-4 h-4 text-blue-600" />
                <h3 className="font-bold text-slate-800 text-sm">1. Tìm kiếm hoặc tạo mới học viên</h3>
              </div>
              <button
                type="button"
                onClick={() =>
                  setStudentInfo({
                    name: 'Trần Thị Mỹ Duyên',
                    phone: '0933445566',
                    email: 'myduyen@gmail.com',
                    address: 'Quận 1, TP.HCM',
                  })
                }
                className="text-xs text-blue-600 hover:underline flex items-center"
              >
                <UserPlus className="w-3.5 h-3.5 mr-1" /> Điền mẫu mới
              </button>
            </div>

            <div className="flex gap-2">
              <input
                type="tel"
                placeholder="Nhập số điện thoại học viên..."
                value={phoneSearch}
                onChange={(e) => setPhoneSearch(e.target.value)}
                className="flex-1 text-sm border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => alert(`Tìm thấy học viên: ${studentInfo.name} (${studentInfo.phone})`)}
                className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-700 transition"
              >
                Tìm
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Họ và tên học viên *</label>
                <input
                  type="text"
                  value={studentInfo.name}
                  onChange={(e) => setStudentInfo({ ...studentInfo, name: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg p-2 text-sm font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Số điện thoại *</label>
                <input
                  type="tel"
                  value={studentInfo.phone}
                  onChange={(e) => setStudentInfo({ ...studentInfo, phone: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg p-2 text-sm font-medium"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Chọn lớp & thẻ giấy */}
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-5 space-y-4">
            <h3 className="font-bold text-slate-800 text-sm border-b pb-3 border-slate-100">
              2. Chọn lớp học & Cấp số thẻ giấy
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Chọn lớp học (còn chỗ)</label>
              <select
                aria-label="Chọn lớp học còn chỗ"
                value={selectedClassId}
                onChange={(e) => setSelectedClassId(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-2.5 text-sm font-medium bg-white outline-none cursor-pointer"
              >
                {MOCK_CLASSES.filter((c) => c.status === 'Mở bán' || c.status === 'Đủ sĩ số').map((c) => (
                  <option key={c.id} value={c.id}>
                    [{c.code}] {c.name} - {c.price.toLocaleString('vi-VN')} đ (Đã đk: {c.enrolled}/{c.capacity})
                  </option>
                ))}
              </select>
            </div>

            <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-lg text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-600">Lịch học:</span>
                <span className="font-semibold text-slate-800">{selectedClass.schedule}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Phòng tập:</span>
                <span className="font-semibold text-slate-800">{selectedClass.room}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Giáo viên phụ trách:</span>
                <span className="font-semibold text-slate-800">{selectedClass.teacherName}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Số thẻ giấy phát hành <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={cardSerial}
                  onChange={(e) => setCardSerial(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-2 font-mono font-bold text-blue-700 text-sm"
                  placeholder="Ví dụ: THE-2026-0895"
                />
                <span className="text-[10px] text-slate-500">Thuộc dải số đã được giao ca này</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Hình thức thanh toán</label>
                <select
                  aria-label="Hình thức thanh toán"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value as any)}
                  className="w-full border border-slate-300 rounded-lg p-2 text-sm font-semibold bg-white"
                >
                  <option value="Tiền mặt">💵 Tiền mặt tại quầy</option>
                  <option value="Chuyển khoản">📱 Chuyển khoản (VietQR)</option>
                  <option value="Thẻ">💳 Quẹt thẻ POS</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleCreateOrder}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md shadow-blue-600/30 flex items-center justify-center space-x-2 text-sm transition cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Tạo đơn eShop & Xuất biên nhận ({selectedClass.price.toLocaleString('vi-VN')} đ)</span>
            </button>
          </div>
        </div>

        {/* Right column: Xem trước biên nhận & trạng thái đẩy */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-5 space-y-4 sticky top-20">
            <div className="flex items-center justify-between border-b pb-3 border-slate-100">
              <h3 className="font-bold text-slate-800 text-sm flex items-center space-x-2">
                <Printer className="w-4 h-4 text-slate-600" />
                <span>Biên nhận thu học phí (Mẫu in)</span>
              </h3>
              {createdOrder && (
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">
                  Đã tạo đơn
                </span>
              )}
            </div>

            {/* Receipt Preview */}
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-3 font-mono text-xs">
              <div className="text-center border-b pb-3 border-dashed border-slate-300">
                <div className="font-bold text-sm text-slate-900">CUNG VĂN HÓA LAO ĐỘNG TP.HCM</div>
                <div className="text-[10px] text-slate-500">55B Nguyễn Thị Minh Khai, P. Bến Thành, Q.1</div>
                <div className="font-bold text-xs mt-2 text-blue-700">BIÊN NHẬN THU HỌC PHÍ</div>
                <div className="text-[10px] text-slate-400">
                  Mã đơn: {createdOrder ? createdOrder.orderCode : 'DH-PREVIEW-001'}
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between">
                  <span className="text-slate-500">Học viên:</span>
                  <span className="font-bold text-slate-900">{studentInfo.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Số ĐT:</span>
                  <span className="text-slate-800">{studentInfo.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Môn / Lớp:</span>
                  <span className="font-semibold text-slate-900 text-right max-w-[180px] truncate">
                    {selectedClass.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Mã SKU:</span>
                  <span className="text-blue-600 font-bold">{selectedClass.code}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Số thẻ cấp:</span>
                  <span className="text-amber-700 font-bold">{cardSerial}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Phương thức:</span>
                  <span className="text-slate-800">{paymentMethod}</span>
                </div>
              </div>

              <div className="border-t border-dashed border-slate-300 pt-2 flex justify-between items-center text-sm">
                <span className="font-bold text-slate-900">TỔNG TIỀN:</span>
                <span className="font-bold text-rose-600 text-base">
                  {selectedClass.price.toLocaleString('vi-VN')} đ
                </span>
              </div>

              <div className="text-center pt-2 text-[10px] text-slate-400 border-t border-dashed border-slate-200">
                Cảm ơn quý học viên! Vui lòng xuất trình thẻ khi vào lớp.
              </div>
            </div>

            {createdOrder ? (
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => alert(`Lệnh in biên nhận [${createdOrder.orderCode}] đã gửi tới máy in bill!`)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center space-x-2 text-xs transition cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>In biên nhận (Khổ 80mm)</span>
                </button>
                <div className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 rounded p-2 text-center">
                  ✓ Đã tự động tạo hóa đơn điện tử và gửi thông báo SMS xác nhận cho học viên.
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-400 text-center italic">
                Bấm "Tạo đơn eShop & Xuất biên nhận" để hoàn tất giao dịch.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

