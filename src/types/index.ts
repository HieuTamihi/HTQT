export type UserRole =
  | 'ALL'
  | 'BAN_GIAM_DOC'
  | 'KE_TOAN_TONG_HOP'
  | 'KE_TOAN_THU'
  | 'KE_TOAN_THANH_TOAN'
  | 'TO_TRUONG_TAI_VU'
  | 'THU_QUY'
  | 'TRUONG_CO_SO'
  | 'NHAN_VIEN_GHI_DANH'
  | 'PHONG_VAN_HOA'
  | 'GIAO_VIEN'
  | 'HOC_VIEN'
  | 'QUAN_TRI_HE_THONG'
  | 'NGUOI_DUNG_NOI_BO'
  | 'TRUONG_PHONG_TCHQT'
  | 'LANH_DAO_PHONG_CO_SO';

export interface Facility {
  id: string;
  name: string;
  code: string;
  address: string;
  prefix: string; // Tiền tố mã mặt hàng eShop (ví dụ: TS-, CS1-, CS2-)
}

export type ClassStatus = 'Nháp' | 'Mở bán' | 'Đủ sĩ số' | 'Đóng' | 'Kết thúc';
export type RegistrationStatus = 'Giữ chỗ' | 'Chờ thanh toán' | 'Đã thanh toán' | 'Chuyển lớp' | 'Bảo lưu' | 'Hủy';
export type ReconcileStatus = 'Khớp' | 'Thiếu hóa đơn' | 'Thiếu tiền' | 'Thừa tiền' | 'Không mã đơn' | 'Lệch số tiền';
export type CompensationStatus = 'Nháp' | 'Giáo viên xác nhận' | 'Kế toán duyệt' | 'Đã chuyển đề xuất chi';
export type ExpenseRequestStatus = 'Nháp' | 'Chờ kế toán' | 'Tạm dừng' | 'Chờ duyệt' | 'Đã duyệt' | 'Từ chối' | 'Đã chi';
export type ApprovalResult = 'Đồng ý' | 'Trả lại' | 'Tạm dừng' | 'Từ chối';
export type KpiSelfStatus = 'Nháp' | 'Chờ duyệt' | 'Đã duyệt' | 'Trả lại';
export type KpiAssignedStatus = 'Chờ xác nhận' | 'Đã xác nhận' | 'Đã phản hồi';
export type KpiProductStatus = 'Đang thực hiện' | 'Quá hạn' | 'Hoàn thành';

export interface CourseClass {
  id: string;
  code: string;
  name: string;
  category: string;
  facilityId: string;
  schedule: string;
  room: string;
  capacity: number;
  enrolled: number;
  price: number;
  startDate: string;
  endDate: string;
  status: ClassStatus;
  teacherName: string;
  teacherRatePercent: number;
  syncedToEshop: boolean;
}

export interface StudentRegistration {
  id: string;
  orderCode: string;
  studentName: string;
  phone: string;
  email?: string;
  classCode: string;
  className: string;
  facilityId: string;
  amount: number;
  paymentMethod: 'Tiền mặt' | 'Chuyển khoản' | 'Thẻ' | 'Khác';
  cardSerialNumber?: string; // Số thẻ giấy
  channel: 'Quầy' | 'Online';
  status: RegistrationStatus;
  createdAt: string;
  expiredAt?: string; // Hạn giữ chỗ
  invoiceNumber?: string;
  cancelReason?: string;
}

export interface CardBatch {
  id: string;
  batchCode: string;
  assignedTo: string;
  facilityId: string;
  startSerial: number;
  endSerial: number;
  totalCards: number;
  usedCards: number;
  cancelledCards: number;
  remainCards: number;
  status: 'Đang phát hành' | 'Đã thu hồi' | 'Hết số';
  dateAssigned: string;
}

export interface ReconcileRecord {
  id: string;
  orderCode: string;
  facilityId: string;
  date: string;
  amountOrder: number;
  eshopStatus: string;
  invoiceCode?: string;
  amountInvoice: number;
  bankTxId?: string;
  amountBank: number;
  bankContent?: string;
  status: ReconcileStatus;
  explanation?: string;
  manualMatchReason?: string;
}

export interface TeacherProfile {
  id: string;
  name: string;
  taxCode: string;
  idCard: string;
  phone: string;
  bankName: string;
  bankAccountNumber: string;
  contractNumber: string;
  contractSignDate: string;
  specialty: string;
  remunerationRatePercent: number;
  status: 'Đang giảng dạy' | 'Tạm ngừng';
}

export interface CompensationSheet {
  id: string;
  sheetCode: string;
  teacherId: string;
  teacherName: string;
  classCode: string;
  className: string;
  facilityId: string;
  totalRevenue: number;
  ratePercent: number;
  grossAmount: number;
  taxAmount: number; // Thuế TNCN
  netAmount: number; // Thực nhận
  status: CompensationStatus;
  confirmedByTeacherAt?: string;
  approvedByAccountantAt?: string;
}

export interface ExpenseRequest {
  id: string;
  requestCode: string;
  creatorName: string;
  department: string;
  facilityId: string;
  content: string;
  amount: number;
  fundSource: string;
  budgetCategory: string;
  contractNumber?: string;
  flowType: 'Luồng A' | 'Luồng B'; // Luồng A: Trong dự toán thường quy, Luồng B: Ngoài dự toán / Dự án lớn
  status: ExpenseRequestStatus;
  createdAt: string;
  accountantNote?: string;
  directorNote?: string;
  attachmentCount: number;
}

