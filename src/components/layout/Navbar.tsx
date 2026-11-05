import React, { useState } from 'react';
import {
  Building2,
  UserCheck,
  Smartphone,
  Monitor,
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  RefreshCw,
  Shield,
  Layers,
} from 'lucide-react';
import { UserRole } from '../../types';
import { FACILITIES } from '../../data/mockData';

interface NavbarProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  selectedFacility: string;
  onFacilityChange: (facilityId: string) => void;
  isMobileMode: boolean;
  onToggleMobileMode: () => void;
  onRequest2FA: () => void;
  isTwoFactorVerified: boolean;
}

export const ROLE_LABELS: Record<UserRole, { label: string; group: string; requires2FA?: boolean }> = {
  ALL: { label: 'Tất cả màn hình (Demo Tổng thể)', group: 'Trình chiếu' },
  BAN_GIAM_DOC: { label: 'Ban Giám đốc', group: 'Lãnh đạo', requires2FA: true },
  KE_TOAN_TONG_HOP: { label: 'Kế toán tổng hợp', group: 'Tài chính - Kế toán', requires2FA: true },
  KE_TOAN_THU: { label: 'Kế toán thu', group: 'Tài chính - Kế toán' },
  KE_TOAN_THANH_TOAN: { label: 'Kế toán thanh toán', group: 'Tài chính - Kế toán', requires2FA: true },
  TO_TRUONG_TAI_VU: { label: 'Tổ trưởng Tổ Tài vụ', group: 'Tài chính - Kế toán' },
  THU_QUY: { label: 'Thủ quỹ', group: 'Tài chính - Kế toán' },
  TRUONG_CO_SO: { label: 'Trưởng cơ sở', group: 'Quản lý cơ sở' },
  NHAN_VIEN_GHI_DANH: { label: 'Nhân viên ghi danh', group: 'Quầy & Học vụ' },
  PHONG_VAN_HOA: { label: 'Phòng Văn hóa', group: 'Chuyên môn' },
  GIAO_VIEN: { label: 'Giáo viên', group: 'Đào tạo' },
  HOC_VIEN: { label: 'Học viên (Không cần tài khoản)', group: 'Cổng thông tin' },
  QUAN_TRI_HE_THONG: { label: 'Quản trị hệ thống', group: 'Hệ thống', requires2FA: true },
  TRUONG_PHONG_TCHQT: { label: 'Trưởng phòng TC-HC-QT', group: 'Tổ chức - Hành chính' },
  LANH_DAO_PHONG_CO_SO: { label: 'Lãnh đạo Phòng / Cơ sở', group: 'Quản lý' },
  NGUOI_DUNG_NOI_BO: { label: 'Người dùng nội bộ (Chung)', group: 'Toàn thể CBCC' },
};

export const Navbar: React.FC<NavbarProps> = ({
  currentRole,
  onRoleChange,
  selectedFacility,
  onFacilityChange,
  isMobileMode,
  onToggleMobileMode,
  onRequest2FA,
  isTwoFactorVerified,
}) => {
  const [showSyncDropdown, setShowSyncDropdown] = useState(false);
  const currentRoleInfo = ROLE_LABELS[currentRole];
  const currentFacility = FACILITIES.find((f) => f.id === selectedFacility) || FACILITIES[0];

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-amber-500 flex items-center justify-center font-black text-xl shadow-lg shadow-blue-500/30 text-white">
              C
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-base tracking-tight text-white">HTQT CVHLĐ</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Ringnet UI Nháp
                </span>
              </div>
              <p className="text-xs text-slate-400 truncate max-w-xs sm:max-w-md">
                Cung Văn hóa Lao động TP.HCM
              </p>
            </div>
          </div>

          {/* Center Actions: Cơ sở & Vai trò */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Bộ chọn Cơ sở */}
            <div className="relative flex items-center bg-slate-800/80 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 hover:border-slate-600 transition">
              <Building2 className="w-4 h-4 text-amber-400 mr-2 shrink-0" />
              <select
                aria-label="Chọn cơ sở làm việc"
                value={selectedFacility}
                onChange={(e) => onFacilityChange(e.target.value)}
                className="bg-transparent text-white font-medium outline-none cursor-pointer pr-4"
              >
                {FACILITIES.map((fac) => (
                  <option key={fac.id} value={fac.id} className="bg-slate-900 text-white">
                    [{fac.code}] {fac.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Bộ chuyển đổi vai trò (Role Switcher) */}
            <div className="relative flex items-center bg-blue-950/60 border border-blue-700/60 rounded-lg px-2.5 py-1.5 text-xs text-blue-100 hover:border-blue-500 transition">
              <UserCheck className="w-4 h-4 text-blue-400 mr-2 shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-blue-300 uppercase tracking-wider font-semibold">
                  Vai trò đang giả lập:
                </span>
                <select
                  aria-label="Chọn vai trò giả lập"
                  value={currentRole}
                  onChange={(e) => onRoleChange(e.target.value as UserRole)}
                  className="bg-transparent text-white font-semibold outline-none cursor-pointer pr-4 text-xs"
                >
                  <option value="ALL" className="bg-slate-900 text-amber-300 font-bold">
                    ⚡ [Trình chiếu] Tất cả màn hình (Demo tổng thể)
                  </option>
                  <optgroup label="Tài chính & Thu ngân" className="bg-slate-900 text-slate-300">
                    <option value="BAN_GIAM_DOC">Ban Giám đốc (Yêu cầu 2FA)</option>
                    <option value="KE_TOAN_TONG_HOP">Kế toán tổng hợp (Yêu cầu 2FA)</option>
                    <option value="KE_TOAN_THU">Kế toán thu</option>
                    <option value="KE_TOAN_THANH_TOAN">Kế toán thanh toán (Yêu cầu 2FA)</option>
                    <option value="TO_TRUONG_TAI_VU">Tổ trưởng Tổ Tài vụ</option>
                    <option value="THU_QUY">Thủ quỹ</option>
                  </optgroup>
                  <optgroup label="Học vụ & Cơ sở" className="bg-slate-900 text-slate-300">
                    <option value="TRUONG_CO_SO">Trưởng cơ sở</option>
                    <option value="NHAN_VIEN_GHI_DANH">Nhân viên ghi danh</option>
                    <option value="PHONG_VAN_HOA">Phòng Văn hóa</option>
                    <option value="GIAO_VIEN">Giáo viên</option>
                    <option value="HOC_VIEN">Học viên (Đăng ký trực tuyến)</option>
                  </optgroup>
                  <optgroup label="Nhân sự & KPI" className="bg-slate-900 text-slate-300">
                    <option value="TRUONG_PHONG_TCHQT">Trưởng phòng TC-HC-QT</option>
                    <option value="LANH_DAO_PHONG_CO_SO">Lãnh đạo Phòng / Cơ sở</option>
                    <option value="NGUOI_DUNG_NOI_BO">Người dùng nội bộ (MH-15 & KPI)</option>
                    <option value="QUAN_TRI_HE_THONG">Quản trị hệ thống (Yêu cầu 2FA)</option>
                  </optgroup>
                </select>
              </div>
            </div>

            {/* 2FA Badge status if applicable */}
            {currentRoleInfo.requires2FA && (
              <button
                onClick={onRequest2FA}
                className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition cursor-pointer ${
                  isTwoFactorVerified
                    ? 'bg-emerald-950/50 border-emerald-500/50 text-emerald-300'
                    : 'bg-rose-950/50 border-rose-500/50 text-rose-300 animate-pulse'
                }`}
                title="Bấm để mở modal xác thực 2 bước"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>{isTwoFactorVerified ? '2FA: Đã xác thực' : '2FA: Chưa kích hoạt'}</span>
              </button>
            )}
          </div>

          {/* Right Controls: Trạng thái đồng bộ + Mobile Simulator */}
          <div className="flex items-center space-x-2">
            {/* Sync Status Button with dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSyncDropdown(!showSyncDropdown)}
                className="flex items-center space-x-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg text-xs font-medium border border-slate-700 transition cursor-pointer"
                title="Trạng thái kết nối phần mềm ngoài"
              >
                <RefreshCw className="w-3.5 h-3.5 text-blue-400" />
                <span className="hidden sm:inline">Kết nối ngoài</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {showSyncDropdown && (
                <div className="absolute right-0 mt-2 w-72 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-3 text-xs z-50 animate-in fade-in zoom-in-95">
                  <div className="font-semibold text-white mb-2 flex items-center justify-between border-b border-slate-700 pb-2">
                    <span>Đồng bộ phần mềm bên ngoài</span>
                    <span className="text-[10px] text-slate-400">Tự động</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-1.5 bg-slate-900/50 rounded-lg">
                      <div>
                        <div className="font-medium text-slate-200">MISA eShop</div>
                        <div className="text-[10px] text-slate-400">Tiền tố: [{currentFacility.prefix}]</div>
                      </div>
                      <span className="inline-flex items-center text-[10px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800">
                        <CheckCircle2 className="w-3 h-3 mr-1" /> Đang kết nối
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-1.5 bg-slate-900/50 rounded-lg">
                      <div>
                        <div className="font-medium text-slate-200">Hóa đơn điện tử</div>
                        <div className="text-[10px] text-slate-400">Khớp đơn tự động</div>
                      </div>
                      <span className="inline-flex items-center text-[10px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800">
                        <CheckCircle2 className="w-3 h-3 mr-1" /> Sẵn sàng
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-1.5 bg-slate-900/50 rounded-lg">
                      <div>
                        <div className="font-medium text-slate-200">Ngân hàng (VietQR / Sao kê)</div>
                        <div className="text-[10px] text-slate-400">Trích mã đơn theo ND</div>
                      </div>
                      <span className="inline-flex items-center text-[10px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800">
                        <CheckCircle2 className="w-3 h-3 mr-1" /> Đã kết nối
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-1.5 bg-slate-900/50 rounded-lg">
                      <div>
                        <div className="font-medium text-slate-200">MISA kế toán</div>
                        <div className="text-[10px] text-slate-400">Xuất file chứng từ</div>
                      </div>
                      <span className="inline-flex items-center text-[10px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800">
                        <CheckCircle2 className="w-3 h-3 mr-1" /> Sẵn sàng xuất
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile View Toggle */}
            <button
              onClick={onToggleMobileMode}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                isMobileMode
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-sm shadow-amber-500/40'
                  : 'bg-slate-800 text-slate-300 hover:text-white border-slate-700 hover:bg-slate-700'
              }`}
              title="Chuyển chế độ xem khung điện thoại (cho các màn hình tối ưu di động)"
            >
              {isMobileMode ? <Smartphone className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
              <span className="hidden md:inline">
                {isMobileMode ? 'Xem Mobile (Đang bật)' : 'Giả lập Mobile'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

