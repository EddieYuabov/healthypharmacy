'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  error?: string;
  options: SelectOption[];
  name: string;
  value: string;
  onChange: (value: string, name: string) => void;
  placeholder?: string;
}

export function Select({
  label,
  error,
  options,
  name,
  value,
  onChange,
  placeholder = 'Select an option',
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = options.find((option) => option.value === value)?.label;

  return (
    <div className="flex flex-col gap-2" ref={containerRef}>
      {label && <label className="text-sm font-semibold text-slate-800">{label}</label>}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-slate-900 shadow-sm transition focus:border-[#325b31] focus:ring-2 focus:ring-[#325b31]/20 ${
            error ? 'border-rose-500' : ''
          }`}
        >
          <span className={selectedLabel ? '' : 'text-slate-400'}>
            {selectedLabel || placeholder}
          </span>
          <ChevronDown
            size={18}
            className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="absolute left-0 top-full z-20 mt-2 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft-lg">
            <div className="max-h-60 overflow-y-auto py-1">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value, name);
                    setIsOpen(false);
                  }}
                  className={`block w-full px-4 py-2.5 text-left text-sm transition hover:bg-slate-50 ${
                    option.value === value ? 'font-semibold text-[#325b31]' : 'text-slate-700'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {error && <p className="text-xs text-rose-600">{error}</p>}
    </div>
  );
}
