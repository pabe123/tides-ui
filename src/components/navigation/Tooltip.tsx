type TooltipProps = {
  label?: string;
  className?: string;
};

export function Tooltip({ label = "Label", className }: TooltipProps) {
  return (
    <div
      className={`bg-[#1b2540] flex items-center justify-center overflow-hidden px-2 py-1 rounded-lg shadow-[0px_14px_5px_0px_rgba(27,37,64,0.01),0px_8px_5px_0px_rgba(27,37,64,0.03),0px_3px_3px_0px_rgba(27,37,64,0.06),0px_1px_2px_0px_rgba(27,37,64,0.08)] ${className ?? ""}`}
    >
      <span className="text-white text-xs font-medium font-['Geist',sans-serif] whitespace-nowrap leading-4">
        {label}
      </span>
    </div>
  );
}
