import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface CancelModalProps {
  isOpen: boolean;
  title: string;
  targetName: string;
  onClose: () => void;
  onConfirm: (reason: string) => void;
}

export const CancelModal: React.FC<CancelModalProps> = ({
  isOpen,
  title,
  targetName,
  onClose,
  onConfirm,
}) => {
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason.trim()) {
      setError('Vui lòng nhập lý do hủy (bắt buộc theo quy chế quản trị dữ liệu)');
      return;
    }
    onConfirm(reason);
    setReason('');
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-rose-50/50">
          <div className="flex items-center space-x-2 text-rose-700">
            <AlertTriangle className="w-5 h-5 text-rose-600" />
            <h3 className="font-semibold text-slate-800">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 rounded-lg p-1 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <p className="text-sm text-slate-600">
            Bạn đang yêu cầu <span className="font-semibold text-rose-600">HỦY</span> bản ghi:{' '}
            <span className="font-semibold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
              {targetName}
            </span>
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800">
            <strong>Lưu ý:</strong> Theo quy định HTQT CVHLĐ, dữ liệu nghiệp vụ không bị xóa vĩnh viễn khỏi cơ sở dữ liệu. Thao tác hủy sẽ lưu vết nhật ký và người thực hiện.
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Lý do hủy <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={3}
              value={reason}
              onChange={(e) => {
                setReason(e.target.value);
                if (error) setError('');
              }}
              placeholder="Nhập lý do chi tiết (ví dụ: Học viên yêu cầu hoàn tiền, Nhập sai thông tin, v.v.)..."
              className="w-full text-sm border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 outline-none transition"
              autoFocus
            />
            {error && <p className="text-xs text-rose-600 mt-1">{error}</p>}
          </div>

          <div className="flex justify-end space-x-3 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition"
            >
              Đóng lại
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-xs shadow-rose-600/30 transition"
            >
              Xác nhận Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

