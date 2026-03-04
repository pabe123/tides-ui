import { Tooltip } from "./Tooltip";

type LunacyLogoButtonProps = {
  onClick?: () => void;
};

export function LunacyLogoButton({ onClick }: LunacyLogoButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative rounded-[4px] size-11 group focus:outline-none"
      aria-label="Browse Rooms"
    >
      {/* Neumorphic background */}
      <span className="absolute inset-0 rounded-[4px] shadow-[0px_0px_12px_8px_rgba(162,177,198,0.15),4px_4px_4px_0px_rgba(162,177,198,0.25),2px_2px_2px_-2px_rgba(162,177,198,0.20),-4px_-4px_6px_0px_rgba(255,255,255,0.80),-1px_-1px_1px_-1px_rgba(255,255,255,0.90)] backdrop-blur-[1px]" />
      {/* Logo mark placeholder – replace src with actual SVG asset */}
      <span className="absolute left-[10px] top-1 flex size-9 items-center justify-center">
        <svg width="24" height="36" viewBox="0 0 24 36" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="10" fill="#7804FF" opacity="0.85" />
          <circle cx="12" cy="12" r="6" fill="#fff" opacity="0.5" />
        </svg>
      </span>
      {/* Tooltip on hover */}
      <Tooltip
        label="Browse Rooms"
        className="absolute left-1/2 -translate-x-1/2 top-[52px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
      />
    </button>
  );
}
