import React, { useState } from 'react';
import { ShieldCheck, Smartphone, X } from 'lucide-react';

interface TwoFactorModalProps {
  isOpen: boolean;
  roleName: string;
  onClose: () => void;
  onSuccess: () => void;
}

export const TwoFactorModal: React.FC<TwoFactorModalProps> = ({
  isOpen,
  roleName,
  onClose,
  onSuccess,
}) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);

  if (!isOpen) return null;

  const handleChange = (index: number, val: string) => {
    if (val.length > 1) val = val[val.length - 1];
    const newCode = [...code];
    newCode[index] = val;
    setCode(newCode);

    // Auto focus next input
    if (val && index < 5) {
      const nextInput = document.getElementById(`2fa-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.getElementById(`2fa-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full border border-slate-200 overflow-hidden text-center p-6 animate-in fade-in zoom-in-95 duration-150 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 rounded-lg p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl mx-auto flex items-center justify-center mb-4">
          <ShieldCheck className="w-8 h-8" />
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-1">Xác thực 2 bước (2FA)</h3>
        <p className="text-xs text-slate-500 mb-4">
          Vai trò <span className="font-semibold text-blue-600">{roleName}</span> yêu cầu lớp bảo mật bổ sung theo quy chuẩn bảo mật tài chính CVHLĐ.
        </p>

        <div className="flex items-center justify-center space-x-1.5 text-xs text-slate-600 bg-slate-100 py-1.5 px-3 rounded-lg mb-6">
          <Smartphone className="w-4 h-4 text-slate-500" />
          <span>Mã OTP đã gửi qua ứng dụng Authenticator / SMS</span>
        </div>

        <form onSubmit={handleVerify}>
          <div className="flex justify-center gap-2 mb-6">
            {code.map((digit, idx) => (
              <input
                key={idx}
                id={`2fa-input-${idx}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                className="w-11 h-12 text-center text-lg font-bold border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition"
              />
            ))}
          </div>

          <div className="space-y-2">
            <button
              type="submit"
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl shadow-md shadow-blue-600/30 transition cursor-pointer"
            >
              Xác nhận đăng nhập
            </button>
            <button
              type="button"
              onClick={() => setCode(['1', '2', '3', '4', '5', '6'])}
              className="text-xs text-blue-600 hover:underline pt-2 block mx-auto cursor-pointer"
            >
              (Bấm vào đây để điền nhanh mã demo 123456)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

