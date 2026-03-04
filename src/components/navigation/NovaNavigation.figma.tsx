import figma from "@figma/code-connect";
import { NovaNavigation } from "./NovaNavigation";

/**
 * Code Connect for Nova Navigation (Tides - Global)
 * Figma file: wn1aKAukbTj44YhydxQPsP
 * Node: 593:1030
 */
figma.connect(
  NovaNavigation,
  "https://www.figma.com/design/wn1aKAukbTj44YhydxQPsP?node-id=593-1030",
  {
    props: {
      preset: figma.string("Preset Name"),
    },
    example: ({ preset }) => (
      <NovaNavigation
        preset={preset}
        onSave={() => {}}
        onPreviousPreset={() => {}}
        onNextPreset={() => {}}
        onRandom={() => {}}
        onGenerate={() => {}}
        onSettings={() => {}}
        onProfile={() => {}}
        onBuy={() => {}}
      />
    ),
  }
);
