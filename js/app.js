/**
 * App Controller - Hệ thống Quản trị Tổng thể (HTQT)
 * Cung Văn hóa Lao động TP.HCM
 */

let activeScreen = 'dashboard';
let activeRole = 'ALL';
let cancelCallback = null;

function changeRole(role) {
      activeRole = role;
      renderSidebar();
    }

    function changeFacility(fac) {
      renderMainContent();
    }

    function selectScreen(id) {
      activeScreen = id;
      renderSidebar();
      renderMainContent();
    }

    function renderSidebar() {
      const navEl = document.getElementById('sidebarNav');
      let html = '';

      NAVIGATION_ITEMS.forEach(group => {
        const accessibleItems = group.items.filter(item => item.roles.includes('ALL') || item.roles.includes(activeRole));
        if (accessibleItems.length === 0) return;

        html += `<div class="space-y-1">
          <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">${group.group}</div>`;

        accessibleItems.forEach(item => {
          const isActive = item.id === activeScreen;
          const activeClass = isActive ? 'nav-item-active' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900';
          html += `
            <button onclick="selectScreen('${item.id}')" class="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium transition cursor-pointer text-left ${activeClass}">
              <i data-lucide="${item.icon}" class="w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-500'}"></i>
              <span class="truncate">${item.title}</span>
            </button>
          `;
        });
        html += `</div>`;
      });

      navEl.innerHTML = html;
      lucide.createIcons();
    }

    function openCancelModal(targetName, onConfirm) {
      document.getElementById('cancelTargetName').innerText = targetName;
      document.getElementById('cancelReasonInput').value = '';
      cancelCallback = onConfirm;
      document.getElementById('cancelModal').classList.remove('hidden');
    }
    function closeCancelModal() {
      document.getElementById('cancelModal').classList.add('hidden');
    }
    function confirmCancelAction() {
      const reason = document.getElementById('cancelReasonInput').value.trim();
      if (!reason) {
        alert('Vui lòng nhập lý do hủy theo quy chế bắt buộc!');
        return;
      }
      if (cancelCallback) cancelCallback(reason);
      closeCancelModal();
    }

    // ================= BỘ RENDER NỘI DUNG (ĐỒNG BỘ 100% WIDTH) =================
    function renderMainContent() {
      const el = document.getElementById('innerContainer');
      switch (activeScreen) {
        case 'dashboard': el.innerHTML = renderDashboardView(); break;
        case 'reports': el.innerHTML = renderReportsView(); break;
        case 'classes': el.innerHTML = renderClassesView(); break;
        case 'counter': el.innerHTML = renderCounterView(); break;
        case 'online_reg': el.innerHTML = renderOnlineRegView(); break;
        case 'attendance': el.innerHTML = renderAttendanceView(); break;
        case 'class_transfer': el.innerHTML = renderClassTransferView(); break;
        case 'cards': el.innerHTML = renderCardsView(); break;
        case 'pricing': el.innerHTML = renderPricingView(); break;
        case 'shift_close': el.innerHTML = renderShiftCloseView(); break;
        case 'reconcile': el.innerHTML = renderReconcileView(); break;
        case 'bank_statement': el.innerHTML = renderBankStatementView(); break;
        case 'day_lock': el.innerHTML = renderDayLockView(); break;
        case 'accounting_export': el.innerHTML = renderAccountingExportView(); break;
        case 'teacher_payroll': el.innerHTML = renderTeacherPayrollView(); break;
        case 'teachers': el.innerHTML = renderTeachersView(); break;
        case 'expense_request': el.innerHTML = renderExpenseRequestView(); break;
        case 'expense_check': el.innerHTML = renderExpenseCheckView(); break;
        case 'approval_box': el.innerHTML = renderApprovalBoxView(); break;
        case 'contracts': el.innerHTML = renderContractsView(); break;
        case 'cbcc_list': el.innerHTML = renderCbccListView(); break;
        case 'kpi': el.innerHTML = renderKpiView(); break;
        case 'categories': el.innerHTML = renderCategoriesView(); break;
        case 'system_params': el.innerHTML = renderSystemParamsView(); break;
        case 'audit_log': el.innerHTML = renderAuditLogView(); break;
        default: el.innerHTML = renderDashboardView(); break;
      }
      lucide.createIcons();
    }

    // 1. TỔNG QUAN

window.onload = function() {
      renderSidebar();
      renderMainContent();
    };

