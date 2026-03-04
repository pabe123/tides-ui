import figma from "@figma/code-connect";
import { BuyButton } from "./BuyButton";

/**
 * Code Connect for Primary Button ("Buy Tides")
 * Node: 581:7453
 */
figma.connect(
  BuyButton,
  "https://www.figma.com/design/wn1aKAukbTj44YhydxQPsP?node-id=581-7453",
  {
    props: {
      label: figma.string("Label"),
      state: figma.enum("State", {
        Default: "Default",
        ":active": ":active",
      }),
    },
    example: ({ label }) => <BuyButton label={label} />,
  }
);
