import { Tooltip } from "./Tooltip";

type NavButtonProps = {
  icon: React.ReactNode;
  tooltip?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

export function NavButton({
  icon,
  tooltip,
  onClick,
  "aria-label": ariaLabel,
}: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel ?? tooltip}
      className="relative flex items-center justify-center rounded-full size-10 hover:bg-[rgba(27,37,64,0.06)] active:bg-[rgba(27,37,64,0.10)] transition-colors group focus:outline-none"
    >
      <span className="flex items-center justify-center size-5 text-[#1b2540]">
        {icon}
      </span>
      {tooltip && (
        <Tooltip
          label={tooltip}
          className="absolute left-1/2 -translate-x-1/2 top-[49px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        />
      )}
    </button>
  );
}
