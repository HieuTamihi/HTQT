/**
 * Navigation & Business Metadata
 * Danh mục 25 phân hệ nghiệp vụ chuẩn hóa CVHLD
 */

const NAVIGATION_ITEMS = [
      {
        group: 'Tổng quan & Báo cáo',
        items: [
          { id: 'dashboard', title: 'Tổng quan điều hành', icon: 'layout-dashboard', roles: ['ALL', 'BAN_GIAM_DOC'] },
          { id: 'reports', title: 'Báo cáo & Thống kê thu chi', icon: 'bar-chart-3', roles: ['ALL', 'BAN_GIAM_DOC', 'KE_TOAN_TONG_HOP', 'KE_TOAN_THU', 'KE_TOAN_THANH_TOAN'] }
        ]
      },
      {
        group: 'Đào tạo & Học vụ',
        items: [
          { id: 'classes', title: 'Kế hoạch mở lớp & Chiêu sinh', icon: 'calendar-days', roles: ['ALL', 'PHONG_VAN_HOA'] },
          { id: 'counter', title: 'Quầy ghi danh & Bán vé', icon: 'ticket', roles: ['ALL', 'NHAN_VIEN_GHI_DANH'] },
          { id: 'online_reg', title: 'Cổng đăng ký trực tuyến (VietQR)', icon: 'globe', roles: ['ALL', 'HOC_VIEN'] },
          { id: 'attendance', title: 'Điểm danh lớp & Học viên', icon: 'user-check', roles: ['ALL', 'GIAO_VIEN'] },
          { id: 'class_transfer', title: 'Chuyển lớp & Bảo lưu học phí', icon: 'arrow-right-left', roles: ['ALL', 'NHAN_VIEN_GHI_DANH'] },
          { id: 'cards', title: 'Quản lý dải thẻ giấy', icon: 'layers', roles: ['ALL', 'TO_TRUONG_TAI_VU'] },
          { id: 'pricing', title: 'Biểu giá niêm yết theo QĐ', icon: 'tag', roles: ['ALL', 'BAN_GIAM_DOC', 'KE_TOAN_TONG_HOP'] }
        ]
      },
      {
        group: 'Tài chính & Đối soát',
        items: [
          { id: 'shift_close', title: 'Kết ca & Nộp quỹ hàng ngày', icon: 'receipt', roles: ['ALL', 'NHAN_VIEN_GHI_DANH', 'THU_QUY'] },
          { id: 'reconcile', title: 'Đối soát 3 bên (Đơn - HĐ - Tiền)', icon: 'check-check', roles: ['ALL', 'KE_TOAN_THU'] },
          { id: 'bank_statement', title: 'Nhập sao kê ngân hàng', icon: 'file-spreadsheet', roles: ['ALL', 'KE_TOAN_THU'] },
          { id: 'day_lock', title: 'Chốt sổ ngày (Khóa sổ lúc 21h)', icon: 'lock', roles: ['ALL', 'KE_TOAN_THU'] },
          { id: 'accounting_export', title: 'Chứng từ xuất MISA Kế toán', icon: 'file-code', roles: ['ALL', 'KE_TOAN_TONG_HOP', 'KE_TOAN_THU'] }
        ]
      },
      {
        group: 'Thù lao & Chi phí',
        items: [
          { id: 'teacher_payroll', title: 'Bảng kê thù lao giáo viên', icon: 'calculator', roles: ['ALL', 'KE_TOAN_THANH_TOAN', 'GIAO_VIEN'] },
          { id: 'teachers', title: 'Hồ sơ giáo viên & Hợp đồng', icon: 'graduation-cap', roles: ['ALL', 'KE_TOAN_THANH_TOAN', 'PHONG_VAN_HOA'] },
          { id: 'expense_request', title: 'Đề xuất chi (Luồng A / Luồng B)', icon: 'file-text', roles: ['ALL', 'NGUOI_DUNG_NOI_BO', 'TRUONG_PHONG_TCHQT'] },
          { id: 'expense_check', title: 'Kiểm soát chi & Thẩm tra hồ sơ', icon: 'shield-alert', roles: ['ALL', 'KE_TOAN_THANH_TOAN'] },
          { id: 'approval_box', title: 'Hộp duyệt chi - Ban Giám đốc', icon: 'inbox', roles: ['ALL', 'BAN_GIAM_DOC'] },
          { id: 'contracts', title: 'Sổ hợp đồng kinh tế & Dự toán', icon: 'file-check-2', roles: ['ALL', 'KE_TOAN_THANH_TOAN'] }
        ]
      },
      {
        group: 'Nhân sự & KPI',
        items: [
          { id: 'cbcc_list', title: 'Hồ sơ Cán bộ, Công chức (CBCC)', icon: 'users', roles: ['ALL', 'TRUONG_PHONG_TCHQT'] },
          { id: 'kpi', title: 'Quản lý nhiệm vụ & Đánh giá KPI', icon: 'target', roles: ['ALL', 'BAN_GIAM_DOC', 'TRUONG_PHONG_TCHQT', 'NGUOI_DUNG_NOI_BO'] }
        ]
      },
      {
        group: 'Cấu hình hệ thống',
        items: [
          { id: 'categories', title: 'Danh mục cơ sở & Dịch vụ', icon: 'folder-tree', roles: ['ALL', 'KE_TOAN_TONG_HOP'] },
          { id: 'system_params', title: 'Ánh xạ tài khoản & Tham số', icon: 'settings-2', roles: ['ALL', 'KE_TOAN_TONG_HOP'] },
          { id: 'audit_log', title: 'Nhật ký thao tác & Tài khoản', icon: 'history', roles: ['ALL', 'QUAN_TRI_HE_THONG'] }
        ]
      }
    ];

