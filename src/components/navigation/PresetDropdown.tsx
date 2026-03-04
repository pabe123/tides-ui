"use client";

import { useState } from "react";

type PresetDropdownProps = {
  value?: string;
  options?: string[];
  onChange?: (value: string) => void;
};

export function PresetDropdown({
  value = "Simple Rise",
  options = ["Simple Rise", "Deep Tide", "Coastal Wave", "Storm Surge"],
  onChange,
}: PresetDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative h-10 w-64">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full h-full flex items-center justify-center rounded-full overflow-hidden hover:bg-[rgba(27,37,64,0.06)] transition-colors focus:outline-none"
      >
        <span className="text-[rgba(27,37,64,0.88)] text-[13px] font-medium font-['Geist',sans-serif] leading-4 tracking-normal">
          {value}
        </span>
      </button>

      {open && (
        <ul className="absolute left-1/2 -translate-x-1/2 top-[44px] bg-white rounded-xl shadow-[0px_8px_24px_0px_rgba(27,37,64,0.12)] py-1 min-w-[200px] z-50">
          {options.map((opt) => (
            <li key={opt}>
              <button
                className="w-full text-left px-4 py-2 text-sm text-[#1b2540] hover:bg-[rgba(27,37,64,0.05)] transition-colors font-['Geist',sans-serif]"
                onClick={() => {
                  onChange?.(opt);
                  setOpen(false);
                }}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
