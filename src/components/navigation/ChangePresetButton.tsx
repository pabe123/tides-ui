import { Tooltip } from "./Tooltip";

type ChangePresetButtonProps = {
  direction: "previous" | "next";
  onClick?: () => void;
};

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <path
      d="M12.5 15L7.5 10L12.5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <path
      d="M7.5 5L12.5 10L7.5 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function ChangePresetButton({ direction, onClick }: ChangePresetButtonProps) {
  const label = direction === "previous" ? "Previous" : "Next";

  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="relative flex items-center justify-center rounded-full h-10 w-5 hover:bg-[rgba(27,37,64,0.06)] active:bg-[rgba(27,37,64,0.10)] transition-colors group focus:outline-none overflow-hidden text-[#1b2540]"
    >
      {direction === "previous" ? <ChevronLeft /> : <ChevronRight />}
      <Tooltip
        label={label}
        className="absolute left-1/2 -translate-x-1/2 top-[49px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
      />
    </button>
  );
}
