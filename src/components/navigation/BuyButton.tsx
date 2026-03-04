type BuyButtonProps = {
  label?: string;
  onClick?: () => void;
};

export function BuyButton({ label = "Buy Tides", onClick }: BuyButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative flex flex-col items-center justify-center p-[2px] rounded-full w-[99px] cursor-pointer focus:outline-none active:scale-95 transition-transform"
      style={{
        boxShadow:
          "0px 4px 16px 0px rgba(120,4,255,0.25), 0px 0px 4px 0px rgba(241,0,255,0.15)",
        background:
          "conic-gradient(from 90deg, #627fff -8.65%, #627fff 7.33%, #9571ff 16.16%, #c864ff 25%, #e282d1 37.5%, #fba0a3 50%, #e282d1 62.5%, #c864ff 75%, #9572ff 83.17%, #627fff 91.35%, #627fff 107.33%)",
      }}
    >
      <span className="bg-[#1b2540] flex items-center justify-center overflow-hidden px-5 py-2 rounded-full w-full">
        <span className="text-white text-xs font-medium font-['Geist',sans-serif] whitespace-nowrap leading-4">
          {label}
        </span>
      </span>
    </button>
  );
}
