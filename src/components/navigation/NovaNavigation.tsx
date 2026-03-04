"use client";

import { useState } from "react";
import { LunacyLogoButton } from "./LunacyLogoButton";
import { BuyButton } from "./BuyButton";
import { NavButton } from "./NavButton";
import { ChangePresetButton } from "./ChangePresetButton";
import { PresetDropdown } from "./PresetDropdown";
import { VolumeMeter } from "./VolumeMeter";

// ── Icons ──────────────────────────────────────────────────────────────────

const SaveIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="6" y="3" width="8" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="6" y="11" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const RandomIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <path d="M3 6h2a6 6 0 0 1 5 2.7M3 14h2a6 6 0 0 0 5-2.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 4l3 2-3 2M14 12l3 2-3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 6a6 6 0 0 1-2 4M17 14a6 6 0 0 0-2-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const GenerateIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="10" r="1.5" fill="currentColor" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M10 2.3v1.4M10 16.3v1.4M2.3 10h1.4M16.3 10h1.4M4.5 4.5l1 1M14.5 14.5l1 1M4.5 15.5l1-1M14.5 5.5l1-1"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
    />
  </svg>
);

const ProfileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ── Component ──────────────────────────────────────────────────────────────

type NovaNavigationProps = {
  preset?: string;
  onPresetChange?: (preset: string) => void;
  onPreviousPreset?: () => void;
  onNextPreset?: () => void;
  onSave?: () => void;
  onRandom?: () => void;
  onGenerate?: () => void;
  onSettings?: () => void;
  onProfile?: () => void;
  onBuy?: () => void;
  volumeL?: number;
  volumeR?: number;
  volume?: number;
  onVolumeChange?: (v: number) => void;
};

export function NovaNavigation({
  preset = "Simple Rise",
  onPresetChange,
  onPreviousPreset,
  onNextPreset,
  onSave,
  onRandom,
  onGenerate,
  onSettings,
  onProfile,
  onBuy,
  volumeL = 0.74,
  volumeR = 0.74,
  volume = 0.87,
  onVolumeChange,
}: NovaNavigationProps) {
  return (
    <nav className="relative flex items-center w-full h-11 px-2">
      {/* Left Panel */}
      <div className="flex items-center gap-3 w-48 shrink-0">
        <LunacyLogoButton />
        <span className="size-1 rounded-full bg-[rgba(27,37,64,0.24)] shrink-0" />
        <BuyButton onClick={onBuy} />
      </div>

      {/* Middle Panel – centered absolutely */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center h-10">
        <NavButton icon={<SaveIcon />} tooltip="Save" onClick={onSave} />
        <ChangePresetButton direction="previous" onClick={onPreviousPreset} />
        <ChangePresetButton direction="next" onClick={onNextPreset} />
        <PresetDropdown value={preset} onChange={onPresetChange} />
        <NavButton icon={<RandomIcon />} tooltip="Random" onClick={onRandom} />
        <NavButton icon={<GenerateIcon />} tooltip="Generate" onClick={onGenerate} />
      </div>

      {/* Right Panel */}
      <div className="ml-auto flex items-center h-10 shrink-0">
        <VolumeMeter
          levelL={volumeL}
          levelR={volumeR}
          volume={volume}
          onVolumeChange={onVolumeChange}
        />
        <NavButton icon={<SettingsIcon />} tooltip="Settings" onClick={onSettings} />
        <NavButton icon={<ProfileIcon />} tooltip="Profile" onClick={onProfile} />
      </div>
    </nav>
  );
}
