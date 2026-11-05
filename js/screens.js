/**
 * Screen Views (25 Phân hệ Nghiệp vụ)
 * Giao diện 100% Full-Width Fluid Layout
 */

function renderDashboardView() {
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Tổng quan Hoạt động & Tài chính</h2>
              <p class="text-sm text-slate-500 mt-1">Số liệu hợp nhất toàn hệ thống 7 cơ sở Cung Văn hóa Lao động TP.HCM</p>
            </div>
            <div class="flex items-center space-x-2 text-sm">
              <span class="text-slate-500">Kỳ báo cáo:</span>
              <select class="bg-white border border-slate-300 rounded-lg px-3 py-2 font-medium text-slate-800 outline-none shadow-xs">
                <option>Tháng 11/2026 (Hiện tại)</option>
                <option>Quý 4/2026</option>
                <option>Cả năm 2026</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <div class="flex justify-between items-center text-xs text-slate-500">
                <span>Tổng doanh thu</span>
                <span class="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">+12.5%</span>
              </div>
              <div class="text-2xl font-black text-slate-900 font-mono">1.450.000.000 đ</div>
              <div class="text-xs text-slate-400">Toàn bộ 7 cơ sở</div>
            </div>
            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <div class="flex justify-between items-center text-xs text-slate-500">
                <span>Thu tại quầy</span>
                <span class="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded-full">61.4%</span>
              </div>
              <div class="text-2xl font-black text-slate-900 font-mono">890.000.000 đ</div>
              <div class="text-xs text-slate-400">Xuất biên nhận quầy</div>
            </div>
            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <div class="flex justify-between items-center text-xs text-slate-500">
                <span>Trực tuyến (VietQR)</span>
                <span class="text-indigo-700 font-bold bg-indigo-50 px-2 py-0.5 rounded-full">38.6%</span>
              </div>
              <div class="text-2xl font-black text-indigo-700 font-mono">560.000.000 đ</div>
              <div class="text-xs text-slate-400">Khớp qua Webhook ngân hàng</div>
            </div>
            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <div class="flex justify-between items-center text-xs text-slate-500">
                <span>Lượt học viên ghi danh</span>
                <span class="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">88.4% sĩ số</span>
              </div>
              <div class="text-2xl font-black text-slate-900 font-mono">1.240 Học viên</div>
              <div class="text-xs text-slate-400">Tổng 84 lớp học đang mở</div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 class="font-bold text-slate-900 text-base">Doanh thu phân bổ theo các Cơ sở</h3>
              <div class="space-y-3.5 text-sm">
                <div>
                  <div class="flex justify-between font-medium mb-1">
                    <span>Trụ sở chính (55B Nguyễn Thị Minh Khai)</span>
                    <span class="font-mono font-bold text-slate-900">620.000.000 đ (42.8%)</span>
                  </div>
                  <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div class="bg-blue-600 h-full rounded-full" style="width: 42.8%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between font-medium mb-1">
                    <span>Cơ sở 1 (CLB Thể thao & Khiêu vũ)</span>
                    <span class="font-mono font-bold text-slate-900">310.000.000 đ (21.4%)</span>
                  </div>
                  <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div class="bg-indigo-600 h-full rounded-full" style="width: 21.4%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between font-medium mb-1">
                    <span>Cơ sở 2 (Khu biểu diễn nghệ thuật)</span>
                    <span class="font-mono font-bold text-slate-900">195.000.000 đ (13.4%)</span>
                  </div>
                  <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div class="bg-emerald-600 h-full rounded-full" style="width: 13.4%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 class="font-bold text-slate-900 text-base">Cảnh báo vận hành & Tiến độ chi trả</h3>
              <div class="space-y-3 text-sm">
                <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between">
                  <div>
                    <div class="font-bold text-emerald-900">Chi thù lao giáo viên tháng 10/2026</div>
                    <div class="text-xs text-slate-600 mt-0.5">Đã khấu trừ 10% thuế TNCN theo quy chuẩn</div>
                  </div>
                  <span class="font-mono font-bold text-emerald-800 text-base">820.500.000 đ</span>
                </div>
                <div class="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-between">
                  <div>
                    <div class="font-bold text-amber-900">Chi phí hoạt động đã duyệt (PĐC Luồng A & B)</div>
                    <div class="text-xs text-slate-600 mt-0.5">Bảo đảm trong hạn mức dự toán được giao</div>
                  </div>
                  <span class="font-mono font-bold text-slate-900 text-base">245.000.000 đ</span>
                </div>
                <div class="p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-between">
                  <div>
                    <div class="font-bold text-rose-900">Ngoại lệ đối soát tồn đọng</div>
                    <div class="text-xs text-slate-600 mt-0.5">3 đơn hàng chuyển khoản thiếu nội dung mã đơn</div>
                  </div>
                  <button onclick="selectScreen('reconcile')" class="px-3 py-1.5 bg-white border border-rose-300 text-rose-700 rounded-lg font-bold hover:bg-rose-100 transition text-xs">
                    Xử lý ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 2. KẾ HOẠCH MỞ LỚP
    function renderClassesView() {
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Kế hoạch Chiêu sinh & Quản lý Lớp học</h2>
              <p class="text-sm text-slate-500 mt-1">Thiết lập lớp học, lịch học, học phí và đẩy đồng bộ sang MISA eShop</p>
            </div>
            <div class="flex space-x-2">
              <button onclick="alert('Đã đẩy thành công tất cả mặt hàng sang MISA eShop!')" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold transition flex items-center space-x-1.5 shadow-xs">
                <i data-lucide="cloud-upload" class="w-4 h-4"></i>
                <span>Đẩy eShop hàng loạt</span>
              </button>
              <button onclick="alert('Mở form tạo lớp học mới')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition flex items-center space-x-1.5 shadow-xs">
                <i data-lucide="plus" class="w-4 h-4"></i>
                <span>Thêm lớp mới</span>
              </button>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div class="p-4 border-b border-slate-100 flex items-center justify-between">
              <span class="text-sm font-bold text-slate-700 uppercase tracking-wider">Danh sách lớp chiêu sinh tháng 11/2026</span>
              <span class="text-xs text-slate-400">Đơn vị: VNĐ</span>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-sm">
                <thead class="bg-slate-50 text-slate-600 uppercase font-bold border-b border-slate-200">
                  <tr>
                    <th class="p-4">Mã SKU</th>
                    <th class="p-4">Tên lớp môn học</th>
                    <th class="p-4">Lịch & Phòng</th>
                    <th class="p-4 text-center">Sĩ số</th>
                    <th class="p-4 text-right">Học phí</th>
                    <th class="p-4">Giáo viên (% thù lao)</th>
                    <th class="p-4 text-center">Trạng thái</th>
                    <th class="p-4 text-right">Tác vụ</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr class="hover:bg-slate-50/80 transition">
                    <td class="p-4 font-mono font-bold text-blue-600">TS-KV01</td>
                    <td class="p-4">
                      <div class="font-bold text-slate-900">Khiêu vũ giao tiếp Căn bản Khóa 11</div>
                      <div class="text-xs text-slate-400">Bộ môn: Nghệ thuật & Khiêu vũ</div>
                    </td>
                    <td class="p-4 text-xs">Thứ 2 - 4 - 6 (18:00 - 19:30)<br><span class="text-slate-400">Hội trường A</span></td>
                    <td class="p-4 text-center font-bold text-slate-800">32 / 35</td>
                    <td class="p-4 text-right font-mono font-bold text-slate-900">1.200.000 đ</td>
                    <td class="p-4 font-medium">Nguyễn Hải Đăng <span class="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-xs">(65%)</span></td>
                    <td class="p-4 text-center"><span class="badge-yellow px-3 py-1 rounded-full font-bold text-xs">Mở bán</span></td>
                    <td class="p-4 text-right space-x-1.5 whitespace-nowrap">
                      <button onclick="alert('Đã nhân bản lớp sang khóa mới!')" class="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg font-semibold text-slate-700 text-xs">Nhân bản</button>
                      <button onclick="alert('Đã chuyển trạng thái đóng lớp!')" class="px-2.5 py-1 bg-rose-50 hover:bg-rose-100 rounded-lg font-semibold text-rose-700 text-xs">Đóng lớp</button>
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-50/80 transition">
                    <td class="p-4 font-mono font-bold text-blue-600">TS-KV02</td>
                    <td class="p-4">
                      <div class="font-bold text-slate-900">Khiêu vũ Latin Chuyên đề (Rumba & ChaCha)</div>
                      <div class="text-xs text-slate-400">Bộ môn: Khiêu vũ Quốc tế</div>
                    </td>
                    <td class="p-4 text-xs">Thứ 3 - 5 - 7 (19:30 - 21:00)<br><span class="text-slate-400">Hội trường B</span></td>
                    <td class="p-4 text-center font-bold text-rose-600">25 / 25</td>
                    <td class="p-4 text-right font-mono font-bold text-slate-900">1.800.000 đ</td>
                    <td class="p-4 font-medium">Trần Thị Mai Loan <span class="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-xs">(70%)</span></td>
                    <td class="p-4 text-center"><span class="badge-blue px-3 py-1 rounded-full font-bold text-xs">Đủ sĩ số</span></td>
                    <td class="p-4 text-right space-x-1.5 whitespace-nowrap">
                      <button onclick="alert('Đã nhân bản lớp sang khóa mới!')" class="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg font-semibold text-slate-700 text-xs">Nhân bản</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    }

    // 3. QUẦY GHI DANH
    function renderCounterView() {
      return `
        <div class="space-y-6">
          <div>
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Quầy Ghi danh & Cấp thẻ Học viên</h2>
            <p class="text-sm text-slate-500 mt-1">Tiếp nhận ghi danh trực tiếp, cấp số thẻ giấy và in biên nhận thu tiền</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div class="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div class="flex justify-between items-center border-b pb-3">
                <span class="font-bold text-slate-800 uppercase tracking-wider text-sm">Thông tin đăng ký mới</span>
                <span class="text-xs text-slate-400">Ca trực sáng</span>
              </div>

              <div class="flex gap-2">
                <input type="text" placeholder="Tìm số điện thoại học viên..." value="0903123456" class="flex-1 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm outline-none focus:border-blue-600">
                <button onclick="alert('Tìm thấy học viên: Trần Minh Hoàng')" class="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-sm transition">Tìm kiếm</button>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-slate-600 font-medium text-xs mb-1">Họ và tên học viên *</label>
                  <input type="text" value="Trần Minh Hoàng" class="w-full border border-slate-300 rounded-xl p-2.5 font-bold text-slate-900 text-sm">
                </div>
                <div>
                  <label class="block text-slate-600 font-medium text-xs mb-1">Số điện thoại *</label>
                  <input type="text" value="0903123456" class="w-full border border-slate-300 rounded-xl p-2.5 font-bold text-slate-900 text-sm">
                </div>
              </div>

              <div>
                <label class="block text-slate-600 font-medium text-xs mb-1">Chọn lớp còn chỗ</label>
                <select class="w-full border border-slate-300 rounded-xl p-2.5 font-bold text-slate-900 bg-white text-sm">
                  <option>TS-KV01 - Khiêu vũ giao tiếp Căn bản K11 (1.200.000 đ) - Còn 3 chỗ</option>
                  <option>CS1-AERO01 - Aerobic Năng lượng buổi sáng (650.000 đ) - Còn 22 chỗ</option>
                </select>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-slate-600 font-medium text-xs mb-1">Số thẻ giấy cấp phát *</label>
                  <input type="text" value="THE-2026-0895" class="w-full border border-slate-300 rounded-xl p-2.5 font-mono font-bold text-blue-700 text-sm">
                </div>
                <div>
                  <label class="block text-slate-600 font-medium text-xs mb-1">Hình thức thanh toán</label>
                  <select class="w-full border border-slate-300 rounded-xl p-2.5 font-bold text-slate-900 bg-white text-sm">
                    <option>Tiền mặt tại quầy</option>
                    <option>Chuyển khoản (VietQR)</option>
                    <option>Quẹt thẻ POS</option>
                  </select>
                </div>
              </div>

              <button onclick="alert('Đã tạo đơn thành công trên eShop và in biên nhận!')" class="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition shadow-md shadow-blue-600/20 cursor-pointer">
                Tạo đơn hàng eShop & Xuất biên nhận (1.200.000 đ)
              </button>
            </div>

            <div class="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div class="border border-slate-200 rounded-xl p-5 bg-slate-50 space-y-3 font-mono text-sm">
                <div class="text-center border-b pb-3 border-dashed border-slate-300">
                  <div class="font-extrabold text-sm text-slate-900">CUNG VĂN HÓA LAO ĐỘNG TP.HCM</div>
                  <div class="text-xs text-slate-500">55B Nguyễn Thị Minh Khai, P. Bến Thành, Q.1</div>
                  <div class="font-bold text-sm mt-2 text-blue-700">BIÊN NHẬN THU TIỀN HỌC PHÍ</div>
                  <div class="text-xs text-slate-400">Mã đơn: DH-20261104-001</div>
                </div>
                <div class="space-y-2 pt-1 text-xs">
                  <div class="flex justify-between"><span class="text-slate-500">Học viên:</span><strong class="text-slate-900">Trần Minh Hoàng</strong></div>
                  <div class="flex justify-between"><span class="text-slate-500">Khóa học:</span><span class="text-slate-800">Khiêu vũ giao tiếp K11</span></div>
                  <div class="flex justify-between"><span class="text-slate-500">Số thẻ cấp:</span><strong class="text-amber-700 font-bold">THE-2026-0895</strong></div>
                  <div class="flex justify-between border-t border-dashed border-slate-300 pt-2 text-sm">
                    <span class="font-bold text-slate-900">TỔNG TIỀN:</span>
                    <strong class="text-rose-600 font-bold">1.200.000 đ</strong>
                  </div>
                </div>
              </div>

              <button onclick="alert('Lệnh in bill 80mm đã gửi tới máy in!')" class="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm flex items-center justify-center space-x-2 transition">
                <i data-lucide="printer" class="w-4 h-4"></i>
                <span>In biên nhận thu tiền (Khổ 80mm)</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    // 4. ĐĂNG KÝ TRỰC TUYẾN
    function renderOnlineRegView() {
      return `
        <div class="space-y-6">
          <div class="flex justify-between items-center">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Cổng Đăng Ký Trực Tuyến Học Viên</h2>
              <p class="text-sm text-slate-500 mt-1">Không cần tài khoản. Chọn lớp học và chuyển khoản VietQR tự động</p>
            </div>
            <span class="badge-blue px-3 py-1 rounded-full font-bold text-xs">Cổng công cộng</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div class="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 class="font-bold text-slate-900 text-base border-b pb-2">1. Thông tin đăng ký</h3>
              <div class="p-4 bg-blue-50 border border-blue-200 rounded-xl flex justify-between items-center text-sm">
                <div>
                  <strong class="text-slate-900 text-base">Khiêu vũ giao tiếp Căn bản Khóa 11</strong>
                  <p class="text-slate-500 text-xs mt-0.5">Thứ 2 - 4 - 6 (18:00 - 19:30) • Hội trường A</p>
                </div>
                <span class="font-mono font-bold text-rose-600 text-lg">1.200.000 đ</span>
              </div>

              <div class="space-y-3 pt-1 text-sm">
                <div>
                  <label class="block text-slate-700 font-medium text-xs mb-1">Họ và tên học viên *</label>
                  <input type="text" value="Lê Phương Thảo" class="w-full border border-slate-300 rounded-xl p-2.5 font-semibold">
                </div>
                <div>
                  <label class="block text-slate-700 font-medium text-xs mb-1">Số điện thoại nhận tin nhắn SMS *</label>
                  <input type="tel" value="0909123889" class="w-full border border-slate-300 rounded-xl p-2.5 font-semibold">
                </div>
                <label class="flex items-start space-x-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer text-xs">
                  <input type="checkbox" checked class="mt-0.5">
                  <span class="text-slate-600">Đồng ý để Cung Văn hóa Lao động TP.HCM xử lý dữ liệu cá nhân phục vụ công tác quản lý học vụ và xuất hóa đơn theo Nghị định 13/2023/NĐ-CP.</span>
                </label>
              </div>
            </div>

            <div class="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4 text-center">
              <div class="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-xs font-bold">
                <i data-lucide="clock" class="w-4 h-4 text-amber-600"></i>
                <span>Thời gian giữ chỗ: 14:35</span>
              </div>
              <div class="w-44 h-44 bg-white border-2 border-dashed border-slate-300 rounded-2xl mx-auto flex items-center justify-center font-bold text-slate-400">
                [ Mã VietQR ]
              </div>
              <div class="text-xs text-slate-600">
                Nội dung chuyển khoản: <strong class="text-blue-700 font-mono bg-blue-50 px-2.5 py-1 rounded border border-blue-200 text-sm">DH-ONL-98 0909123889</strong>
              </div>
              <button onclick="alert('Hệ thống ngân hàng đã khớp lệnh! Trạng thái: ĐÃ THANH TOÁN.')" class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition shadow-sm">
                Giả lập: Webhook Báo khớp tiền
              </button>
            </div>
          </div>
        </div>
      `;
    }

    // 5. ĐIỂM DANH LỚP HỌC (ĐÃ ĐỒNG BỘ FULL WIDTH)
    function renderAttendanceView() {
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Điểm danh Lớp học & Học viên</h2>
              <p class="text-sm text-slate-500 mt-1">Dành cho giáo viên/HLV: điểm danh buổi học, kiểm soát số thẻ, báo dạy thay và ghi nhận học viên lạ</p>
            </div>
            <div class="flex items-center space-x-2.5">
              <button onclick="alert('Mở form báo cáo giáo viên dạy thay hoặc xin nghỉ')" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition border border-slate-300">
                Báo dạy thay / Nghỉ
              </button>
              <button onclick="alert('Đã lưu dữ liệu điểm danh buổi học thành công!')" class="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-bold hover:bg-emerald-700 transition shadow-xs flex items-center space-x-1.5">
                <i data-lucide="check" class="w-4 h-4"></i>
                <span>Lưu điểm danh</span>
              </button>
            </div>
          </div>

          <!-- Bộ lọc lớp học & Thống kê nhanh buổi học -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <span class="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-1">Lớp giảng dạy</span>
              <select class="w-full font-bold text-slate-900 bg-transparent outline-none text-sm">
                <option>TS-KV01: Khiêu vũ Giao tiếp Căn bản K11</option>
                <option>TS-KV02: Khiêu vũ Latin Chuyên đề</option>
                <option>TS-BL01: Bơi lội Thiếu nhi Khóa Hè</option>
              </select>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <span class="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-1">Buổi & Lịch học</span>
              <div class="font-bold text-slate-900 text-sm">Buổi 8/12 • Thứ 2 (18:00 - 19:30)</div>
              <div class="text-xs text-slate-400 mt-0.5">Phòng: Hội trường A</div>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <span class="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-1">Sĩ số lớp</span>
              <div class="flex items-baseline space-x-2">
                <span class="text-2xl font-black text-slate-900 font-mono">32 / 35</span>
                <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Có mặt 91.4%</span>
              </div>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <span class="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-1">Giáo viên phụ trách</span>
              <div class="font-bold text-blue-700 text-sm">Nguyễn Hải Đăng</div>
              <div class="text-xs text-slate-400 mt-0.5">Hợp đồng: HĐGV-2026-08 (65%)</div>
            </div>
          </div>

          <!-- Bảng danh sách điểm danh full width -->
          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div class="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-slate-50">
              <div class="flex items-center space-x-2">
                <span class="font-bold text-xs uppercase text-slate-700 tracking-wider">Danh sách học viên lớp (35 học viên)</span>
                <span class="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full font-medium">Buổi 8</span>
              </div>
              <div class="flex items-center space-x-2">
                <input type="text" placeholder="Tìm số thẻ, họ tên..." class="text-xs border border-slate-300 rounded-lg px-3 py-1.5 outline-none bg-white w-64">
                <button onclick="alert('Đã đánh dấu tất cả có mặt!')" class="text-xs bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg font-bold">Điểm danh tất cả</button>
              </div>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left text-sm">
                <thead class="bg-slate-50 text-slate-600 uppercase font-bold text-xs border-b border-slate-200">
                  <tr>
                    <th class="p-3.5 text-center w-12">STT</th>
                    <th class="p-3.5">Mã thẻ giấy</th>
                    <th class="p-3.5">Họ và tên học viên</th>
                    <th class="p-3.5">Số điện thoại</th>
                    <th class="p-3.5">Tình trạng học phí</th>
                    <th class="p-3.5 text-center">Trạng thái điểm danh</th>
                    <th class="p-3.5">Ghi chú</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 font-medium">
                  <tr class="hover:bg-slate-50 transition">
                    <td class="p-3.5 text-center text-slate-400">01</td>
                    <td class="p-3.5 font-mono font-bold text-blue-700">THE-2026-0891</td>
                    <td class="p-3.5 font-bold text-slate-900">Trần Minh Hoàng</td>
                    <td class="p-3.5 font-mono text-slate-600">0903.123.456</td>
                    <td class="p-3.5"><span class="badge-green px-2.5 py-0.5 rounded-full text-xs font-bold">Đã thu 100%</span></td>
                    <td class="p-3.5 text-center">
                      <button onclick="this.classList.toggle('bg-emerald-600'); this.classList.toggle('text-white'); this.classList.toggle('bg-slate-100'); this.classList.toggle('text-slate-600');" class="px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow-xs">
                        ✓ Có mặt
                      </button>
                    </td>
                    <td class="p-3.5 text-xs text-slate-500">Đăng ký tại Quầy TS</td>
                  </tr>
                  <tr class="hover:bg-slate-50 transition">
                    <td class="p-3.5 text-center text-slate-400">02</td>
                    <td class="p-3.5 font-mono font-bold text-blue-700">THE-2026-0893</td>
                    <td class="p-3.5 font-bold text-slate-900">Lê Hoàng Long</td>
                    <td class="p-3.5 font-mono text-slate-600">0977.112.233</td>
                    <td class="p-3.5"><span class="badge-green px-2.5 py-0.5 rounded-full text-xs font-bold">Đã thu 100%</span></td>
                    <td class="p-3.5 text-center">
                      <button onclick="this.classList.toggle('bg-emerald-600'); this.classList.toggle('text-white'); this.classList.toggle('bg-slate-100'); this.classList.toggle('text-slate-600');" class="px-4 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-600">
                        ✗ Vắng mặt
                      </button>
                    </td>
                    <td class="p-3.5 text-xs text-rose-500">Vắng buổi thứ 2 liên tiếp</td>
                  </tr>
                  <tr class="hover:bg-slate-50 transition">
                    <td class="p-3.5 text-center text-slate-400">03</td>
                    <td class="p-3.5 font-mono font-bold text-blue-700">THE-2026-0895</td>
                    <td class="p-3.5 font-bold text-slate-900">Phạm Bích Ngọc</td>
                    <td class="p-3.5 font-mono text-slate-600">0912.889.900</td>
                    <td class="p-3.5"><span class="badge-blue px-2.5 py-0.5 rounded-full text-xs font-bold">VietQR Online</span></td>
                    <td class="p-3.5 text-center">
                      <button onclick="this.classList.toggle('bg-emerald-600'); this.classList.toggle('text-white'); this.classList.toggle('bg-slate-100'); this.classList.toggle('text-slate-600');" class="px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow-xs">
                        ✓ Có mặt
                      </button>
                    </td>
                    <td class="p-3.5 text-xs text-slate-500">Học viên chuyển lớp từ TS-KV02 sang</td>
                  </tr>
                  <tr class="hover:bg-slate-50 transition">
                    <td class="p-3.5 text-center text-slate-400">04</td>
                    <td class="p-3.5 font-mono font-bold text-blue-700">THE-2026-0901</td>
                    <td class="p-3.5 font-bold text-slate-900">Nguyễn Văn An</td>
                    <td class="p-3.5 font-mono text-slate-600">0983.334.455</td>
                    <td class="p-3.5"><span class="badge-green px-2.5 py-0.5 rounded-full text-xs font-bold">Đã thu 100%</span></td>
                    <td class="p-3.5 text-center">
                      <button onclick="this.classList.toggle('bg-emerald-600'); this.classList.toggle('text-white'); this.classList.toggle('bg-slate-100'); this.classList.toggle('text-slate-600');" class="px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow-xs">
                        ✓ Có mặt
                      </button>
                    </td>
                    <td class="p-3.5 text-xs text-slate-500">Đầy đủ điều kiện cấp chứng nhận</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Ghi nhận học viên lạ / học thử -->
            <div class="p-4 bg-slate-50 border-t border-slate-200">
              <label class="block text-slate-800 font-bold text-xs uppercase tracking-wider mb-2">
                Ghi nhận học viên học thử / người lạ chưa xuất trình thẻ hợp lệ:
              </label>
              <div class="flex flex-col sm:flex-row gap-2">
                <input type="text" placeholder="Nhập họ tên, số điện thoại, ghi chú người lạ/học thử..." class="flex-1 border border-slate-300 rounded-xl p-2.5 text-sm outline-none bg-white">
                <button onclick="alert('Đã ghi nhận người lạ thành công, chuyển thông tin sang Quầy ghi danh để đối chiếu!')" class="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-sm transition shrink-0">
                  + Thêm ghi chú đối soát
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 6. CHUYỂN LỚP & BẢO LƯU (MỚI BỔ SUNG ĐẦY ĐỦ)
    function renderClassTransferView() {
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Chuyển Lớp & Bảo lưu Học phí</h2>
              <p class="text-sm text-slate-500 mt-1">Tiếp nhận yêu cầu từ học viên, luân chuyển duyệt và tự động cập nhật sĩ số</p>
            </div>
            <button onclick="alert('Mở form tạo yêu cầu chuyển lớp hoặc bảo lưu')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition shadow-xs">
              + Lập yêu cầu mới
            </button>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <table class="w-full text-left text-sm">
              <thead class="bg-slate-50 text-slate-600 uppercase font-bold border-b border-slate-200">
                <tr>
                  <th class="p-4">Mã phiếu</th>
                  <th class="p-4">Loại yêu cầu</th>
                  <th class="p-4">Học viên</th>
                  <th class="p-4">Lớp hiện tại</th>
                  <th class="p-4">Lớp chuyển tới / Thời hạn</th>
                  <th class="p-4">Lý do</th>
                  <th class="p-4 text-center">Trạng thái</th>
                  <th class="p-4 text-right">Phê duyệt</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-4 font-mono font-bold text-blue-600">YCCL-01</td>
                  <td class="p-4"><span class="badge-blue px-2.5 py-0.5 rounded-full font-bold text-xs">Chuyển lớp</span></td>
                  <td class="p-4 font-bold text-slate-900">Phạm Minh Quân</td>
                  <td class="p-4">TS-KV01 (Khiêu vũ căn bản T2-4-6)</td>
                  <td class="p-4 font-medium text-slate-900">TS-KV02 (Khiêu vũ căn bản T3-5-7)</td>
                  <td class="p-4 text-slate-600 text-xs">Đổi ca làm việc buổi tối sang ngày chẵn</td>
                  <td class="p-4 text-center"><span class="badge-yellow px-2.5 py-0.5 rounded-full font-bold text-xs">Chờ duyệt</span></td>
                  <td class="p-4 text-right space-x-1.5 whitespace-nowrap">
                    <button onclick="alert('Đã phê duyệt chuyển lớp thành công!')" class="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs">Đồng ý</button>
                    <button onclick="openCancelModal('Từ chối chuyển lớp', 'Phạm Minh Quân', (r) => alert('Đã từ chối: ' + r))" class="px-3 py-1 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg font-bold text-xs">Từ chối</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // 7. QUẢN LÝ THẺ GIẤY
    function renderCardsView() {
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Quản lý Cấp phát Lô Thẻ giấy</h2>
              <p class="text-sm text-slate-500 mt-1">Tổ trưởng Tổ Tài vụ giao dải số serial cho nhân viên; kiểm kê tồn kho và hủy hỏng</p>
            </div>
            <button onclick="alert('Mở form giao dải thẻ mới')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition shadow-xs">
              + Giao lô thẻ mới
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div class="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs"><span class="text-xs text-slate-500">Tổng thẻ đã giao</span><div class="text-2xl font-bold text-slate-900 font-mono mt-1">1.300</div></div>
            <div class="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs"><span class="text-xs text-slate-500">Đã phát hành</span><div class="text-2xl font-bold text-emerald-600 font-mono mt-1">1.020</div></div>
            <div class="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs"><span class="text-xs text-slate-500">Còn tồn két</span><div class="text-2xl font-bold text-blue-600 font-mono mt-1">273</div></div>
            <div class="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs"><span class="text-xs text-slate-500">Hủy hỏng</span><div class="text-2xl font-bold text-rose-600 font-mono mt-1">7</div></div>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <table class="w-full text-left text-sm">
              <thead class="bg-slate-50 text-slate-600 uppercase font-bold border-b border-slate-200">
                <tr><th class="p-4">Mã lô</th><th class="p-4">Nhân sự nhận</th><th class="p-4">Dải số serial</th><th class="p-4 text-center">Đã phát</th><th class="p-4 text-center">Còn lại</th><th class="p-4 text-center">Trạng thái</th><th class="p-4 text-right">Thao tác</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-4 font-mono font-bold text-blue-600">LOT-T11-01</td>
                  <td class="p-4 font-bold text-slate-900">Nguyễn Thị Thùy Dung (Quầy TS)</td>
                  <td class="p-4 font-mono">10001 → 10500</td>
                  <td class="p-4 text-center font-bold text-emerald-600">342</td>
                  <td class="p-4 text-center font-bold text-blue-600">155</td>
                  <td class="p-4 text-center"><span class="badge-green px-3 py-1 rounded-full font-bold text-xs">Đang phát hành</span></td>
                  <td class="p-4 text-right">
                    <button onclick="openCancelModal('Hủy thẻ giấy hư hỏng', 'Lô LOT-T11-01', (r) => alert('Đã ghi nhận hủy: ' + r))" class="text-rose-600 font-bold hover:underline text-xs">
                      Báo hủy thẻ
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // 8. BIỂU GIÁ THEO QUYẾT ĐỊNH
    function renderPricingView() {
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Biểu Giá Dịch vụ Theo Quyết định</h2>
              <p class="text-sm text-slate-500 mt-1">Quản lý quyết định giá và ngày hiệu lực; giá đang hiệu lực không được sửa đổi trực tiếp</p>
            </div>
            <button onclick="alert('Mở form ban hành quyết định giá mới')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition shadow-xs">
              + Tạo QĐ giá mới
            </button>
          </div>

          <div class="p-5 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-between text-sm">
            <div>
              <strong class="text-blue-900 text-base">Quyết định đang hiệu lực: QĐ-88/QĐ-CVHLĐ</strong>
              <p class="text-slate-600 mt-0.5">Ngày ký: 01/01/2026 • Ngày hiệu lực: 15/01/2026 • Người ký: Giám đốc Cung Văn hóa</p>
            </div>
            <span class="badge-green px-3.5 py-1.5 rounded-full font-bold text-xs">🔒 Đang khóa sửa trực tiếp</span>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <table class="w-full text-left text-sm">
              <thead class="bg-slate-50 text-slate-600 uppercase font-bold border-b border-slate-200">
                <tr><th class="p-4">Mã DV</th><th class="p-4">Tên dịch vụ</th><th class="p-4">Đơn vị tính</th><th class="p-4 text-right">Đơn giá niêm yết</th><th class="p-4 text-center">Tình trạng</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50 transition"><td class="p-4 font-bold text-blue-600">KV-CB</td><td class="p-4 font-medium">Khiêu vũ giao tiếp căn bản</td><td class="p-4 text-slate-500">Khóa 24 buổi</td><td class="p-4 text-right font-mono font-bold text-slate-900">1.200.000 đ</td><td class="p-4 text-center"><span class="badge-gray px-3 py-1 rounded-full font-mono text-xs">Đã chốt theo QĐ</span></td></tr>
                <tr class="hover:bg-slate-50 transition"><td class="p-4 font-bold text-blue-600">KV-NC</td><td class="p-4 font-medium">Khiêu vũ Latin chuyên đề</td><td class="p-4 text-slate-500">Khóa 24 buổi</td><td class="p-4 text-right font-mono font-bold text-slate-900">1.800.000 đ</td><td class="p-4 text-center"><span class="badge-gray px-3 py-1 rounded-full font-mono text-xs">Đã chốt theo QĐ</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // 9. KẾT CA
    function renderShiftCloseView() {
      return `
        <div class="space-y-6">
          <div>
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Kết ca & Bàn giao Nộp quỹ</h2>
            <p class="text-sm text-slate-500 mt-1">Kiểm đếm tiền két thực tế, giải trình chênh lệch và thủ quỹ ký nhận</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <span class="text-xs text-slate-500">Tiền mặt hệ thống ghi nhận</span>
              <div class="text-2xl font-black text-slate-900 mt-1 font-mono">3.600.000 đ</div>
            </div>
            <div class="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <span class="text-xs text-slate-500">Chuyển khoản VietQR</span>
              <div class="text-2xl font-black text-blue-700 mt-1 font-mono">4.200.000 đ</div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h3 class="font-bold text-slate-900 text-base">Kiểm đếm tiền két thực tế</h3>
            <div>
              <label class="block text-slate-600 text-xs font-medium mb-1">Số tiền mặt đếm được tại két *</label>
              <input type="number" value="3600000" class="w-full border border-slate-300 rounded-xl p-3 font-mono font-bold text-lg text-slate-900 outline-none">
            </div>
            <div class="p-3.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl font-bold text-sm">
              Chênh lệch: 0 đ (Khớp hoàn toàn)
            </div>
            <div class="flex gap-3 pt-2">
              <button onclick="alert('Đã lập Phiếu nộp quỹ ca PNQ-0411-01 chuyển Thủ quỹ!')" class="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition">
                Lập phiếu nộp quỹ ca
              </button>
              <button onclick="alert('Thủ quỹ đã ký xác nhận đã nhận đủ tiền nộp quỹ!')" class="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition">
                Thủ quỹ ký nhận nộp quỹ
              </button>
            </div>
          </div>
        </div>
      `;
    }

    // 10. ĐỐI SOÁT 3 BÊN
    function renderReconcileView() {
      return `
        <div class="space-y-6">
          <div>
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Đối soát 3 bên: Đơn hàng – Hóa đơn – Tiền ngân hàng</h2>
            <p class="text-sm text-slate-500 mt-1">Tự động đối chiếu theo ngày; phát hiện lệch tiền, thiếu hóa đơn hoặc chuyển khoản thiếu mã đơn</p>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div class="p-4 border-b border-slate-100 flex justify-between items-center">
              <span class="text-sm font-bold text-slate-700 uppercase tracking-wider">Bảng kê đối soát ngày 04/11/2026</span>
              <span class="badge-yellow px-3 py-1 rounded-full font-bold text-xs">1 Ngoại lệ cần xử lý</span>
            </div>
            <table class="w-full text-left text-sm">
              <thead class="bg-slate-50 text-slate-600 uppercase font-bold border-b border-slate-200">
                <tr>
                  <th class="p-4">Mã đơn hàng</th>
                  <th class="p-4 text-right">Tiền đơn</th>
                  <th class="p-4">Số HĐĐT</th>
                  <th class="p-4 text-right">Tiền HĐ</th>
                  <th class="p-4">Tiền Bank</th>
                  <th class="p-4 text-center">Trạng thái đối soát</th>
                  <th class="p-4">Giải trình</th>
                  <th class="p-4 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-4 font-mono font-bold text-blue-600">DH-20261104-001</td>
                  <td class="p-4 text-right font-mono font-bold text-slate-900">1.200.000 đ</td>
                  <td class="p-4 font-mono">HD-04421</td>
                  <td class="p-4 text-right font-mono">1.200.000 đ</td>
                  <td class="p-4 font-mono text-emerald-700 font-bold">1.200.000 đ</td>
                  <td class="p-4 text-center"><span class="badge-green px-3 py-1 rounded-full font-bold text-xs">Khớp chuẩn</span></td>
                  <td class="p-4 text-slate-400">-</td>
                  <td class="p-4 text-right text-slate-400">Đã chốt</td>
                </tr>
                <tr class="hover:bg-slate-50 transition bg-amber-50/20">
                  <td class="p-4 font-mono font-bold text-blue-600">DH-20261104-005</td>
                  <td class="p-4 text-right font-mono font-bold text-slate-900">1.800.000 đ</td>
                  <td class="p-4 text-rose-500 font-semibold italic">Chưa cấp HĐ</td>
                  <td class="p-4 text-right font-mono text-slate-400">0 đ</td>
                  <td class="p-4 font-mono text-emerald-700 font-bold">1.800.000 đ</td>
                  <td class="p-4 text-center"><span class="badge-red px-3 py-1 rounded-full font-bold text-xs">Thiếu hóa đơn</span></td>
                  <td class="p-4 text-slate-600 text-xs">Lỗi nghẽn cổng kết nối meInvoice lúc 11h15</td>
                  <td class="p-4 text-right">
                    <button onclick="openCancelModal('Ghép tay thủ công', 'DH-20261104-005', (r) => alert('Đã ghép tay: ' + r))" class="px-3 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg font-bold text-xs">
                      Ghép tay
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // 11. NHẬP SAO KÊ NGÂN HÀNG (MỚI BỔ SUNG ĐẦY ĐỦ)
    function renderBankStatementView() {
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Nhập Sao kê Ngân hàng & Trích mã đơn</h2>
              <p class="text-sm text-slate-500 mt-1">Kéo thả file sao kê Excel/CSV; tự động trích xuất mã đơn và cảnh báo giao dịch trùng lặp</p>
            </div>
            <button onclick="alert('Đã ghi nhận 3 giao dịch hợp lệ vào sổ quỹ đối soát (loại bỏ 1 dòng trùng)!')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition shadow-xs">
              Ghi nhận vào hệ thống
            </button>
          </div>

          <div class="p-8 bg-white border-2 border-dashed border-slate-300 rounded-2xl text-center space-y-2">
            <div class="text-base font-bold text-slate-800">Kéo thả file sao kê Excel/CSV (Vietcombank, BIDV...) vào đây</div>
            <div class="text-xs text-slate-500">Đã nạp file: VCB_SaoKe_20261104.xlsx (4 dòng giao dịch)</div>
          </div>

          <div class="p-4 bg-amber-50 border border-amber-300 rounded-xl text-sm text-amber-900 font-medium">
            ⚠️ Phát hiện 1 dòng trùng lặp mã giao dịch ngân hàng VCB8892183 (sẽ tự động bỏ qua khi ghi nhận).
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <table class="w-full text-left text-sm">
              <thead class="bg-slate-50 text-slate-600 uppercase font-bold border-b border-slate-200">
                <tr><th class="p-4">Thời gian</th><th class="p-4">Mã GD Bank</th><th class="p-4 text-right">Số tiền</th><th class="p-4">Nội dung chuyển khoản</th><th class="p-4">Mã đơn trích xuất</th><th class="p-4 text-center">Kiểm tra</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-4 text-slate-500 text-xs">04/11/2026 09:30</td>
                  <td class="p-4 font-mono font-bold">VCB8892183</td>
                  <td class="p-4 text-right font-mono font-bold text-slate-900">1.200.000 đ</td>
                  <td class="p-4 text-slate-700 text-xs">DH-20261104-002 Nguyen Thi Hong Nhung hoc phi</td>
                  <td class="p-4 font-mono font-bold text-blue-700">DH-20261104-002</td>
                  <td class="p-4 text-center"><span class="badge-green px-3 py-1 rounded-full font-bold text-xs">Hợp lệ</span></td>
                </tr>
                <tr class="hover:bg-slate-50 transition bg-rose-50/40">
                  <td class="p-4 text-slate-500 text-xs">04/11/2026 11:20</td>
                  <td class="p-4 font-mono font-bold">VCB8892183</td>
                  <td class="p-4 text-right font-mono font-bold text-slate-900">1.200.000 đ</td>
                  <td class="p-4 text-slate-700 text-xs">DH-20261104-002 Nguyen Thi Hong Nhung hoc phi</td>
                  <td class="p-4 font-mono font-bold text-blue-700">DH-20261104-002</td>
                  <td class="p-4 text-center"><span class="badge-red px-3 py-1 rounded-full font-bold text-xs">Trùng lặp</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // 12. CHỐT SỔ NGÀY 21H
    function renderDayLockView() {
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Chốt Sổ Ngày & Khóa Dữ liệu Cơ sở (21:00)</h2>
              <p class="text-sm text-slate-500 mt-1">Sau khi khóa sổ lúc 21h, hệ thống tự động đóng đơn hàng và khóa quyền sửa đổi</p>
            </div>
            <button onclick="alert('Đã chốt sổ và khóa ngày cơ sở lúc 21:00! Mọi thao tác hóa đơn trong ngày đã được khóa.')" class="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-sm font-bold transition shadow-xs">
              🔒 Xác nhận & Khóa ngày (21:00)
            </button>
          </div>

          <div class="p-5 bg-rose-50 border border-rose-200 rounded-2xl flex items-center justify-between text-sm text-rose-900">
            <div>
              <strong class="text-base">Quy chuẩn CVHLĐ: Khóa sổ doanh thu ngày hằng ngày lúc 21:00</strong>
              <p class="mt-0.5 text-xs text-rose-800">Dữ liệu ngày 04/11/2026 của Trụ sở: 12 Đơn ghi danh, Tổng thực thu: 21.800.000 đ.</p>
            </div>
            <button onclick="alert('Đang in Bảng kê ngày PDF...')" class="px-4 py-2 bg-white border border-rose-300 rounded-xl font-bold text-rose-800 shadow-xs hover:bg-rose-100 transition text-xs">
              In Bảng kê ngày
            </button>
          </div>
        </div>
      `;
    }

    // 13. CHỨNG TỪ XUẤT MISA
    function renderAccountingExportView() {
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Chứng từ Kế toán Xuất MISA</h2>
              <p class="text-sm text-slate-500 mt-1">Tổng hợp chứng từ từ HTQT, xuất file XML/Excel chuẩn để nhập vào MISA Kế toán</p>
            </div>
            <button onclick="alert('Đang kết xuất file XML/Excel chuẩn MISA Kế toán...')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition shadow-xs">
              📥 Xuất file MISA (XML / Excel)
            </button>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <table class="w-full text-left text-sm">
              <thead class="bg-slate-50 text-slate-600 uppercase font-bold border-b border-slate-200">
                <tr><th class="p-4">Mã CT HTQT</th><th class="p-4">Ngày lập</th><th class="p-4">Nghiệp vụ</th><th class="p-4">Diễn giải</th><th class="p-4 text-right">Số tiền</th><th class="p-4 text-center">Trạng thái MISA</th><th class="p-4 text-right">Thao tác</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-4 font-mono font-bold text-blue-600">CT-20261104-01</td>
                  <td class="p-4 text-slate-500 text-xs">04/11/2026</td>
                  <td class="p-4 font-medium">Phiếu thu bán hàng</td>
                  <td class="p-4">Tổng hợp thu học phí quầy ca sáng 04/11</td>
                  <td class="p-4 text-right font-mono font-bold text-slate-900">21.800.000 đ</td>
                  <td class="p-4 text-center"><span class="badge-yellow px-3 py-1 rounded-full font-bold text-xs">Chờ chuyển</span></td>
                  <td class="p-4 text-right">
                    <button onclick="alert('Đã cập nhật trạng thái: Đã chuyển sang MISA!')" class="px-3 py-1 bg-emerald-600 text-white rounded-lg font-bold text-xs">Đánh dấu đã chuyển</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // 14. BẢNG KÊ THÙ LAO GIÁO VIÊN
    function renderTeacherPayrollView() {
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Bảng kê Thù lao Giáo viên Cuối khóa</h2>
              <p class="text-sm text-slate-500 mt-1">Doanh thu lớp, tỷ lệ %, thuế TNCN 10%, chữ ký GV và duyệt chuyển đề xuất chi</p>
            </div>
            <button onclick="alert('Đang xuất file chuyển khoản ngân hàng...')" class="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition">
              Xuất file chi trả ngân hàng
            </button>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <table class="w-full text-left text-sm">
              <thead class="bg-slate-50 text-slate-600 uppercase font-bold border-b border-slate-200">
                <tr>
                  <th class="p-4">Giáo viên</th>
                  <th class="p-4">Lớp giảng dạy</th>
                  <th class="p-4 text-right">Tổng doanh thu</th>
                  <th class="p-4 text-center">Tỷ lệ %</th>
                  <th class="p-4 text-right">Tổng thù lao</th>
                  <th class="p-4 text-right">Thuế TNCN (10%)</th>
                  <th class="p-4 text-right">Thực nhận</th>
                  <th class="p-4 text-center">Trạng thái</th>
                  <th class="p-4 text-right">Tác vụ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-4 font-bold text-slate-900">Nguyễn Hải Đăng<br><span class="text-slate-400 font-mono text-xs">MST: 8092183921</span></td>
                  <td class="p-4">Khiêu vũ giao tiếp Căn bản K10<br><span class="text-slate-400 text-xs">Khóa kết thúc 30/10</span></td>
                  <td class="p-4 text-right font-mono font-bold text-slate-900">38.400.000 đ</td>
                  <td class="p-4 text-center font-bold text-blue-700 bg-blue-50 rounded">65%</td>
                  <td class="p-4 text-right font-mono font-semibold text-slate-900">24.960.000 đ</td>
                  <td class="p-4 text-right font-mono text-rose-600">-2.496.000 đ</td>
                  <td class="p-4 text-right font-mono font-bold text-emerald-700 text-base">22.464.000 đ</td>
                  <td class="p-4 text-center"><span class="badge-green px-3 py-1 rounded-full font-bold text-xs">Kế toán duyệt</span></td>
                  <td class="p-4 text-right">
                    <button onclick="alert('Đã tự động chuyển thành Đề xuất chi Luồng A!')" class="px-3.5 py-1.5 bg-emerald-600 text-white rounded-lg font-bold text-xs hover:bg-emerald-700 transition">
                      Tạo đề xuất chi
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // 15. HỒ SƠ GIÁO VIÊN (MỚI BỔ SUNG ĐẦY ĐỦ)
    function renderTeachersView() {
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Hồ sơ Giáo viên & Hợp đồng Giảng dạy</h2>
              <p class="text-sm text-slate-500 mt-1">Thông tin giáo viên, mã số thuế, tài khoản ngân hàng và tỷ lệ % thù lao theo hợp đồng</p>
            </div>
            <button onclick="alert('Mở form thêm giáo viên mới')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition shadow-xs">
              + Thêm giáo viên
            </button>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <table class="w-full text-left text-sm">
              <thead class="bg-slate-50 text-slate-600 uppercase font-bold border-b border-slate-200">
                <tr><th class="p-4">Mã GV</th><th class="p-4">Họ tên giáo viên</th><th class="p-4">Mã số thuế / CCCD</th><th class="p-4">Tài khoản Ngân hàng</th><th class="p-4">Hợp đồng giảng dạy</th><th class="p-4 text-center">Tỷ lệ %</th><th class="p-4 text-center">Trạng thái</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-4 font-mono font-bold text-blue-600">GV-01</td>
                  <td class="p-4 font-bold text-slate-900">Nguyễn Hải Đăng<br><span class="text-slate-400 text-xs">Bộ môn: Khiêu vũ giao tiếp</span></td>
                  <td class="p-4 text-xs">MST: 8092183921<br>CCCD: 079085002134</td>
                  <td class="p-4 font-mono text-xs">0071001289382<br><span class="text-slate-400">Vietcombank Kỳ Đồng</span></td>
                  <td class="p-4 font-mono font-bold text-blue-700">HDGD-2026/012</td>
                  <td class="p-4 text-center font-bold text-emerald-700 bg-emerald-50 rounded">65%</td>
                  <td class="p-4 text-center"><span class="badge-green px-3 py-1 rounded-full font-bold text-xs">Đang giảng dạy</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // 16. ĐỀ XUẤT CHI
    function renderExpenseRequestView() {
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Lập Phiếu Đề xuất chi</h2>
              <p class="text-sm text-slate-500 mt-1">Phân luồng: Luồng A (Trong dự toán thường quy) và Luồng B (Ngoài dự toán/Dự án lớn)</p>
            </div>
            <button onclick="alert('Mở form tạo phiếu đề xuất chi mới')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition shadow-xs">
              + Lập phiếu mới
            </button>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <table class="w-full text-left text-sm">
              <thead class="bg-slate-50 text-slate-600 uppercase font-bold border-b border-slate-200">
                <tr>
                  <th class="p-4">Mã phiếu</th>
                  <th class="p-4">Luồng xử lý</th>
                  <th class="p-4">Đơn vị đề xuất</th>
                  <th class="p-4">Nội dung đề nghị chi</th>
                  <th class="p-4 text-right">Số tiền</th>
                  <th class="p-4">Nguồn kinh phí</th>
                  <th class="p-4 text-center">Trạng thái</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-4 font-mono font-bold text-blue-600">PDC-2026-11-001</td>
                  <td class="p-4 font-bold text-blue-700">Luồng A</td>
                  <td class="p-4 font-medium">Phòng Văn hóa</td>
                  <td class="p-4 text-slate-900 font-semibold">Chi thù lao giảng dạy Khiêu vũ & Aerobic cuối tháng 10</td>
                  <td class="p-4 text-right font-mono font-bold text-slate-900 text-base">50.814.000 đ</td>
                  <td class="p-4 text-slate-500 text-xs">Nguồn sự nghiệp có thu</td>
                  <td class="p-4 text-center"><span class="badge-yellow px-3 py-1 rounded-full font-bold text-xs">Chờ duyệt</span></td>
                </tr>
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-4 font-mono font-bold text-blue-600">PDC-2026-11-003</td>
                  <td class="p-4 font-bold text-purple-700">Luồng B</td>
                  <td class="p-4 font-medium">Phòng TC-HC-QT</td>
                  <td class="p-4 text-slate-900 font-semibold">Nâng cấp âm thanh ánh sáng sân khấu ngoài trời CS2</td>
                  <td class="p-4 text-right font-mono font-bold text-slate-900 text-base">145.000.000 đ</td>
                  <td class="p-4 text-slate-500 text-xs">Kinh phí Công đoàn cấp</td>
                  <td class="p-4 text-center"><span class="badge-yellow px-3 py-1 rounded-full font-bold text-xs">Chờ kế toán</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // 17. KIỂM SOÁT CHI (MỚI BỔ SUNG ĐẦY ĐỦ)
    function renderExpenseCheckView() {
      return `
        <div class="space-y-6">
          <div>
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Kiểm soát Chi & Thẩm tra Hồ sơ Thanh toán</h2>
            <p class="text-sm text-slate-500 mt-1">Checklist hồ sơ pháp lý, đối chiếu số dư dự toán, cảnh báo chia tách khoản chi</p>
          </div>

          <div class="p-4 bg-amber-50 border border-amber-300 rounded-2xl text-sm text-amber-900 font-medium">
            ⚠️ <strong>Cảnh báo chia tách gói chi:</strong> Phát hiện 2 phiếu chi trong vòng 7 ngày cho cùng nhà cung cấp tổng trị giá 95 triệu (gần hạn mức 100 triệu chỉ định thầu).
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <div class="flex justify-between items-center border-b pb-3">
              <div><strong class="text-base text-slate-900">Phiếu: PDC-2026-11-003 • Nâng cấp âm thanh CS2</strong></div>
              <span class="font-mono font-bold text-blue-700 text-lg">145.000.000 đ</span>
            </div>
            <div class="p-4 bg-slate-50 rounded-xl flex justify-between text-sm">
              <span>Mục chi: Mua sắm trang thiết bị</span>
              <strong>Số dư dự toán còn: 385.000.000 đ (Bảo đảm)</strong>
            </div>
            <div class="space-y-2 text-sm font-medium">
              <label class="flex items-center space-x-2"><input type="checkbox" checked class="text-blue-600"> <span>Hóa đơn điện tử hợp lệ (Đã tra cứu Tổng cục Thuế)</span></label>
              <label class="flex items-center space-x-2"><input type="checkbox" checked class="text-blue-600"> <span>Hợp đồng kinh tế và cam kết bảo hành kèm theo</span></label>
              <label class="flex items-center space-x-2"><input type="checkbox" checked class="text-blue-600"> <span>Biên bản nghiệm thu hoàn thành có đầy đủ chữ ký 2 bên</span></label>
            </div>
            <div class="flex justify-end space-x-2 pt-2 border-t">
              <button onclick="alert('Đã trả lại hồ sơ yêu cầu bổ sung chứng từ!')" class="px-4 py-2 bg-rose-50 text-rose-700 border border-rose-200 rounded-xl font-bold text-sm">Trả lại hồ sơ</button>
              <button onclick="alert('Đã chuyển phiếu chi tới Hộp duyệt Ban Giám đốc!')" class="px-5 py-2 bg-blue-600 text-white rounded-xl font-bold text-sm">Chuyển Ban Giám đốc duyệt</button>
            </div>
          </div>
        </div>
      `;
    }

    // 18. HỘP DUYỆT BAN GIÁM ĐỐC
    function renderApprovalBoxView() {
      return `
        <div class="space-y-6">
          <div>
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Hộp duyệt chi - Ban Giám đốc</h2>
            <p class="text-sm text-slate-500 mt-1">Phê duyệt các khoản chi hoạt động, thù lao giảng dạy và hợp đồng kinh tế theo thẩm quyền</p>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
            <div class="border-b pb-4">
              <span class="text-blue-600 font-bold font-mono text-xs">PDC-2026-11-001 • Luồng A</span>
              <h3 class="text-lg font-bold text-slate-900 mt-1">Chi thù lao giảng dạy các lớp Khiêu vũ & Aerobic đợt cuối tháng 10/2026</h3>
              <p class="text-slate-500 text-xs mt-0.5">Phòng Văn hóa trình • Số tiền: <strong class="text-rose-600 font-mono text-base">50.814.000 đ</strong></p>
            </div>

            <div class="p-4 bg-emerald-50 rounded-xl text-emerald-900 text-sm space-y-1">
              <strong>Ý kiến kiểm soát chi của Kế toán:</strong>
              <p class="text-xs">Hồ sơ đầy đủ bảng kê cuối khóa có chữ ký điện tử của các giáo viên và bảng khấu trừ thuế TNCN 10% theo quy định.</p>
            </div>

            <div>
              <label class="block text-slate-700 font-bold uppercase text-xs mb-1">Ý kiến chỉ đạo của Ban Giám đốc:</label>
              <textarea rows="2" placeholder="Nhập ý kiến chỉ đạo nếu có..." class="w-full border border-slate-300 rounded-xl p-3 text-sm outline-none focus:border-blue-600"></textarea>
            </div>

            <div class="flex justify-end space-x-2 pt-2 border-t">
              <button onclick="alert('Đã từ chối chi!')" class="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold rounded-xl border border-rose-200 transition text-sm">Từ chối</button>
              <button onclick="alert('Đã trả lại hồ sơ yêu cầu giải trình thêm!')" class="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold rounded-xl border border-amber-200 transition text-sm">Trả lại</button>
              <button onclick="alert('Ban Giám đốc đã ĐỒNG Ý phê duyệt chi!')" class="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-xs transition text-sm">Đồng ý phê duyệt</button>
            </div>
          </div>
        </div>
      `;
    }

    // 19. SỔ HỢP ĐỒNG KINH TẾ (MỚI BỔ SUNG ĐẦY ĐỦ)
    function renderContractsView() {
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Sổ Hợp đồng Kinh tế, Dự toán & Công nợ</h2>
              <p class="text-sm text-slate-500 mt-1">Theo dõi các đợt giải ngân hợp đồng, số dư dự toán năm và danh sách công nợ sắp đến hạn</p>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <table class="w-full text-left text-sm">
              <thead class="bg-slate-50 text-slate-600 uppercase font-bold border-b border-slate-200">
                <tr><th class="p-4">Số HĐ</th><th class="p-4">Tên gói / Đối tác</th><th class="p-4 text-right">Tổng giá trị</th><th class="p-4 text-right">Đã thanh toán</th><th class="p-4 text-right">Còn lại</th><th class="p-4">Đợt</th><th class="p-4">Hạn thanh toán</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-4 font-mono font-bold text-blue-600">HDBT-2026/09</td>
                  <td class="p-4 font-medium">Bảo trì máy lạnh Hội trường<br><span class="text-slate-400 text-xs">Cơ điện lạnh Đông Nam</span></td>
                  <td class="p-4 text-right font-mono font-bold text-slate-900">55.000.000 đ</td>
                  <td class="p-4 text-right font-mono text-emerald-600 font-bold">36.500.000 đ</td>
                  <td class="p-4 text-right font-mono text-rose-600 font-bold">18.500.000 đ</td>
                  <td class="p-4"><span class="badge-blue px-2.5 py-0.5 rounded-full text-xs font-bold">Đợt 2/2</span></td>
                  <td class="p-4 text-slate-600 font-bold text-xs">15/11/2026 (Còn 11 ngày)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // 20. HỒ SƠ CBCC
    function renderCbccListView() {
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Hồ sơ Cán bộ, Công chức & Người lao động (CBCC)</h2>
              <p class="text-sm text-slate-500 mt-1">Quản lý lý lịch 8 mục chuẩn, quá trình công tác, lương, hợp đồng và chứng thư số</p>
            </div>
            <button onclick="alert('Đang xuất toàn bộ file lý lịch 2C PDF...')" class="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition">
              Xuất file lý lịch PDF
            </button>
          </div>

          <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center space-x-4">
            <div class="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-lg">
              VT
            </div>
            <div>
              <h3 class="text-base font-bold text-slate-900">Vũ Quốc Thái</h3>
              <p class="text-xs text-slate-500">Giám đốc Cung Văn hóa Lao động TP.HCM • Ngạch: Chuyên viên chính (01.002)</p>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <div class="flex border-b border-slate-200 text-sm font-bold">
              <button class="py-2.5 px-4 border-b-2 border-blue-600 text-blue-600">1. Thông tin hồ sơ (8 Mục)</button>
              <button class="py-2.5 px-4 text-slate-500 hover:text-slate-800">2. Thông tin khác</button>
              <button class="py-2.5 px-4 text-slate-500 hover:text-slate-800">3. Lịch sử chỉnh sửa</button>
              <button class="py-2.5 px-4 text-slate-500 hover:text-slate-800">4. Tài liệu đính kèm (4)</button>
              <button class="py-2.5 px-4 text-slate-500 hover:text-slate-800">5. Đã ký số (Ban Cơ yếu)</button>
            </div>

            <div class="space-y-2.5 text-sm">
              <div class="p-4 bg-slate-50 rounded-xl"><strong class="text-slate-900 block font-bold mb-1">Mục 1: Sơ lược lý lịch</strong><span class="text-slate-600 text-xs">Sinh ngày: 15/08/1978 • Dân tộc: Kinh • CCCD: 079078001234 • Quê quán: TP.HCM</span></div>
              <div class="p-4 bg-slate-50 rounded-xl"><strong class="text-slate-900 block font-bold mb-1">Mục 2: Quá trình công tác</strong><span class="text-slate-600 text-xs">2020 - Nay: Giám đốc CVHLĐ • 2012 - 2019: Phó Ban Tuyên giáo LĐLĐ TP.HCM</span></div>
              <div class="p-4 bg-slate-50 rounded-xl"><strong class="text-slate-900 block font-bold mb-1">Mục 3: Quá trình đào tạo bồi dưỡng</strong><span class="text-slate-600 text-xs">Thạc sĩ Quản lý Văn hóa • Cao cấp Lý luận Chính trị</span></div>
              <div class="p-4 bg-slate-50 rounded-xl"><strong class="text-slate-900 block font-bold mb-1">Mục 4: Khen thưởng, kỷ luật</strong><span class="text-slate-600 text-xs">Bằng khen Thủ tướng Chính phủ (2023) • Kỷ luật: Không</span></div>
              <div class="p-4 bg-slate-50 rounded-xl"><strong class="text-slate-900 block font-bold mb-1">Mục 5: Quá trình lương</strong><span class="text-slate-600 text-xs">Bậc 6 - Hệ số 5.76 • Phụ cấp chức vụ lãnh đạo 0.8</span></div>
            </div>
          </div>
        </div>
      `;
    }

    // 21. KPI
    function renderKpiView() {
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Đánh giá Hiệu quả Công việc (KPI)</h2>
              <p class="text-sm text-slate-500 mt-1">Nhiệm vụ thường xuyên & Nhiệm vụ đột xuất (03 ngày); Đánh giá 5 mức % và Xếp loại cuối quý</p>
            </div>
            <span class="badge-blue px-3.5 py-1.5 rounded-full font-bold text-xs">Kỳ: Quý 4/2026</span>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h3 class="font-bold text-slate-900 text-base">Đánh giá sản phẩm công việc (Khối Văn phòng - 5 mức chuẩn):</h3>
            <div class="space-y-2.5 text-sm">
              <label class="p-3.5 rounded-xl border border-blue-500 bg-blue-50 flex items-start space-x-3 cursor-pointer">
                <input type="radio" name="kpi_lvl" checked class="mt-0.5">
                <div>
                  <strong class="text-slate-900">100% - Bảo đảm đúng chủ trương, yêu cầu, có tính khả thi, được chấp nhận ngay hoặc chỉ phải hoàn thiện về kỹ thuật, thể thức</strong>
                </div>
              </label>
              <label class="p-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 flex items-start space-x-3 cursor-pointer">
                <input type="radio" name="kpi_lvl" class="mt-0.5">
                <span class="text-slate-700">75% - Cơ bản đáp ứng yêu cầu, phải hoàn thiện chỉnh sửa một số nội dung nhưng không ảnh hưởng nội dung cốt lõi</span>
              </label>
              <label class="p-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 flex items-start space-x-3 cursor-pointer">
                <input type="radio" name="kpi_lvl" class="mt-0.5">
                <span class="text-slate-700">50% - Chưa đáp ứng đầy đủ yêu cầu, ảnh hưởng đến chất lượng hoặc hiệu quả thực hiện</span>
              </label>
            </div>

            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-sm">
              <div class="flex justify-between font-bold text-base">
                <span>Tổng hợp điểm xếp loại cá nhân:</span>
                <span class="text-blue-700 font-mono text-lg">94 / 100 Điểm</span>
              </div>
              <div class="text-xs text-slate-500">Phần 1 Tiêu chí chung: 29/30đ • Phần 2 Kết quả sản phẩm nhiệm vụ: 65/70đ</div>
              <div class="pt-2 flex justify-between items-center font-bold text-emerald-800">
                <span>Xếp loại đề xuất:</span>
                <span class="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs">Hoàn thành xuất sắc nhiệm vụ (HTXSNV ≥ 90đ)</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 22. DANH MỤC CƠ SỞ & NGUỒN KINH PHÍ (MỚI BỔ SUNG ĐẦY ĐỦ)
    function renderCategoriesView() {
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Danh mục Cơ sở, Dịch vụ & Nguồn Kinh phí</h2>
              <p class="text-sm text-slate-500 mt-1">Quản lý 7 cơ sở, tiền tố SKU eShop (TS-, CS1-..), dịch vụ và nguồn ngân sách</p>
            </div>
            <button onclick="alert('Mở form thêm mới danh mục')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition shadow-xs">
              + Thêm danh mục mới
            </button>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div class="p-4 border-b border-slate-100 font-bold text-sm text-slate-700">Danh mục 7 Cơ sở trực thuộc</div>
            <table class="w-full text-left text-sm">
              <thead class="bg-slate-50 text-slate-600 uppercase font-bold border-b border-slate-200">
                <tr><th class="p-4">Mã</th><th class="p-4">Tên cơ sở</th><th class="p-4">Địa chỉ hoạt động</th><th class="p-4">Tiền tố eShop</th><th class="p-4 text-center">Trạng thái</th><th class="p-4 text-right">Thao tác</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-4 font-bold text-blue-600">TS</td>
                  <td class="p-4 font-bold text-slate-900">Trụ sở chính</td>
                  <td class="p-4 text-slate-500 text-xs">55B Nguyễn Thị Minh Khai, P. Bến Thành, Q.1</td>
                  <td class="p-4 font-mono font-bold text-amber-700 bg-amber-50 rounded">TS-*</td>
                  <td class="p-4 text-center"><span class="badge-green px-3 py-1 rounded-full font-bold text-xs">Hoạt động</span></td>
                  <td class="p-4 text-right"><button onclick="openCancelModal('Ngừng dùng cơ sở', 'Trụ sở chính', (r) => alert('Đã ngừng dùng: ' + r))" class="text-rose-600 font-bold text-xs hover:underline">Ngừng dùng</button></td>
                </tr>
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-4 font-bold text-blue-600">CS1</td>
                  <td class="p-4 font-bold text-slate-900">Cơ sở 1 (CLB Thể thao & Khiêu vũ)</td>
                  <td class="p-4 text-slate-500 text-xs">01 Huyền Trân Công Chúa, Q.1</td>
                  <td class="p-4 font-mono font-bold text-amber-700 bg-amber-50 rounded">CS1-*</td>
                  <td class="p-4 text-center"><span class="badge-green px-3 py-1 rounded-full font-bold text-xs">Hoạt động</span></td>
                  <td class="p-4 text-right"><button onclick="openCancelModal('Ngừng dùng cơ sở', 'Cơ sở 1', (r) => alert('Đã ngừng dùng: ' + r))" class="text-rose-600 font-bold text-xs hover:underline">Ngừng dùng</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // 23. ÁNH XẠ TÀI KHOẢN & THAM SỐ (MỚI BỔ SUNG ĐẦY ĐỦ)
    function renderSystemParamsView() {
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Ánh xạ Tài khoản Kế toán & Tham số Hệ thống</h2>
              <p class="text-sm text-slate-500 mt-1">Cấu hình tài khoản đối ứng MISA, tỷ lệ thuế, giờ chốt sổ 21:00 và hạn mức phê duyệt</p>
            </div>
            <button onclick="alert('Đã lưu cấu hình tham số hệ thống!')" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition shadow-xs">
              Lưu thiết lập
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <strong class="text-slate-900 block text-base font-bold">Thời gian khóa sổ & Tỷ lệ Thuế</strong>
              <div class="space-y-3 text-sm">
                <div>
                  <label class="text-slate-600 block text-xs mb-1 font-medium">Giờ tự động chốt sổ ngày (21:00):</label>
                  <input type="time" value="21:00" class="border border-slate-300 p-2.5 rounded-xl font-bold text-slate-900">
                </div>
                <div>
                  <label class="text-slate-600 block text-xs mb-1 font-medium">Thuế TNCN vãng lai giáo viên (%):</label>
                  <input type="number" value="10" class="border border-slate-300 p-2.5 rounded-xl font-bold w-24"> %
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <strong class="text-slate-900 block text-base font-bold">Phân quyền hạn mức duyệt chi</strong>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between p-3 bg-slate-50 rounded-xl"><span>Trưởng phòng / Cơ sở:</span><strong class="text-blue-700">Tối đa 20.000.000 đ</strong></div>
                <div class="flex justify-between p-3 bg-slate-50 rounded-xl"><span>Phó Giám đốc phụ trách:</span><strong class="text-blue-700">Tối đa 100.000.000 đ</strong></div>
                <div class="flex justify-between p-3 bg-slate-50 rounded-xl"><span>Giám đốc Cung Văn hóa:</span><strong class="text-emerald-700">Không giới hạn</strong></div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 24. NHẬT KÝ THAO TÁC & AUDIT (MỚI BỔ SUNG ĐẦY ĐỦ)
    function renderAuditLogView() {
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Người dùng & Nhật ký Hệ thống (Audit Log)</h2>
              <p class="text-sm text-slate-500 mt-1">Lưu vết thao tác người dùng và nhật ký kết nối đồng bộ phần mềm bên ngoài</p>
            </div>
            <button onclick="alert('Mở form tạo tài khoản mới')" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition shadow-xs">
              + Tạo tài khoản
            </button>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div class="p-4 border-b border-slate-100 font-bold text-sm text-slate-700">Nhật ký đồng bộ với phần mềm bên ngoài</div>
            <table class="w-full text-left text-sm">
              <thead class="bg-slate-50 text-slate-600 uppercase font-bold border-b border-slate-200">
                <tr><th class="p-4">Thời điểm</th><th class="p-4">Phần mềm ngoài</th><th class="p-4">Sự kiện</th><th class="p-4 text-center">Trạng thái</th><th class="p-4">Chi tiết kỹ thuật</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-4 font-mono text-slate-500 text-xs">04/11/2026 14:41</td>
                  <td class="p-4 font-bold text-slate-900">MISA eShop</td>
                  <td class="p-4">Đẩy mặt hàng mã lớp SKU: TS-KV01</td>
                  <td class="p-4 text-center"><span class="badge-green px-3 py-1 rounded-full font-bold text-xs">Thành công</span></td>
                  <td class="p-4 font-mono text-xs text-slate-500">HTTP 200 OK</td>
                </tr>
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-4 font-mono text-slate-500 text-xs">04/11/2026 14:30</td>
                  <td class="p-4 font-bold text-slate-900">Hóa đơn meInvoice</td>
                  <td class="p-4">Lấy hóa đơn đã phát hành theo ngày</td>
                  <td class="p-4 text-center"><span class="badge-green px-3 py-1 rounded-full font-bold text-xs">Thành công</span></td>
                  <td class="p-4 font-mono text-xs text-slate-500">Đã nhận 12 hóa đơn</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // 25. BÁO CÁO THU CHI
    function renderReportsView() {
      return `
        <div class="space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Báo cáo & Thống kê Tài chính</h2>
              <p class="text-sm text-slate-500 mt-1">Bảng kê thu tiền ngày, báo cáo tuần, tháng toàn hệ thống</p>
            </div>
            <div class="flex space-x-2">
              <button onclick="alert('Đang xuất file Excel...')" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold transition">Xuất Excel</button>
              <button onclick="alert('Đang xuất file PDF...')" class="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-sm font-bold transition">Xuất PDF</button>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <table class="w-full text-left text-sm">
              <thead class="bg-slate-50 text-slate-600 uppercase font-bold border-b border-slate-200">
                <tr>
                  <th class="p-4">Ngày</th>
                  <th class="p-4">Biểu mẫu báo cáo</th>
                  <th class="p-4 text-center">Số đơn</th>
                  <th class="p-4 text-right">Tiền mặt tại quầy</th>
                  <th class="p-4 text-right">Chuyển khoản VietQR</th>
                  <th class="p-4 text-right">Tổng thực thu</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50 transition">
                  <td class="p-4 font-bold text-slate-900">04/11/2026</td>
                  <td class="p-4 font-medium">Bảng kê thu tiền quầy & trực tuyến ngày</td>
                  <td class="p-4 text-center font-bold text-blue-600">12</td>
                  <td class="p-4 text-right font-mono">8.600.000 đ</td>
                  <td class="p-4 text-right font-mono">13.200.000 đ</td>
                  <td class="p-4 text-right font-mono font-bold text-emerald-700 text-base">21.800.000 đ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // Khởi chạy
