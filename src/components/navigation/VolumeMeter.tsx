"use client";

import { useState, useRef, useCallback } from "react";

type VolumeMeterProps = {
  levelL?: number; // 0–1
  levelR?: number; // 0–1
  volume?: number; // 0–1, slider position
  onVolumeChange?: (volume: number) => void;
};

export function VolumeMeter({
  levelL = 0.74,
  levelR = 0.74,
  volume = 0.87,
  onVolumeChange,
}: VolumeMeterProps) {
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      if (!dragging || !trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const raw = (e.clientX - rect.left) / rect.width;
      onVolumeChange?.(Math.min(1, Math.max(0, raw)));
    },
    [dragging, onVolumeChange]
  );

  return (
    <div className="relative flex items-center h-10 w-[136px] pr-10">
      {/* L/R meters */}
      <div className="flex flex-col gap-1 shrink-0">
        {[levelL, levelR].map((level, i) => (
          <div
            key={i}
            className="bg-[rgba(27,37,64,0.08)] h-1.5 rounded-full overflow-hidden w-[116px] shadow-[0px_4px_6px_-4px_rgba(115,115,115,0.05)]"
          >
            <div
              className="h-full bg-[#1b2540] rounded-full"
              style={{ width: `${level * 100}%` }}
            />
          </div>
        ))}
      </div>

      {/* Volume slider thumb */}
      <div
        ref={trackRef}
        className="absolute inset-y-0 left-0 right-10 flex items-center"
        onPointerDown={(e) => {
          setDragging(true);
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (!dragging) return;
          const rect = e.currentTarget.getBoundingClientRect();
          const raw = (e.clientX - rect.left) / rect.width;
          onVolumeChange?.(Math.min(1, Math.max(0, raw)));
        }}
        onPointerUp={() => setDragging(false)}
      >
        <div
          className="absolute h-6 w-1.5 bg-white border border-[rgba(27,37,64,0.16)] rounded-full shadow-[0px_1px_1px_-1px_rgba(35,17,101,0.64),0px_1px_5px_0px_rgba(35,17,101,0.03),0px_2px_3px_0px_rgba(35,17,101,0.06),0px_6px_12px_0px_rgba(27,37,64,0.06)] cursor-grab active:cursor-grabbing"
          style={{ left: `calc(${volume * 100}% - 3px)` }}
        >
          <div className="absolute inset-[-1px] rounded-[inherit] shadow-[inset_0px_-1px_1px_0px_rgba(219,216,255,0.48)] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
