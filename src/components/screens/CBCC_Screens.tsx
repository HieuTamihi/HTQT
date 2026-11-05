import React, { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  Eye,
  ChevronDown,
  ChevronRight,
  FileText,
  Clock,
  Paperclip,
  CheckCircle2,
  Building,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  DollarSign,
  FileCheck,
  ShieldCheck,
  ArrowLeft,
} from 'lucide-react';
import { FACILITIES } from '../../data/mockData';

interface StaffProfile {
  id: string;
  code: string;
  fullName: string;
  birthDate: string;
  gender: string;
  department: string;
  position: string;
  facility: string;
  contractType: string;
  phone: string;
  status: 'Đang làm việc' | 'Nghỉ hưu' | 'Thôi việc';
}

export const CBCC_Screens: React.FC = () => {
  const [selectedStaff, setSelectedStaff] = useState<StaffProfile | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [deptFilter, setDeptFilter] = useState('ALL');
  const [activeTab, setActiveTab] = useState<
    'info' | 'other' | 'history' | 'attachments' | 'signed'
  >('info');

  // Accordion state cho Tab 1: 8 mục theo đặc tả
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    soLuoc: true,
    congTac: false,
    daoTao: false,
    khenThuong: false,
    lichSu: false,
    luong: false,
    hopDong: false,
    danhGia: false,
  });

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const staffList: StaffProfile[] = [
    {
      id: 'CBCC-01',
      code: 'CB-2024-001',
      fullName: 'Vũ Quốc Thái',
      birthDate: '15/08/1978',
      gender: 'Nam',
      department: 'Ban Giám đốc',
      position: 'Giám đốc Cung Văn hóa Lao động',
      facility: 'Trụ sở chính',
      contractType: 'Công chức',
      phone: '0903889900',
      status: 'Đang làm việc',
    },
    {
      id: 'CBCC-02',
      code: 'CB-2024-012',
      fullName: 'Nguyễn Thị Bích Thủy',
      birthDate: '22/04/1985',
      gender: 'Nữ',
      department: 'Tổ Tài vụ',
      position: 'Kế toán trưởng / Kế toán tổng hợp',
      facility: 'Trụ sở chính',
      contractType: 'Viên chức',
      phone: '0918223344',
      status: 'Đang làm việc',
    },
    {
      id: 'CBCC-03',
      code: 'CB-2024-018',
      fullName: 'Trần Văn Hòa',
      birthDate: '10/11/1982',
      gender: 'Nam',
      department: 'Phòng Văn hóa',
      position: 'Trưởng phòng Văn hóa Thể thao',
      facility: 'Trụ sở chính',
      contractType: 'Viên chức',
      phone: '0934112233',
      status: 'Đang làm việc',
    },
    {
      id: 'CBCC-04',
      code: 'CB-2024-025',
      fullName: 'Lê Hoàng Yến',
      birthDate: '05/09/1990',
      gender: 'Nữ',
      department: 'Phòng TC-HC-QT',
      position: 'Chuyên viên Nhân sự & Đào tạo',
      facility: 'Trụ sở chính',
      contractType: 'Hợp đồng lao động',
      phone: '0988776655',
      status: 'Đang làm việc',
    },
  ];

  const filteredStaff = staffList.filter((s) => {
    const matchSearch =
      s.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchDept = deptFilter === 'ALL' || s.department === deptFilter;
    return matchSearch && matchDept;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">
              HỒ SƠ CBCC
            </span>
            <h1 className="text-xl font-bold text-slate-900">
              Quản lý Hồ sơ Cán bộ, Công chức, Viên chức & Người lao động
            </h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Tra cứu lý lịch, quá trình đào tạo, ngạch bậc lương, hợp đồng lao động và hồ sơ đã ký số
          </p>
        </div>

        {selectedStaff && (
          <button
            onClick={() => setSelectedStaff(null)}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại danh sách</span>
          </button>
        )}
      </div>

      {!selectedStaff ? (
        /* ================= 1. DANH SÁCH HỒ SƠ CBCC ================= */
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm theo họ tên, mã CBCC..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:border-blue-500 outline-none"
              />
            </div>

            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <Filter className="w-4 h-4 text-slate-500" />
              <select
                aria-label="Lọc theo phòng ban"
                value={deptFilter}
                onChange={(e) => setDeptFilter(e.target.value)}
                className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none cursor-pointer"
              >
                <option value="ALL">Tất cả phòng ban</option>
                <option value="Ban Giám đốc">Ban Giám đốc</option>
                <option value="Phòng TC-HC-QT">Phòng TC-HC-QT</option>
                <option value="Phòng Văn hóa">Phòng Văn hóa</option>
                <option value="Tổ Tài vụ">Tổ Tài vụ</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b">
                <tr>
                  <th className="px-4 py-3">Mã CBCC</th>
                  <th className="px-4 py-3">Họ và tên</th>
                  <th className="px-4 py-3">Ngày sinh & Giới tính</th>
                  <th className="px-4 py-3">Phòng ban & Chức vụ</th>
                  <th className="px-4 py-3">Cơ sở làm việc</th>
                  <th className="px-4 py-3">Hình thức tuyển dụng</th>
                  <th className="px-4 py-3">Trạng thái</th>
                  <th className="px-4 py-3 text-right">Chi tiết</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {filteredStaff.map((staff) => (
                  <tr key={staff.id} className="hover:bg-slate-50 transition">
                    <td className="px-4 py-3 font-mono font-bold text-blue-600">{staff.code}</td>
                    <td className="px-4 py-3">
                      <div className="font-bold text-slate-900 text-sm">{staff.fullName}</div>
                      <div className="text-slate-500">{staff.phone}</div>
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {staff.birthDate} ({staff.gender})
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-slate-800">{staff.position}</div>
                      <div className="text-slate-500">{staff.department}</div>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{staff.facility}</td>
                    <td className="px-4 py-3">
                      <span className="font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        {staff.contractType}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300 font-medium">
                        <CheckCircle2 className="w-3 h-3 mr-1" /> {staff.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => setSelectedStaff(staff)}
                        className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg font-semibold transition cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Mở hồ sơ</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* ================= 2. CHI TIẾT HỒ SƠ (5 TABS THEO ĐẶC TẢ) ================= */
        <div className="space-y-6">
          {/* Card thông tin đầu hồ sơ */}
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl border border-blue-200">
                {selectedStaff.fullName.charAt(0)}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-lg font-bold text-slate-900">{selectedStaff.fullName}</h2>
                  <span className="font-mono text-xs font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
                    {selectedStaff.code}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {selectedStaff.position} • {selectedStaff.department} ({selectedStaff.facility})
                </p>
              </div>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => alert('Đang trích xuất toàn bộ tệp lý lịch sang PDF có ký số...')}
                className="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800"
              >
                Xuất file lý lịch PDF
              </button>
            </div>
          </div>

          {/* 5 Tab ngang theo thứ tự đặc tả */}
          <div className="flex border-b border-slate-200 bg-white rounded-t-xl px-2">
            <button
              onClick={() => setActiveTab('info')}
              className={`py-3 px-4 font-semibold text-xs border-b-2 transition cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'info'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>1. Thông tin hồ sơ (8 Mục)</span>
            </button>

            <button
              onClick={() => setActiveTab('other')}
              className={`py-3 px-4 font-semibold text-xs border-b-2 transition cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'other'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <span>2. Thông tin khác</span>
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`py-3 px-4 font-semibold text-xs border-b-2 transition cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'history'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>3. Lịch sử chỉnh sửa</span>
            </button>

            <button
              onClick={() => setActiveTab('attachments')}
              className={`py-3 px-4 font-semibold text-xs border-b-2 transition cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'attachments'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Paperclip className="w-4 h-4" />
              <span>4. Tài liệu đính kèm (4)</span>
            </button>

            <button
              onClick={() => setActiveTab('signed')}
              className={`py-3 px-4 font-semibold text-xs border-b-2 transition cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'signed'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>5. Đã ký số (3 chứng thư)</span>
            </button>
          </div>

          {/* TAB 1: THÔNG TIN HỒ SƠ - 8 MỤC ACCORDION THU GỌN THEO ĐẶC TẢ */}
          {activeTab === 'info' && (
            <div className="space-y-3">
              {/* Mục 1: Sơ lược lý lịch */}
              <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
                <button
                  onClick={() => toggleSection('soLuoc')}
                  className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-slate-800 hover:bg-slate-50 transition cursor-pointer border-b border-slate-100"
                >
                  <span className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>Mục 1: Sơ lược lý lịch</span>
                  </span>
                  {expandedSections.soLuoc ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {expandedSections.soLuoc && (
                  <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div><span className="text-slate-500">Họ và tên khai sinh:</span> <strong className="text-slate-800 block mt-0.5">{selectedStaff.fullName}</strong></div>
                    <div><span className="text-slate-500">Ngày sinh:</span> <strong className="text-slate-800 block mt-0.5">{selectedStaff.birthDate}</strong></div>
                    <div><span className="text-slate-500">Giới tính:</span> <strong className="text-slate-800 block mt-0.5">{selectedStaff.gender}</strong></div>
                    <div><span className="text-slate-500">Dân tộc / Tôn giáo:</span> <strong className="text-slate-800 block mt-0.5">Kinh / Không</strong></div>
                    <div><span className="text-slate-500">Quê quán:</span> <strong className="text-slate-800 block mt-0.5">P. Bến Thành, Quận 1, TP.HCM</strong></div>
                    <div><span className="text-slate-500">Số CCCD / Ngày cấp:</span> <strong className="text-slate-800 block mt-0.5">079078001234 (15/05/2021)</strong></div>
                  </div>
                )}
              </div>

              {/* Mục 2: Quá trình công tác */}
              <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
                <button
                  onClick={() => toggleSection('congTac')}
                  className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-slate-800 hover:bg-slate-50 transition cursor-pointer border-b border-slate-100"
                >
                  <span className="flex items-center space-x-2">
                    <Briefcase className="w-4 h-4 text-indigo-600" />
                    <span>Mục 2: Quá trình công tác</span>
                  </span>
                  {expandedSections.congTac ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {expandedSections.congTac && (
                  <div className="p-4 space-y-2 text-xs">
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <div className="font-bold text-slate-800">01/2020 - Nay: Cung Văn hóa Lao động TP.HCM</div>
                      <div className="text-slate-600">Chức vụ: {selectedStaff.position} - Điều hành toàn bộ hoạt động</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <div className="font-bold text-slate-800">2012 - 2019: Liên đoàn Lao động TP.HCM</div>
                      <div className="text-slate-600">Chức vụ: Phó Ban Tuyên giáo & Văn hóa Thể thao</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mục 3: Quá trình đào tạo bồi dưỡng */}
              <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
                <button
                  onClick={() => toggleSection('daoTao')}
                  className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-slate-800 hover:bg-slate-50 transition cursor-pointer border-b border-slate-100"
                >
                  <span className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-emerald-600" />
                    <span>Mục 3: Quá trình đào tạo bồi dưỡng</span>
                  </span>
                  {expandedSections.daoTao ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {expandedSections.daoTao && (
                  <div className="p-4 space-y-2 text-xs">
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <div className="font-bold text-slate-800">Thạc sĩ Quản lý Văn hóa - ĐH Văn hóa TP.HCM (2015)</div>
                      <div className="text-slate-500">Chính quy, xếp loại Giỏi</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <div className="font-bold text-slate-800">Cao cấp Lý luận Chính trị - Học viện Chính trị Khu vực II (2018)</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mục 4: Khen thưởng, kỷ luật */}
              <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
                <button
                  onClick={() => toggleSection('khenThuong')}
                  className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-slate-800 hover:bg-slate-50 transition cursor-pointer border-b border-slate-100"
                >
                  <span className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-amber-600" />
                    <span>Mục 4: Khen thưởng, kỷ luật</span>
                  </span>
                  {expandedSections.khenThuong ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {expandedSections.khenThuong && (
                  <div className="p-4 text-xs space-y-2">
                    <div className="text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                      ✓ Bằng khen Thủ tướng Chính phủ (Năm 2023) - Có thành tích xuất sắc trong phong trào CNVC-LĐ
                    </div>
                    <div className="text-slate-600 p-2.5 bg-slate-50 rounded-lg">
                      Kỷ luật: Không có
                    </div>
                  </div>
                )}
              </div>

              {/* Mục 5: Đặc điểm lịch sử bản thân */}
              <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
                <button
                  onClick={() => toggleSection('lichSu')}
                  className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-slate-800 hover:bg-slate-50 transition cursor-pointer border-b border-slate-100"
                >
                  <span>Mục 5: Đặc điểm lịch sử bản thân</span>
                  {expandedSections.lichSu ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {expandedSections.lichSu && (
                  <div className="p-4 text-xs text-slate-600">
                    Bản thân không tham gia các tổ chức chính trị nước ngoài; gia đình gương mẫu chấp hành đường lối chính sách của Đảng và Pháp luật Nhà nước.
                  </div>
                )}
              </div>

              {/* Mục 6: Quá trình lương */}
              <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
                <button
                  onClick={() => toggleSection('luong')}
                  className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-slate-800 hover:bg-slate-50 transition cursor-pointer border-b border-slate-100"
                >
                  <span className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-blue-600" />
                    <span>Mục 6: Quá trình lương</span>
                  </span>
                  {expandedSections.luong ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {expandedSections.luong && (
                  <div className="p-4 text-xs grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <span className="text-slate-500">Mã ngạch:</span>
                      <strong className="block text-slate-800 mt-0.5">01.002 (Chuyên viên chính)</strong>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <span className="text-slate-500">Bậc lương hiện hưởng:</span>
                      <strong className="block text-slate-800 mt-0.5">Bậc 6 - Hệ số 5.76</strong>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <span className="text-slate-500">Phụ cấp chức vụ lãnh đạo:</span>
                      <strong className="block text-slate-800 mt-0.5">Hệ số 0.8</strong>
                    </div>
                  </div>
                )}
              </div>

              {/* Mục 7: Hợp đồng lao động */}
              <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
                <button
                  onClick={() => toggleSection('hopDong')}
                  className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-slate-800 hover:bg-slate-50 transition cursor-pointer border-b border-slate-100"
                >
                  <span className="flex items-center space-x-2">
                    <FileCheck className="w-4 h-4 text-teal-600" />
                    <span>Mục 7: Hợp đồng lao động</span>
                  </span>
                  {expandedSections.hopDong ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {expandedSections.hopDong && (
                  <div className="p-4 text-xs space-y-1">
                    <div>Quyết định tuyển dụng công chức số: <strong className="font-mono">QĐ-142/QĐ-LĐLĐ</strong> ngày 10/01/2020</div>
                    <div>Hợp đồng làm việc không xác định thời hạn theo Luật Viên chức / Công chức.</div>
                  </div>
                )}
              </div>

              {/* Mục 8: Đánh giá xếp loại */}
              <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
                <button
                  onClick={() => toggleSection('danhGia')}
                  className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-slate-800 hover:bg-slate-50 transition cursor-pointer border-b border-slate-100"
                >
                  <span className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Mục 8: Đánh giá xếp loại hằng năm & quý</span>
                  </span>
                  {expandedSections.danhGia ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {expandedSections.danhGia && (
                  <div className="p-4 text-xs space-y-2">
                    <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-lg">
                      <span className="font-bold text-slate-800">Năm 2025:</span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-300">
                        Hoàn thành xuất sắc nhiệm vụ (HTXSNV)
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2.5 bg-slate-50 rounded-lg">
                      <span className="font-bold text-slate-800">Quý 3/2026:</span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-300">
                        94.5 Điểm - HTXSNV
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: THÔNG TIN KHÁC */}
          {activeTab === 'other' && (
            <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 space-y-3 text-xs">
              <h3 className="font-bold text-slate-800 text-sm">Thông tin mở rộng về quan hệ gia đình & tài sản</h3>
              <p className="text-slate-600">Đã hoàn thành kê khai tài sản, thu nhập hằng năm theo Nghị định 130/2020/NĐ-CP.</p>
              <div className="p-3 bg-slate-50 rounded-lg text-slate-500">
                Lưu trữ hồ sơ đoàn thể, công đoàn, đảng viên sinh hoạt tại Chi bộ Cung Văn hóa Lao động.
              </div>
            </div>
          )}

          {/* TAB 3: LỊCH SỬ CHỈNH SỬA */}
          {activeTab === 'history' && (
            <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 space-y-3 text-xs">
              <h3 className="font-bold text-slate-800 text-sm">Nhật ký thay đổi thông tin lý lịch cán bộ</h3>
              <div className="space-y-2">
                <div className="p-3 bg-slate-50 rounded-lg flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-800">Cập nhật Quyết định nâng bậc lương thường xuyên</span>
                    <div className="text-[10px] text-slate-500">Người thực hiện: Lê Hoàng Yến (Phòng TC-HC-QT)</div>
                  </div>
                  <span className="font-mono text-slate-500">15/09/2026 10:30</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: TÀI LIỆU ĐÍNH KÈM */}
          {activeTab === 'attachments' && (
            <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 space-y-3 text-xs">
              <h3 className="font-bold text-slate-800 text-sm">Tài liệu số hóa đính kèm hồ sơ</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 flex justify-between items-center cursor-pointer">
                  <span className="font-semibold text-slate-800">1. So_yeu_ly_lich_2C.pdf</span>
                  <Eye className="w-4 h-4 text-blue-600" />
                </div>
                <div className="p-3 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 flex justify-between items-center cursor-pointer">
                  <span className="font-semibold text-slate-800">2. Bang_tot_nghiep_ThacSi.pdf</span>
                  <Eye className="w-4 h-4 text-blue-600" />
                </div>
                <div className="p-3 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 flex justify-between items-center cursor-pointer">
                  <span className="font-semibold text-slate-800">3. Quyet_dinh_bo_nhiem.pdf</span>
                  <Eye className="w-4 h-4 text-blue-600" />
                </div>
                <div className="p-3 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 flex justify-between items-center cursor-pointer">
                  <span className="font-semibold text-slate-800">4. Giay_kham_suc_khoe_2026.pdf</span>
                  <Eye className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: ĐÃ KÝ SỐ */}
          {activeTab === 'signed' && (
            <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 space-y-3 text-xs">
              <h3 className="font-bold text-slate-800 text-sm flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Chứng thư & Hồ sơ điện tử đã ký số (Chữ ký số Chuyên dùng Ban Cơ yếu)</span>
              </h3>
              <div className="space-y-2 pt-1">
                <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-lg flex justify-between items-center">
                  <div>
                    <div className="font-bold text-emerald-900">Bản khai sơ yếu lý lịch cán bộ năm 2026</div>
                    <div className="text-[10px] text-emerald-700">Ký bởi: Vũ Quốc Thái • Chứng thư số: VG-CA-9921829</div>
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                    Hợp lệ
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

