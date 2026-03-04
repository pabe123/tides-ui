import figma from "@figma/code-connect";
import { ChangePresetButton } from "./ChangePresetButton";

/**
 * Code Connect for Change Preset Button (prev/next chevrons)
 * Node: 593:211 (COMPONENT_SET)
 */
figma.connect(
  ChangePresetButton,
  "https://www.figma.com/design/wn1aKAukbTj44YhydxQPsP?node-id=593-211",
  {
    props: {
      direction: figma.enum("Property 1", {
        Default: "previous",
        Hover: "next",
      }),
    },
    example: ({ direction }) => (
      <ChangePresetButton direction={direction} />
    ),
  }
);
