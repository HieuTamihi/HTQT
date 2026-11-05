import React, { useState } from 'react';
import { UserRole } from './types';
import { Navbar, ROLE_LABELS } from './components/layout/Navbar';
import { Sidebar, ALL_MENU_ITEMS, getAccessibleMenuIds } from './components/layout/Sidebar';
import { TwoFactorModal } from './components/common/TwoFactorModal';

// Screens
import { MH01_DanhMuc } from './components/screens/MH01_DanhMuc';
import { MH02_BangGia } from './components/screens/MH02_BangGia';
import { MH03_KeHoachChieuSinh } from './components/screens/MH03_KeHoachChieuSinh';
import { MH04_QuayGhiDanh } from './components/screens/MH04_QuayGhiDanh';
import { MH05_DangKyOnline } from './components/screens/MH05_DangKyOnline';
import { MH06_LoThe } from './components/screens/MH06_LoThe';
import { MH07_ChuyenLopBaoLuu } from './components/screens/MH07_ChuyenLopBaoLuu';
import { MH08_DiemDanh } from './components/screens/MH08_DiemDanh';
import { MH09_KetCa } from './components/screens/MH09_KetCa';
import { MH10_NhapSaoKe } from './components/screens/MH10_NhapSaoKe';
import { MH11_DoiSoat } from './components/screens/MH11_DoiSoat';
import { MH12_ChotCa } from './components/screens/MH12_ChotCa';
import { MH13_HoSoGiaoVien } from './components/screens/MH13_HoSoGiaoVien';
import { MH14_BangKeThuLao } from './components/screens/MH14_BangKeThuLao';
import { MH15_DeXuatChi } from './components/screens/MH15_DeXuatChi';
import { MH16_KiemSoatChi } from './components/screens/MH16_KiemSoatChi';
import { MH17_HopDuyet } from './components/screens/MH17_HopDuyet';
import { MH18_HopDongDuToanCongNo } from './components/screens/MH18_HopDongDuToanCongNo';
import { MH19_ChungTuKeToan } from './components/screens/MH19_ChungTuKeToan';
import { MH20_AnhXaTaiKhoanThamSo } from './components/screens/MH20_AnhXaTaiKhoanThamSo';
import { MH21_Dashboard } from './components/screens/MH21_Dashboard';
import { MH22_BaoCao } from './components/screens/MH22_BaoCao';
import { MH23_NguoiDungNhatKy } from './components/screens/MH23_NguoiDungNhatKy';
import { CBCC_Screens } from './components/screens/CBCC_Screens';
import { KPI_Screens } from './components/screens/KPI_Screens';

export const App: React.FC = () => {
  const [currentRole, setCurrentRole] = useState<UserRole>('ALL');
  const [selectedFacility, setSelectedFacility] = useState<string>('TS');
  const [currentScreenId, setCurrentScreenId] = useState<string>('MH-21');
  const [isMobileMode, setIsMobileMode] = useState<boolean>(false);

  // 2FA state
  const [show2FAModal, setShow2FAModal] = useState<boolean>(false);
  const [pendingRole, setPendingRole] = useState<UserRole | null>(null);
  const [isTwoFactorVerified, setIsTwoFactorVerified] = useState<boolean>(true);

  const handleRoleChange = (role: UserRole) => {
    const roleInfo = ROLE_LABELS[role];
    if (roleInfo.requires2FA && role !== 'ALL') {
      setPendingRole(role);
      setShow2FAModal(true);
    } else {
      setCurrentRole(role);
      // Auto-select first screen accessible by this role
      const accessible = getAccessibleMenuIds(role);
      if (accessible.length > 0 && !accessible.includes(currentScreenId)) {
        setCurrentScreenId(accessible[0]);
      }
    }
  };

  const handle2FASuccess = () => {
    if (pendingRole) {
      setCurrentRole(pendingRole);
      setIsTwoFactorVerified(true);
      const accessible = getAccessibleMenuIds(pendingRole);
      if (accessible.length > 0 && !accessible.includes(currentScreenId)) {
        setCurrentScreenId(accessible[0]);
      }
      setPendingRole(null);
    }
    setShow2FAModal(false);
  };

  // Render the selected screen
  const renderScreen = () => {
    switch (currentScreenId) {
      case 'MH-01':
        return <MH01_DanhMuc />;
      case 'MH-02':
        return <MH02_BangGia />;
      case 'MH-03':
        return <MH03_KeHoachChieuSinh />;
      case 'MH-04':
        return <MH04_QuayGhiDanh />;
      case 'MH-05':
        return <MH05_DangKyOnline />;
      case 'MH-06':
        return <MH06_LoThe />;
      case 'MH-07':
        return <MH07_ChuyenLopBaoLuu />;
      case 'MH-08':
        return <MH08_DiemDanh />;
      case 'MH-09':
        return <MH09_KetCa />;
      case 'MH-10':
        return <MH10_NhapSaoKe />;
      case 'MH-11':
        return <MH11_DoiSoat />;
      case 'MH-12':
        return <MH12_ChotCa />;
      case 'MH-13':
        return <MH13_HoSoGiaoVien />;
      case 'MH-14':
        return <MH14_BangKeThuLao />;
      case 'MH-15':
        return <MH15_DeXuatChi />;
      case 'MH-16':
        return <MH16_KiemSoatChi />;
      case 'MH-17':
        return <MH17_HopDuyet />;
      case 'MH-18':
        return <MH18_HopDongDuToanCongNo />;
      case 'MH-19':
        return <MH19_ChungTuKeToan />;
      case 'MH-20':
        return <MH20_AnhXaTaiKhoanThamSo />;
      case 'MH-21':
        return <MH21_Dashboard />;
      case 'MH-22':
        return <MH22_BaoCao />;
      case 'MH-23':
        return <MH23_NguoiDungNhatKy />;
      case 'CBCC-01':
      case 'CBCC-02':
        return <CBCC_Screens />;
      case 'KPI-01':
        return <KPI_Screens initialSubScreen="7.1" />;
      case 'KPI-02':
        return <KPI_Screens initialSubScreen="7.2" />;
      case 'KPI-03':
        return <KPI_Screens initialSubScreen="7.3" />;
      case 'KPI-04':
        return <KPI_Screens initialSubScreen="7.4" />;
      case 'KPI-05':
        return <KPI_Screens initialSubScreen="7.5" />;
      case 'KPI-06':
        return <KPI_Screens initialSubScreen="7.6" />;
      case 'KPI-07':
        return <KPI_Screens initialSubScreen="7.7" />;
      default:
        return <MH21_Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar
        currentRole={currentRole}
        onRoleChange={handleRoleChange}
        selectedFacility={selectedFacility}
        onFacilityChange={setSelectedFacility}
        isMobileMode={isMobileMode}
        onToggleMobileMode={() => setIsMobileMode(!isMobileMode)}
        onRequest2FA={() => setShow2FAModal(true)}
        isTwoFactorVerified={isTwoFactorVerified}
      />

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          currentScreenId={currentScreenId}
          onSelectScreen={setCurrentScreenId}
          currentRole={currentRole}
        />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {isMobileMode ? (
            /* Khung giả lập điện thoại thông minh để demo cho khách */
            <div className="flex flex-col items-center justify-center py-4">
              <div className="text-center mb-3">
                <span className="text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
                  📱 Đang hiển thị dưới dạng Khung Điện thoại Thông minh (Khổ 390px)
                </span>
                <p className="text-[11px] text-slate-500 mt-1">
                  Được khuyến nghị cho MH-04 Quầy ghi danh, MH-05 Đăng ký online, MH-08 Điểm danh, MH-09 Kết ca, MH-14 Bảng kê
                </p>
              </div>

              {/* Phone Frame */}
              <div className="w-[390px] h-[820px] bg-slate-900 rounded-[48px] p-3 shadow-2xl border-4 border-slate-700 relative overflow-hidden flex flex-col">
                {/* Notch / Dynamic Island */}
                <div className="w-28 h-5 bg-black rounded-full mx-auto mb-2 shrink-0 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-900"></div>
                </div>

                {/* Mobile Screen Viewport */}
                <div className="flex-1 bg-slate-50 rounded-[36px] overflow-y-auto p-4 text-slate-900">
                  {renderScreen()}
                </div>

                {/* Home Bar indicator */}
                <div className="w-32 h-1 bg-slate-600 rounded-full mx-auto mt-2 shrink-0"></div>
              </div>
            </div>
          ) : (
            /* Normal Desktop Layout */
            <div className="max-w-7xl mx-auto">{renderScreen()}</div>
          )}
        </main>
      </div>

      {/* 2FA Modal */}
      <TwoFactorModal
        isOpen={show2FAModal}
        roleName={pendingRole ? ROLE_LABELS[pendingRole].label : ROLE_LABELS[currentRole].label}
        onClose={() => {
          setShow2FAModal(false);
          setPendingRole(null);
        }}
        onSuccess={handle2FASuccess}
      />
    </div>
  );
};

export default App;
