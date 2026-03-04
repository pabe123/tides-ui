import figma from "@figma/code-connect";
import { LunacyLogoButton } from "./LunacyLogoButton";

/**
 * Code Connect for Lunacy Logo Button
 * Node: 644:546
 */
figma.connect(
  LunacyLogoButton,
  "https://www.figma.com/design/wn1aKAukbTj44YhydxQPsP?node-id=644-546",
  {
    props: {
      property1: figma.enum("Property 1", {
        Default: "Default",
        Hover: "Hover",
        "After Delay": "After Delay",
      }),
    },
    example: () => <LunacyLogoButton />,
  }
);
