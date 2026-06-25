'use client';

import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className={`flex flex-col gap-2 ${className.includes('grid') ? className : ''}`.trim()}>
      {label && <label className="text-sm font-semibold text-slate-800">{label}</label>}
      <input
        className={`rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-[#325b31] focus:ring-2 focus:ring-[#325b31]/20 ${
          error ? 'border-rose-500' : ''
        }`}
        {...props}
      />
      {error && <p className="text-xs text-rose-600">{error}</p>}
    </div>
  );
}
