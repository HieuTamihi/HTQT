import React from 'react';
import {
  FolderTree,
  Tag,
  CalendarDays,
  CreditCard,
  Globe,
  Layers,
  ArrowRightLeft,
  UserCheck,
  Receipt,
  FileSpreadsheet,
  CheckCheck,
  Lock,
  GraduationCap,
  Calculator,
  FileText,
  ShieldAlert,
  Inbox,
  FileCheck2,
  FileCode2,
  Settings2,
  BarChart3,
  PieChart,
  Users,
  Award,
  BookOpen,
  ClipboardList,
  Target,
  Send,
  SlidersHorizontal,
  ChevronRight,
  Smartphone,
} from 'lucide-react';
import { UserRole } from '../../types';

export interface MenuItem {
  id: string;
  code: string;
  title: string;
  icon: React.ElementType;
  group: string;
  isMobileFriendly?: boolean;
}

export const ALL_MENU_ITEMS: MenuItem[] = [
  // Nhóm 1: Danh mục & Bảng giá
  { id: 'MH-01', code: 'MH-01', title: 'Danh mục cơ sở, dịch vụ, nguồn', icon: FolderTree, group: '1. Danh mục & Bảng giá' },
  { id: 'MH-02', code: 'MH-02', title: 'Bảng giá dịch vụ', icon: Tag, group: '1. Danh mục & Bảng giá' },

  // Nhóm 2: Ghi danh & Học vụ
  { id: 'MH-03', code: 'MH-03', title: 'Kế hoạch chiêu sinh', icon: CalendarDays, group: '2. Ghi danh & Học vụ' },
  { id: 'MH-04', code: 'MH-04', title: 'Quầy ghi danh', icon: CreditCard, group: '2. Ghi danh & Học vụ', isMobileFriendly: true },
  { id: 'MH-05', code: 'MH-05', title: 'Đăng ký trực tuyến', icon: Globe, group: '2. Ghi danh & Học vụ', isMobileFriendly: true },
  { id: 'MH-06', code: 'MH-06', title: 'Quản lý lô thẻ giấy', icon: Layers, group: '2. Ghi danh & Học vụ' },
  { id: 'MH-07', code: 'MH-07', title: 'Chuyển lớp, bảo lưu', icon: ArrowRightLeft, group: '2. Ghi danh & Học vụ' },
  { id: 'MH-08', code: 'MH-08', title: 'Điểm danh lớp học', icon: UserCheck, group: '2. Ghi danh & Học vụ', isMobileFriendly: true },

  // Nhóm 3: Đối soát & Chốt sổ
  { id: 'MH-09', code: 'MH-09', title: 'Kết ca & Nộp quỹ', icon: Receipt, group: '3. Đối soát & Chốt sổ', isMobileFriendly: true },
  { id: 'MH-10', code: 'MH-10', title: 'Nhập sao kê ngân hàng', icon: FileSpreadsheet, group: '3. Đối soát & Chốt sổ' },
  { id: 'MH-11', code: 'MH-11', title: 'Đối soát 3 bên (Đơn-HĐ-Tiền)', icon: CheckCheck, group: '3. Đối soát & Chốt sổ' },
  { id: 'MH-12', code: 'MH-12', title: 'Chốt ca & Khóa ngày cơ sở', icon: Lock, group: '3. Đối soát & Chốt sổ' },

  // Nhóm 4: Thù lao giáo viên
  { id: 'MH-13', code: 'MH-13', title: 'Hồ sơ giáo viên & HĐGD', icon: GraduationCap, group: '4. Thù lao giáo viên' },
  { id: 'MH-14', code: 'MH-14', title: 'Bảng kê thù lao cuối khóa', icon: Calculator, group: '4. Thù lao giáo viên', isMobileFriendly: true },

  // Nhóm 5: Đề xuất chi & Kiểm soát
  { id: 'MH-15', code: 'MH-15', title: 'Đề xuất chi (Luồng A/B)', icon: FileText, group: '5. Đề xuất chi & Hợp đồng' },
  { id: 'MH-16', code: 'MH-16', title: 'Kiểm soát chi hồ sơ', icon: ShieldAlert, group: '5. Đề xuất chi & Hợp đồng' },
  { id: 'MH-17', code: 'MH-17', title: 'Hộp duyệt Ban Giám đốc', icon: Inbox, group: '5. Đề xuất chi & Hợp đồng' },
  { id: 'MH-18', code: 'MH-18', title: 'Hợp đồng, dự toán, công nợ', icon: FileCheck2, group: '5. Đề xuất chi & Hợp đồng' },

  // Nhóm 6: Kế toán, Báo cáo & Hệ thống
  { id: 'MH-19', code: 'MH-19', title: 'Chứng từ kế toán MISA', icon: FileCode2, group: '6. Kế toán & Quản trị' },
  { id: 'MH-20', code: 'MH-20', title: 'Ánh xạ TK & Tham số (21:00)', icon: Settings2, group: '6. Kế toán & Quản trị' },
  { id: 'MH-21', code: 'MH-21', title: 'Dashboard Ban Giám đốc', icon: BarChart3, group: '6. Kế toán & Quản trị' },
  { id: 'MH-22', code: 'MH-22', title: 'Báo cáo & Thống kê', icon: PieChart, group: '6. Kế toán & Quản trị' },
  { id: 'MH-23', code: 'MH-23', title: 'Người dùng & Nhật ký audit', icon: Users, group: '6. Kế toán & Quản trị' },

  // Nhóm 7: Hồ sơ CBCC
  { id: 'CBCC-01', code: 'CBCC', title: 'Danh sách hồ sơ CBCC', icon: BookOpen, group: '7. Hồ sơ CBCC' },
  { id: 'CBCC-02', code: 'CBCC-CT', title: 'Chi tiết hồ sơ (5 Tabs)', icon: FileText, group: '7. Hồ sơ CBCC' },

  // Nhóm 8: KPI
  { id: 'KPI-01', code: 'KPI 7.1', title: 'Danh mục công việc đơn vị', icon: Target, group: '8. Quản lý KPI & Đánh giá' },
  { id: 'KPI-02', code: 'KPI 7.2', title: 'Quản lý nhiệm vụ (Giao/Nhận)', icon: ClipboardList, group: '8. Quản lý KPI & Đánh giá' },
  { id: 'KPI-03', code: 'KPI 7.3', title: 'Nộp sản phẩm công việc', icon: Send, group: '8. Quản lý KPI & Đánh giá' },
  { id: 'KPI-04', code: 'KPI 7.4', title: 'Bảng tổng hợp đánh giá quý', icon: Award, group: '8. Quản lý KPI & Đánh giá' },
  { id: 'KPI-05', code: 'KPI 7.5', title: 'Đánh giá bình xét cơ sở/phòng', icon: SlidersHorizontal, group: '8. Quản lý KPI & Đánh giá' },
  { id: 'KPI-06', code: 'KPI 7.6', title: 'Tham mưu kết quả (TP TC-HC)', icon: SlidersHorizontal, group: '8. Quản lý KPI & Đánh giá' },
  { id: 'KPI-07', code: 'KPI 7.7', title: 'Bình xét Ban Giám đốc', icon: Award, group: '8. Quản lý KPI & Đánh giá' },
];

export const getAccessibleMenuIds = (role: UserRole): string[] => {
  switch (role) {
    case 'BAN_GIAM_DOC':
      return ['MH-02', 'MH-17', 'MH-21', 'MH-22', 'KPI-07'];
    case 'KE_TOAN_TONG_HOP':
      return ['MH-01', 'MH-02', 'MH-19', 'MH-20', 'MH-22'];
    case 'KE_TOAN_THU':
      return ['MH-10', 'MH-11', 'MH-12', 'MH-19', 'MH-22'];
    case 'KE_TOAN_THANH_TOAN':
      return ['MH-13', 'MH-14', 'MH-16', 'MH-18', 'MH-22'];
    case 'TO_TRUONG_TAI_VU':
      return ['MH-06'];
    case 'THU_QUY':
      return ['MH-09'];
    case 'TRUONG_CO_SO':
      return ['MH-11', 'MH-12'];
    case 'NHAN_VIEN_GHI_DANH':
      return ['MH-04', 'MH-07', 'MH-09'];
    case 'PHONG_VAN_HOA':
      return ['MH-03', 'MH-13'];
    case 'GIAO_VIEN':
      return ['MH-08', 'MH-14'];
    case 'HOC_VIEN':
      return ['MH-05'];
    case 'QUAN_TRI_HE_THONG':
      return ['MH-23'];
    case 'NGUOI_DUNG_NOI_BO':
      return ['MH-15', 'KPI-02', 'KPI-03', 'KPI-04'];
    case 'TRUONG_PHONG_TCHQT':
      return ['CBCC-01', 'CBCC-02', 'KPI-01', 'KPI-06', 'MH-23'];
    case 'LANH_DAO_PHONG_CO_SO':
      return ['KPI-02', 'KPI-05'];
    case 'ALL':
    default:
      return ALL_MENU_ITEMS.map((item) => item.id);
  }
};

interface SidebarProps {
  currentScreenId: string;
  onSelectScreen: (screenId: string) => void;
  currentRole: UserRole;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentScreenId,
  onSelectScreen,
  currentRole,
}) => {
  const accessibleIds = getAccessibleMenuIds(currentRole);
  const visibleItems = ALL_MENU_ITEMS.filter((item) => accessibleIds.includes(item.id));

  // Nhóm các menu items
  const groupedItems = visibleItems.reduce<Record<string, MenuItem[]>>((acc, item) => {
    if (!acc[item.group]) acc[item.group] = [];
    acc[item.group].push(item);
    return acc;
  }, {});

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col h-[calc(100vh-4rem)] shrink-0 overflow-y-auto">
      <div className="p-3 border-b border-slate-800 bg-slate-950/40">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Hệ thống màn hình
          </span>
          <span className="text-[10px] bg-blue-900/60 text-blue-300 font-semibold px-2 py-0.5 rounded-full border border-blue-700/50">
            {visibleItems.length} Màn hình
          </span>
        </div>
      </div>

      <div className="flex-1 p-2 space-y-4">
        {Object.entries(groupedItems).map(([groupTitle, items]) => (
          <div key={groupTitle} className="space-y-1">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-2 py-1">
              {groupTitle}
            </h4>
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreenId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectScreen(item.id)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition cursor-pointer text-left ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 truncate">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span className="truncate">{item.title}</span>
                  </div>
                  <div className="flex items-center space-x-1 shrink-0 ml-1">
                    {item.isMobileFriendly && (
                      <span
                        title="Tối ưu giao diện mobile"
                        className={`text-[9px] px-1 py-0.2 rounded font-mono ${
                          isActive
                            ? 'bg-blue-700 text-blue-200'
                            : 'bg-slate-800 text-amber-400 border border-amber-500/30'
                        }`}
                      >
                        📱
                      </span>
                    )}
                    <span
                      className={`text-[10px] font-mono px-1 rounded ${
                        isActive ? 'text-blue-100 bg-blue-700/60' : 'text-slate-400 bg-slate-800/60'
                      }`}
                    >
                      {item.code}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-slate-800 bg-slate-950/60 text-center">
        <p className="text-[10px] text-slate-500">Bản quyền giải pháp thuộc về Ringnet</p>
        <p className="text-[10px] text-slate-600 font-mono">Phiên bản UI nháp 1.0</p>
      </div>
    </aside>
  );
};

