# HỆ THỐNG QUẢN TRỊ TỔNG THỂ (HTQT)
## CUNG VĂN HÓA LAO ĐỘNG TP.HCM — BẢN THIẾT KẾ GIAO DIỆN CHUẨN

Hệ thống Quản trị Tổng thể (HTQT) được thiết kế chuyên biệt phục vụ công tác điều hành, quản lý chiêu sinh, tài chính, thù lao giáo viên, đề xuất chi, nhân sự CBCC và đánh giá KPI tại **Cung Văn hóa Lao động TP.HCM** (bao gồm Trụ sở chính và 6 cơ sở trực thuộc).

---

## 🚀 ĐẶC ĐIỂM KỸ THUẬT & TỐI ƯU HÓA (GIT READY)

- **Kiến trúc Zero-Build**: Sử dụng thuần HTML5, CSS3 và Vanilla JavaScript.
- **Khởi chạy trực tiếp**: Có thể mở ngay bằng cách click đúp vào file `index.html` trên trình duyệt (Chrome, Edge, Firefox, Cốc Cốc) mà không cần cài đặt Node.js hay chạy server nền.
- **Tương thích Git chuẩn**: Cấu trúc mã nguồn đã được module hóa sạch sẽ, tách biệt logic, giao diện và dữ liệu giúp việc xem Git Diff, Merge Request và kiểm soát phiên bản thuận tiện.
- **Bố cục Full-Width Fluid (100% màn hình)**: Trải rộng toàn màn hình, không bị co hẹp hay để thừa khoảng trống trên các màn hình làm việc lớn (1080p, 2K, Ultrawide).
- **Phông chữ chuẩn văn phòng**: Tích hợp Google Font **Roboto** toàn hệ thống, tăng cường độ tương phản và cỡ chữ (14.5px - 15px) tối ưu cho người dùng nghiệp vụ.
- **Tuân thủ quy chuẩn kiểm toán**: Không sử dụng mã kỹ thuật (`MH-xx`, `BC-xx`), xóa mềm kèm lý do hủy lưu vết nhật ký (`audit_log`).

---

## 📁 CẤU TRÚC THƯ MỤC DỰ ÁN

```text
UI_HTQT/
├── index.html          # Khung trang chính (Header, Sidebar, Content layout, Modal)
├── css/
│   └── style.css       # Quy chuẩn giao diện, Roboto font, Webkit scrollbar, badge trạng thái
├── js/
│   ├── data.js         # Danh mục 25 phân hệ nghiệp vụ, phân quyền vai trò (Role-based)
│   ├── screens.js      # Bộ 25 màn hình nghiệp vụ chi tiết (Render functions)
│   └── app.js          # Bộ điều khiển trung tâm (Routing, Đổi cơ sở, Đổi vai trò, Modal hủy)
├── doc_content.txt     # Bản trích xuất tài liệu yêu cầu nghiệp vụ gốc
├── .gitignore          # Cấu hình bỏ qua các file tạm, file hệ điều hành
└── README.md           # Tài liệu hướng dẫn dự án
```

---

## 📋 DANH MỤC 25 PHÂN HỆ NGHIỆP VỤ

### 1. Tổng quan & Báo cáo
1. **Tổng quan điều hành**: Dashboard chỉ số doanh thu hợp nhất, phân bổ 7 cơ sở, tỷ lệ lấp đầy sĩ số, cảnh báo chi trả.
2. **Báo cáo & Thống kê thu chi**: Bảng kê thu tiền ngày, xuất báo cáo tuần/tháng sang Excel, PDF.

### 2. Đào tạo & Học vụ
3. **Kế hoạch mở lớp & Chiêu sinh**: Lập lớp học, sĩ số, lịch học, học phí, đồng bộ mặt hàng sang MISA eShop.
4. **Quầy ghi danh & Bán vé**: Thu tiền mặt / POS / VietQR, in biên nhận quầy, cấp mã dải thẻ giấy.
5. **Cổng đăng ký trực tuyến (VietQR)**: Cổng đăng ký khóa học, thanh toán tự động qua mã VietQR động.
6. **Điểm danh lớp & Học viên**: Danh sách lớp full-width, kiểm tra số thẻ, điểm danh có mặt/vắng, ghi chú học viên học thử/người lạ, báo dạy thay.
7. **Chuyển lớp & Bảo lưu học phí**: Quy trình tiếp nhận yêu cầu, luân chuyển phê duyệt và tự động bù trừ học phí.
8. **Quản lý dải thẻ giấy**: Xuất kho, giao dải serial cho nhân viên quầy, kiểm kê tồn kho và lập biên bản hủy hỏng.
9. **Biểu giá niêm yết theo Quyết định**: Quản lý bảng giá chuẩn theo từng cơ sở và quyết định ban hành.

### 3. Tài chính & Đối soát
10. **Kết ca & Nộp quỹ hàng ngày**: Đối soát tổng tiền mặt/chuyển khoản từng ca, in biên bản nộp tiền thủ quỹ.
11. **Đối soát 3 bên (Đơn - Hóa đơn - Tiền)**: Khớp nối 3 nguồn dữ liệu: Đơn hàng, Hóa đơn điện tử và Tiền vào tài khoản ngân hàng.
12. **Nhập sao kê ngân hàng**: Import sao kê tự động hoặc upload file Excel, phân loại giao dịch thu chi.
13. **Chốt sổ ngày (Khóa sổ 21h00)**: Quy trình tự động đóng sổ kế toán ngày, ngăn chặn sửa đổi chứng từ sau 21h.
14. **Chứng từ xuất MISA Kế toán**: Kết xuất và đồng bộ phiếu thu, phiếu chi, doanh thu sang phần mềm MISA SME/AMIS.

### 4. Thù lao & Chi phí
15. **Bảng kê thù lao giáo viên**: Tính thù lao theo tỷ lệ % hợp đồng, khấu trừ thuế TNCN (10%), lập lệnh thanh toán chuyển khoản.
16. **Hồ sơ giáo viên & Hợp đồng**: Quản lý thông tin HLV/giáo viên, chuyên môn, lịch sử hợp đồng và tỷ lệ chia sẻ.
17. **Đề xuất chi (Luồng A & Luồng B)**: Tạo phiếu đề xuất chi thường xuyên (Luồng A) hoặc chi đột xuất/dự án lớn (Luồng B).
18. **Kiểm soát chi & Thẩm tra hồ sơ**: Kế toán thanh toán rà soát chứng từ, dự toán và tính hợp lệ trước khi trình duyệt.
19. **Hộp duyệt Ban Giám đốc**: Giao diện duyệt chi tập trung dành cho Ban Giám đốc, hỗ trợ ký duyệt số.
20. **Sổ hợp đồng kinh tế & Dự toán**: Quản lý tiến độ giải ngân, nghiệm thu các hợp đồng thuê mướn, mua sắm, sửa chữa.

### 5. Nhân sự & Đánh giá KPI
21. **Hồ sơ Cán bộ, Công chức (CBCC)**: Quản lý đầy đủ 5 Tab hồ sơ và 8 phần chi tiết theo quy định quản lý nhân sự Nhà nước.
22. **Quản lý nhiệm vụ & Đánh giá KPI**: Thiết lập mục tiêu, chấm điểm tự đánh giá và xếp loại KPI theo 5 mức chuẩn %.

### 6. Cấu hình hệ thống
23. **Danh mục cơ sở & Dịch vụ**: Cấu hình mạng lưới 7 cơ sở (Trụ sở chính & CS1 - CS6) cùng hệ sinh thái dịch vụ.
24. **Ánh xạ tài khoản & Tham số**: Cấu hình tài khoản kế toán, tài khoản ngân hàng và tham số tự động.
25. **Nhật ký thao tác & Tài khoản**: Audit log ghi vết 100% hành vi thêm, sửa, hủy và quản lý phân quyền người dùng.

---

## 🛠️ HƯỚNG DẪN ĐẨY LÊN GITHUB / GITLAB

Mở terminal tại thư mục `d:\UI_HTQT` và thực hiện các lệnh sau:

```bash
# 1. Khởi tạo Git repository (nếu chưa có)
git init

# 2. Thêm tất cả các file đã được tối ưu vào staging
git add .

# 3. Tạo commit đầu tiên
git commit -m "feat: Toi uu hoa giao dien HTQT CVHLD - Modular HTML/CSS/JS full width"

# 4. Liên kết với remote repository của bạn
git remote add origin https://github.com/<username>/<repo-name>.git

# 5. Đẩy code lên nhánh chính
git branch -M main
git push -u origin main
```

---
*Phiên bản thiết kế: HTQT CVHLD v1.0 • Cung Văn hóa Lao động TP.HCM*

