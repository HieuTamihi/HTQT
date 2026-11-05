import React from 'react';

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  let colorStyle = 'bg-gray-100 text-gray-700 border-gray-300';

  switch (status) {
    // Thành công / Đã hoàn thành / Khớp / Đã duyệt
    case 'Đã thanh toán':
    case 'Khớp':
    case 'Đã duyệt':
    case 'Đồng ý':
    case 'Hoàn thành':
    case 'Đã xác nhận':
    case 'Đã chi':
    case 'Kế toán duyệt':
    case 'Đã chuyển đề xuất chi':
    case 'Đang áp dụng':
    case 'Hoạt động':
    case 'Đang giảng dạy':
      colorStyle = 'bg-emerald-50 text-emerald-700 border-emerald-300';
      break;

    // Cảnh báo / Chờ xử lý / Đang thực hiện / Mở bán
    case 'Mở bán':
    case 'Chờ thanh toán':
    case 'Chờ duyệt':
    case 'Chờ kế toán':
    case 'Chờ xác nhận':
    case 'Đang thực hiện':
    case 'Giáo viên xác nhận':
    case 'Đang phát hành':
      colorStyle = 'bg-amber-50 text-amber-700 border-amber-300';
      break;

    // Thông tin / Giữ chỗ / Chuyển lớp / Đủ sĩ số
    case 'Giữ chỗ':
    case 'Chuyển lớp':
    case 'Đủ sĩ số':
    case 'Bảo lưu':
      colorStyle = 'bg-blue-50 text-blue-700 border-blue-300';
      break;

    // Cảnh báo lỗi / Lệch / Ngoại lệ / Quá hạn
    case 'Thiếu hóa đơn':
    case 'Thiếu tiền':
    case 'Thừa tiền':
    case 'Không mã đơn':
    case 'Lệch số tiền':
    case 'Quá hạn':
    case 'Tạm dừng':
      colorStyle = 'bg-orange-50 text-orange-700 border-orange-300';
      break;

    // Từ chối / Hủy / Trả lại / Không hoàn thành
    case 'Hủy':
    case 'Từ chối':
    case 'Trả lại':
    case 'Đã phản hồi':
    case 'Đóng':
    case 'Kết thúc':
    case 'Hết số':
    case 'Đã thu hồi':
      colorStyle = 'bg-rose-50 text-rose-700 border-rose-300';
      break;

    // Nháp
    case 'Nháp':
    default:
      colorStyle = 'bg-slate-100 text-slate-600 border-slate-300';
      break;
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colorStyle} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full mr-1.5 bg-current opacity-70"></span>
      {status}
    </span>
  );
};

