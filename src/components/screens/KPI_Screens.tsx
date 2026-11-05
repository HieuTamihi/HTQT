import React, { useState } from 'react';
import {
  Target,
  ClipboardList,
  Send,
  Award,
  SlidersHorizontal,
  Clock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  FileText,
  Search,
  Filter,
  Users,
  Check,
  RotateCcw,
  Paperclip,
  Download,
  BarChart3,
  Calendar,
  Plus,
} from 'lucide-react';
import { StatusBadge } from '../common/StatusBadge';
import { CancelModal } from '../common/CancelModal';

interface KPIScreensProps {
  initialSubScreen?: '7.1' | '7.2' | '7.3' | '7.4' | '7.5' | '7.6' | '7.7';
}

export const KPI_Screens: React.FC<KPIScreensProps> = ({ initialSubScreen = '7.1' }) => {
  const [activeSub, setActiveSub] = useState<'7.1' | '7.2' | '7.3' | '7.4' | '7.5' | '7.6' | '7.7'>(
    initialSubScreen
  );

  // States for 7.1
  const [cancelModal, setCancelModal] = useState<{ isOpen: boolean; title: string }>({
    isOpen: false,
    title: '',
  });

  // 5 mức đánh giá khối văn phòng theo đặc tả mục 7.3
  const OFFICE_EVAL_LEVELS = [
    { value: 100, label: '100% - Bảo đảm đúng chủ trương, yêu cầu, có tính khả thi, được chấp nhận ngay hoặc chỉ phải hoàn thiện về kỹ thuật, thể thức' },
    { value: 75, label: '75% - Cơ bản đáp ứng yêu cầu, phải hoàn thiện chỉnh sửa nhưng không ảnh hưởng nội dung cốt lõi' },
    { value: 50, label: '50% - Chưa đáp ứng đầy đủ yêu cầu, ảnh hưởng đến chất lượng hoặc hiệu quả thực hiện' },
    { value: 25, label: '25% - Có sai sót nghiêm trọng về nội dung, phải hoàn thiện cơ bản hoặc làm lại' },
    { value: 0, label: '0% - Không bảo đảm yêu cầu, sai chủ trương, quan điểm chỉ đạo hoặc sai nội dung căn bản' },
  ];

  // 4 mức đánh giá khối tổ phục vụ (Vệ sinh, Kỹ thuật, Bảo vệ)
  const SERVICE_EVAL_LEVELS = [
    'Hoàn thành xuất sắc nhiệm vụ',
    'Hoàn thành tốt nhiệm vụ',
    'Hoàn thành nhiệm vụ',
    'Không hoàn thành nhiệm vụ',
  ];

  // Tab 7.3 state
  const [tab73, setTab73] = useState<'ALL' | 'IN_PROGRESS' | 'OVERDUE' | 'COMPLETED'>('ALL');
  const [evalSelected, setEvalSelected] = useState<number>(100);

  // Tab 7.4 state: Điểm tiêu chí chung (max 30)
  const [scorePart1_1, setScorePart1_1] = useState(10); // Phẩm chất chính trị (max 10)
  const [scorePart1_2, setScorePart1_2] = useState(10); // Năng lực chuyên môn (max 10)
  const [scorePart1_3, setScorePart1_3] = useState(9);  // Năng lực đổi mới (max 10)
  const scorePart1 = scorePart1_1 + scorePart1_2 + scorePart1_3;
  const scorePart2 = 65; // Kết quả nhiệm vụ tự động tính (max 70)
  const totalScore = scorePart1 + scorePart2;

  const getRank = (score: number) => {
    if (score >= 90) return { title: 'Hoàn thành xuất sắc nhiệm vụ (HTXSNV)', color: 'text-emerald-700 bg-emerald-50 border-emerald-300' };
    if (score >= 70) return { title: 'Hoàn thành tốt nhiệm vụ (HTTNV)', color: 'text-blue-700 bg-blue-50 border-blue-300' };
    if (score >= 50) return { title: 'Hoàn thành nhiệm vụ (HTNV)', color: 'text-amber-700 bg-amber-50 border-amber-300' };
    return { title: 'Không hoàn thành nhiệm vụ (KHTNV)', color: 'text-rose-700 bg-rose-50 border-rose-300' };
  };

  const rankResult = getRank(totalScore);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded">KPI</span>
            <h1 className="text-xl font-bold text-slate-900">
              Quản trị Nhiệm vụ & Đánh giá KPI Cán bộ Viên chức (Theo Quý)
            </h1>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Quy trình KPI toàn diện: Danh mục công việc, Giao việc, Nộp sản phẩm, Đánh giá 5 mức, Bảng tổng hợp và Biểu quyết xếp loại
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs font-semibold bg-blue-50 text-blue-800 px-3 py-1.5 rounded-lg border border-blue-200">
          <Calendar className="w-4 h-4 mr-1 text-blue-600" />
          <span>Kỳ đánh giá: Quý 4/2026</span>
        </div>
      </div>

      {/* KPI Sub-navigation pills */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setActiveSub('7.1')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
            activeSub === '7.1' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          7.1 Danh mục CV đơn vị
        </button>
        <button
          onClick={() => setActiveSub('7.2')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
            activeSub === '7.2' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          7.2 Quản lý nhiệm vụ
        </button>
        <button
          onClick={() => setActiveSub('7.3')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
            activeSub === '7.3' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          7.3 Nộp sản phẩm (Đánh giá 5 mức)
        </button>
        <button
          onClick={() => setActiveSub('7.4')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
            activeSub === '7.4' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          7.4 Bảng tổng hợp cuối quý (30-70)
        </button>
        <button
          onClick={() => setActiveSub('7.5')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
            activeSub === '7.5' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          7.5 Bình xét Cơ sở/Phòng
        </button>
        <button
          onClick={() => setActiveSub('7.6')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
            activeSub === '7.6' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          7.6 Tham mưu (TP TC-HC-QT)
        </button>
        <button
          onClick={() => setActiveSub('7.7')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
            activeSub === '7.7' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          7.7 Biểu quyết Ban Giám đốc
        </button>
      </div>

      {/* ================= 7.1 DANH MỤC CÔNG VIỆC CỦA ĐƠN VỊ ================= */}
      {activeSub === '7.1' && (
        <div className="space-y-6">
          {/* Biểu đồ & Tỷ lệ */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <span className="text-xs text-slate-500 font-medium">Tổng số nhiệm vụ Quý 4</span>
              <div className="text-2xl font-bold text-slate-900 mt-1">48 Nhiệm vụ</div>
              <span className="text-[11px] text-slate-500">Toàn bộ 6 phòng ban, tổ</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <span className="text-xs text-slate-500 font-medium">Đã phân công / giao việc</span>
              <div className="text-2xl font-bold text-blue-600 mt-1">42 (87.5%)</div>
              <span className="text-[11px] text-blue-600">Đang triển khai</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <span className="text-xs text-slate-500 font-medium">Chưa giao người phụ trách</span>
              <div className="text-2xl font-bold text-amber-600 mt-1">6 (12.5%)</div>
              <span className="text-[11px] text-amber-600">Cần phân công ngay</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <span className="text-xs text-slate-500 font-medium">Đã hoàn thành nộp SP</span>
              <div className="text-2xl font-bold text-emerald-600 mt-1">29 (60.4%)</div>
              <span className="text-[11px] text-emerald-600">Có minh chứng</span>
            </div>
          </div>

          {/* Danh sách nhiệm vụ */}
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
              <h3 className="font-bold text-slate-800 text-sm">Danh mục toàn bộ nhiệm vụ của đơn vị</h3>
              <button
                onClick={() => alert('Mở form tạo nhiệm vụ mới')}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Thêm nhiệm vụ</span>
              </button>
            </div>

            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b">
                <tr>
                  <th className="px-4 py-3">Phân loại</th>
                  <th className="px-4 py-3">Tên nhiệm vụ công việc</th>
                  <th className="px-4 py-3">Đơn vị / Cá nhân phụ trách</th>
                  <th className="px-4 py-3">Thời hạn hoàn thành</th>
                  <th className="px-4 py-3">Trạng thái</th>
                  <th className="px-4 py-3 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                <tr className="hover:bg-slate-50 transition">
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 rounded font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      Nhiệm vụ thường xuyên
                    </span>
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    Tổ chức chiêu sinh và khai giảng các lớp năng khiếu nghệ thuật, thể dục thể thao tháng 11
                  </td>
                  <td className="px-4 py-3 text-slate-700">Phòng Văn hóa (Trần Văn Hòa)</td>
                  <td className="px-4 py-3 text-slate-600">30/11/2026</td>
                  <td className="px-4 py-3">
                    <StatusBadge status="Đang thực hiện" />
                  </td>
                  <td className="px-4 py-3 text-right space-x-1.5 whitespace-nowrap">
                    <button
                      onClick={() => alert('Mở form gia hạn')}
                      className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded"
                    >
                      Gia hạn
                    </button>
                    <button
                      onClick={() => setCancelModal({ isOpen: true, title: 'Tổ chức chiêu sinh tháng 11' })}
                      className="px-2 py-1 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded"
                    >
                      Hủy
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 transition bg-rose-50/20">
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 rounded font-bold bg-rose-50 text-rose-700 border border-rose-300">
                      Nhiệm vụ đột xuất (03 ngày)
                    </span>
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    Báo cáo khẩn số liệu cơ sở vật chất phục vụ đoàn kiểm tra Thành ủy
                  </td>
                  <td className="px-4 py-3 text-slate-700">Phòng TC-HC-QT (Lê Hoàng Yến)</td>
                  <td className="px-4 py-3 font-bold text-rose-600">07/11/2026 (Còn 3 ngày)</td>
                  <td className="px-4 py-3">
                    <StatusBadge status="Đang thực hiện" />
                  </td>
                  <td className="px-4 py-3 text-right space-x-1.5 whitespace-nowrap">
                    <button
                      onClick={() => alert('Đã bàn giao trực tiếp!')}
                      className="px-2 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded"
                    >
                      Giao trực tiếp
                    </button>
                    <button
                      onClick={() => setCancelModal({ isOpen: true, title: 'Báo cáo khẩn cơ sở vật chất' })}
                      className="px-2 py-1 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded"
                    >
                      Hủy
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ================= 7.2 QUẢN LÝ NHIỆM VỤ ================= */}
      {activeSub === '7.2' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nhiệm vụ tự đăng ký */}
            <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-5 space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <h3 className="font-bold text-slate-900 text-sm">Nhiệm vụ cá nhân tự đăng ký (Quý 4)</h3>
                <span className="text-xs text-slate-400">Cuối quý đăng ký kỳ sau</span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div className="p-2 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200">
                  <div className="font-bold text-base">3</div>
                  <span>Đã duyệt</span>
                </div>
                <div className="p-2 bg-amber-50 text-amber-800 rounded-lg border border-amber-200">
                  <div className="font-bold text-base">1</div>
                  <span>Chờ duyệt</span>
                </div>
                <div className="p-2 bg-rose-50 text-rose-800 rounded-lg border border-rose-200">
                  <div className="font-bold text-base">0</div>
                  <span>Trả lại</span>
                </div>
                <div className="p-2 bg-slate-50 text-slate-700 rounded-lg border border-slate-200">
                  <div className="font-bold text-base">1</div>
                  <span>Nháp</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg text-xs space-y-1">
                <div className="font-semibold text-slate-800">• Hoàn thiện báo cáo doanh thu khóa học Quý 4</div>
                <span className="text-emerald-700 font-medium">Trạng thái: Đã duyệt</span>
              </div>
            </div>

            {/* Nhiệm vụ cấp trên giao */}
            <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-5 space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <h3 className="font-bold text-slate-900 text-sm">Nhiệm vụ cấp trên giao</h3>
                <span className="text-xs text-slate-400">Yêu cầu xác nhận</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200">
                  <div className="font-bold text-base">5</div>
                  <span>Đã xác nhận</span>
                </div>
                <div className="p-2 bg-amber-50 text-amber-800 rounded-lg border border-amber-200">
                  <div className="font-bold text-base">1</div>
                  <span>Chờ xác nhận</span>
                </div>
                <div className="p-2 bg-rose-50 text-rose-800 rounded-lg border border-rose-200">
                  <div className="font-bold text-base">0</div>
                  <span>Đã phản hồi</span>
                </div>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs space-y-2">
                <div className="font-semibold text-amber-950">
                  • Kiểm tra rà soát PCCC tại Cơ sở 4 (Hạn: 10/11/2026)
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => alert('Đã từ chối tiếp nhận kèm lý do!')}
                    className="px-2.5 py-1 bg-white text-rose-600 border border-rose-200 rounded font-semibold text-[11px]"
                  >
                    Phản hồi không tiếp nhận
                  </button>
                  <button
                    onClick={() => alert('Đã xác nhận tiếp nhận nhiệm vụ!')}
                    className="px-2.5 py-1 bg-emerald-600 text-white rounded font-semibold text-[11px]"
                  >
                    Xác nhận tiếp nhận
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= 7.3 NỘP SẢN PHẨM CÔNG VIỆC & ĐÁNH GIÁ 5 MỨC ================= */}
      {activeSub === '7.3' && (
        <div className="space-y-6">
          {/* 4 Tabs số lượng */}
          <div className="flex space-x-2 border-b border-slate-200">
            <button
              onClick={() => setTab73('ALL')}
              className={`py-2 px-3 text-xs font-semibold rounded-t-lg transition ${
                tab73 === 'ALL' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Tất cả (8)
            </button>
            <button
              onClick={() => setTab73('IN_PROGRESS')}
              className={`py-2 px-3 text-xs font-semibold rounded-t-lg transition ${
                tab73 === 'IN_PROGRESS' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Đang thực hiện (3)
            </button>
            <button
              onClick={() => setTab73('OVERDUE')}
              className={`py-2 px-3 text-xs font-semibold rounded-t-lg transition ${
                tab73 === 'OVERDUE' ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
              }`}
            >
              Quá hạn (1)
            </button>
            <button
              onClick={() => setTab73('COMPLETED')}
              className={`py-2 px-3 text-xs font-semibold rounded-t-lg transition ${
                tab73 === 'COMPLETED' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              Hoàn thành (Đã nộp minh chứng) (4)
            </button>
          </div>

          {/* Khung đánh giá sản phẩm */}
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 space-y-5">
            <div className="border-b pb-4">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-slate-900 text-base">
                  Sản phẩm: Dự thảo Kế hoạch Tổ chức Giải Khiêu vũ Công nhân Viên chức Lao động mở rộng năm 2026
                </span>
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                  Đã nộp minh chứng
                </span>
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Người nộp: <strong>Trần Văn Hòa (Phòng Văn hóa)</strong> • Tệp đính kèm: <code>Ke_hoach_Giai_Khieu_Vu_2026.docx</code>
              </div>
            </div>

            {/* Lãnh đạo đánh giá 5 mức % chuẩn đặc tả */}
            <div className="space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800">
                Lãnh đạo đánh giá chất lượng sản phẩm (Khối Văn phòng - 5 mức chuẩn):
              </h4>

              <div className="space-y-2">
                {OFFICE_EVAL_LEVELS.map((lvl) => (
                  <label
                    key={lvl.value}
                    className={`flex items-start space-x-3 p-3 rounded-xl border transition cursor-pointer text-xs ${
                      evalSelected === lvl.value
                        ? 'border-blue-600 bg-blue-50/70 ring-1 ring-blue-500'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="evalLevel"
                      checked={evalSelected === lvl.value}
                      onChange={() => setEvalSelected(lvl.value)}
                      className="mt-0.5 text-blue-600"
                    />
                    <div className="space-y-0.5">
                      <span className="font-bold text-slate-900">{lvl.label}</span>
                    </div>
                  </label>
                ))}
              </div>

              <div className="p-3 bg-amber-50 rounded-lg text-xs text-amber-900 flex items-center justify-between">
                <span>
                  * Đối với Tổ Vệ sinh, Kỹ thuật và Bảo vệ: Tổ trưởng đánh giá theo 4 mức độ hài lòng nhiệm vụ thường xuyên.
                </span>
                <span className="font-semibold text-amber-800">Khối Phục vụ</span>
              </div>

              <div className="flex justify-end pt-3">
                <button
                  onClick={() => alert(`Lãnh đạo đã chấm ${evalSelected}% cho sản phẩm này! Điểm tự động cộng vào Phần 2 bảng tổng hợp.`)}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
                >
                  Xác nhận lưu đánh giá sản phẩm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= 7.4 BẢNG TỔNG HỢP ĐÁNH GIÁ CUỐI QUÝ ================= */}
      {activeSub === '7.4' && (
        <div className="space-y-6">
          {/* Thanh tiến độ quy trình */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-800">Quy trình đánh giá xếp loại Quý 4/2026:</span>
              <span className="font-bold text-blue-600">Bước 2/4: Cá nhân tự chấm & Tổng hợp điểm</span>
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden flex">
              <div className="bg-emerald-500 w-1/4 h-full" title="Bước 1: Nộp SP (Xong)"></div>
              <div className="bg-blue-600 w-1/4 h-full" title="Bước 2: Tự đánh giá (Đang làm)"></div>
              <div className="bg-slate-200 w-1/4 h-full" title="Bước 3: Lãnh đạo bình xét"></div>
              <div className="bg-slate-200 w-1/4 h-full" title="Bước 4: BGĐ biểu quyết"></div>
            </div>
          </div>

          {/* Phần 1: Tiêu chí chung (30 điểm) */}
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-bold text-slate-900 text-sm">
                Phần 1 – Tiêu chí chung (Tối đa 30 điểm)
              </h3>
              <span className="font-mono font-bold text-blue-700 text-base">{scorePart1} / 30 Điểm</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg flex justify-between items-center">
                <span className="max-w-xl font-medium text-slate-800">
                  1. Phẩm chất chính trị, phẩm chất đạo đức; ý thức kỷ luật, kỷ cương trong thực thi nhiệm vụ; chấp hành nội quy, quy chế của đơn vị (Tối đa 10đ)
                </span>
                <input
                  type="number"
                  max={10}
                  min={0}
                  value={scorePart1_1}
                  onChange={(e) => setScorePart1_1(Number(e.target.value))}
                  className="w-16 border rounded p-1.5 text-center font-bold text-slate-900 bg-white"
                />
              </div>

              <div className="p-3 bg-slate-50 rounded-lg flex justify-between items-center">
                <span className="max-w-xl font-medium text-slate-800">
                  2. Năng lực chuyên môn, nghiệp vụ theo yêu cầu vị trí việc làm; tinh thần trách nhiệm; thái độ phục vụ đoàn viên, người lao động; khả năng phối hợp công tác (Tối đa 10đ)
                </span>
                <input
                  type="number"
                  max={10}
                  min={0}
                  value={scorePart1_2}
                  onChange={(e) => setScorePart1_2(Number(e.target.value))}
                  className="w-16 border rounded p-1.5 text-center font-bold text-slate-900 bg-white"
                />
              </div>

              <div className="p-3 bg-slate-50 rounded-lg flex justify-between items-center">
                <span className="max-w-xl font-medium text-slate-800">
                  3. Năng lực đổi mới, sáng tạo; dám nghĩ, dám làm, dám chịu trách nhiệm vì lợi ích chung (Tối đa 10đ)
                </span>
                <input
                  type="number"
                  max={10}
                  min={0}
                  value={scorePart1_3}
                  onChange={(e) => setScorePart1_3(Number(e.target.value))}
                  className="w-16 border rounded p-1.5 text-center font-bold text-slate-900 bg-white"
                />
              </div>
            </div>
          </div>

          {/* Phần 2: Kết quả thực hiện nhiệm vụ (70 điểm) */}
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 space-y-3">
            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Phần 2 – Kết quả thực hiện nhiệm vụ (Tối đa 70 điểm)
                </h3>
                <p className="text-xs text-slate-500">
                  Tổng hợp tự động từ mục Nộp sản phẩm công việc sau khi lãnh đạo trực tiếp đánh giá
                </p>
              </div>
              <span className="font-mono font-bold text-emerald-700 text-base">{scorePart2} / 70 Điểm</span>
            </div>
            <div className="p-3 bg-emerald-50/50 rounded-lg text-xs text-emerald-800">
              ✓ Hoàn thành 4/4 nhiệm vụ giao đúng hạn (Đạt tỷ lệ đánh giá xuất sắc 100% và tốt 75%).
            </div>
          </div>

          {/* Phần 3: Đề xuất xếp loại & Tổng kết */}
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-bold text-slate-900 text-sm">
                Phần 3 – Đề xuất xếp loại quý
              </h3>
              <div className="text-right">
                <span className="text-xs text-slate-500">TỔNG ĐIỂM KPI:</span>
                <div className="text-2xl font-black text-blue-700 font-mono">{totalScore} / 100 Điểm</div>
              </div>
            </div>

            <div className="p-4 rounded-xl border flex items-center justify-between text-sm font-bold bg-slate-50">
              <span>Đề xuất mức xếp loại:</span>
              <span className={`px-4 py-1.5 rounded-full border text-sm ${rankResult.color}`}>
                {rankResult.title}
              </span>
            </div>

            <div className="text-[11px] text-slate-500 space-y-0.5">
              <div>• HTXSNV: ≥ 90 điểm</div>
              <div>• HTTNV: 70 – 90 điểm</div>
              <div>• HTNV: 50 – 69 điểm</div>
              <div>• KHTNV: 0 – 49 điểm</div>
            </div>

            <div className="pt-4 border-t flex justify-end space-x-3">
              <button
                onClick={() => alert('Đã lưu nháp hồ sơ đánh giá!')}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold cursor-pointer"
              >
                Lưu hồ sơ
              </button>
              <button
                onClick={() => alert('Đã gửi bảng đánh giá lên Lãnh đạo phòng/Cơ sở xem xét bình xét!')}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-sm cursor-pointer"
              >
                Gửi cấp trên phê duyệt
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= 7.5 ĐÁNH GIÁ, BÌNH XÉT (CƠ SỞ / PHÒNG) ================= */}
      {activeSub === '7.5' && (
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 space-y-4">
          <div className="border-b pb-3">
            <h3 className="font-bold text-slate-900 text-base">
              Lãnh đạo Phòng / Cán bộ phụ trách cơ sở đánh giá, biểu quyết
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Xem mức tự đánh giá, minh chứng sản phẩm và biểu quyết xếp loại cho từng nhân viên phụ trách
            </p>
          </div>

          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b">
              <tr>
                <th className="px-4 py-3">Nhân sự</th>
                <th className="px-4 py-3 text-center">Điểm tự chấm</th>
                <th className="px-4 py-3">Minh chứng sản phẩm</th>
                <th className="px-4 py-3">Mức đề xuất tự đánh giá</th>
                <th className="px-4 py-3 text-right">Biểu quyết lãnh đạo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              <tr className="hover:bg-slate-50 transition">
                <td className="px-4 py-3 font-bold text-slate-900">Lê Hoàng Yến</td>
                <td className="px-4 py-3 text-center font-mono font-bold text-blue-600">94 / 100</td>
                <td className="px-4 py-3 text-blue-600 underline cursor-pointer">4 Tệp sản phẩm minh chứng</td>
                <td className="px-4 py-3">
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-300">
                    HTXSNV
                  </span>
                </td>
                <td className="px-4 py-3 text-right space-x-1.5">
                  <button
                    onClick={() => alert('Đã biểu quyết: Đồng ý mức HTXSNV!')}
                    className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-bold"
                  >
                    Đồng ý xếp loại
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* ================= 7.6 TỔNG HỢP, THAM MƯU KẾT QUẢ (TRƯỞNG PHÒNG TC-HC-QT) ================= */}
      {activeSub === '7.6' && (
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 space-y-4">
          <div className="border-b pb-3">
            <h3 className="font-bold text-slate-900 text-base">
              Tổng hợp & Tham mưu kết quả đánh giá (Trưởng phòng TC-HC-QT)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Thẩm định bảng tự đánh giá của Trưởng các phòng ban, cán bộ cơ sở và lập tờ trình tham mưu cho Ban Giám đốc
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl space-y-2 text-xs">
            <div className="font-bold text-slate-800">Tờ trình tham mưu xếp loại cán bộ quản lý Quý 4/2026:</div>
            <p className="text-slate-600 leading-relaxed">
              Phòng TC-HC-QT đã tổng hợp 100% hồ sơ CBCC. Đề xuất Ban Giám đốc xem xét biểu quyết: 5 cá nhân HTXSNV (đạt tỷ lệ 20% theo quy định Thành ủy), 18 cá nhân HTTNV, 2 cá nhân HTNV.
            </p>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => alert('Đã chuyển toàn bộ tờ trình tham mưu lên Ban Giám đốc phê duyệt biểu quyết!')}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold"
            >
              Chuyển Ban Giám đốc xem xét
            </button>
          </div>
        </div>
      )}

      {/* ================= 7.7 ĐÁNH GIÁ, BÌNH XÉT (BAN GIÁM ĐỐC) ================= */}
      {activeSub === '7.7' && (
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 space-y-5">
          <div className="flex justify-between items-center border-b pb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Ban Giám đốc Phê duyệt & Biểu quyết Xếp loại Quý
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Xem mức đánh giá do Trưởng phòng TC-HC-QT tham mưu; phê duyệt biểu quyết và xuất file kết quả chính thức
              </p>
            </div>
            <button
              onClick={() => alert('Đang xuất file Excel/PDF tổng hợp kết quả biểu quyết và xếp loại chính thức có ký số BGĐ...')}
              className="inline-flex items-center space-x-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold shadow-xs cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Xuất file tổng hợp xếp loại (PDF / Excel)</span>
            </button>
          </div>

          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 text-xs uppercase font-semibold border-b">
              <tr>
                <th className="px-4 py-3">Họ và tên cán bộ quản lý</th>
                <th className="px-4 py-3">Chức vụ & Đơn vị</th>
                <th className="px-4 py-3 text-center">Tham mưu đề xuất</th>
                <th className="px-4 py-3 text-center">Tỷ lệ biểu quyết BGĐ</th>
                <th className="px-4 py-3 text-right">Quyết định BGĐ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              <tr className="hover:bg-slate-50 transition">
                <td className="px-4 py-3 font-bold text-slate-900">Trần Văn Hòa</td>
                <td className="px-4 py-3 text-slate-600">Trưởng phòng Văn hóa</td>
                <td className="px-4 py-3 text-center font-bold text-emerald-700">HTXSNV (95đ)</td>
                <td className="px-4 py-3 text-center font-mono font-bold text-blue-600">3/3 (100%)</td>
                <td className="px-4 py-3 text-right">
                  <span className="px-3 py-1 bg-emerald-600 text-white rounded font-bold text-xs">
                    ✓ Đã phê chuẩn
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition">
                <td className="px-4 py-3 font-bold text-slate-900">Nguyễn Thị Bích Thủy</td>
                <td className="px-4 py-3 text-slate-600">Tổ trưởng Tổ Tài vụ / Kế toán trưởng</td>
                <td className="px-4 py-3 text-center font-bold text-emerald-700">HTXSNV (96đ)</td>
                <td className="px-4 py-3 text-center font-mono font-bold text-blue-600">3/3 (100%)</td>
                <td className="px-4 py-3 text-right">
                  <span className="px-3 py-1 bg-emerald-600 text-white rounded font-bold text-xs">
                    ✓ Đã phê chuẩn
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Cancel Modal for 7.1 */}
      <CancelModal
        isOpen={cancelModal.isOpen}
        title="Hủy nhiệm vụ công việc"
        targetName={cancelModal.title}
        onClose={() => setCancelModal({ isOpen: false, title: '' })}
        onConfirm={(reason) => {
          alert(`Đã hủy nhiệm vụ '${cancelModal.title}'. Lý do: ${reason}`);
          setCancelModal({ isOpen: false, title: '' });
        }}
      />
    </div>
  );
};

