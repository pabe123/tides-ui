import figma from "@figma/code-connect";
import { PresetDropdown } from "./PresetDropdown";

/**
 * Code Connect for Preset Dropdown
 * Node: 593:437 (component), instance 593:445
 */
figma.connect(
  PresetDropdown,
  "https://www.figma.com/design/wn1aKAukbTj44YhydxQPsP?node-id=593-438",
  {
    props: {
      value: figma.string("Preset Name"),
      state: figma.enum("State", {
        Default: "Default",
        Hover: "Hover",
      }),
    },
    example: ({ value }) => <PresetDropdown value={value} />,
  }
);
