import figma from "@figma/code-connect";
import { NavButton } from "./NavButton";

/**
 * Code Connect for Nav Button (icon button with tooltip)
 * Covers instances: 581:7557, 593:448, 593:582, 593:837, 593:838
 */
figma.connect(
  NavButton,
  "https://www.figma.com/design/wn1aKAukbTj44YhydxQPsP?node-id=581-7537",
  {
    props: {
      tooltip: figma.string("Tooltip"),
    },
    example: ({ tooltip }) => (
      <NavButton
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        }
        tooltip={tooltip}
      />
    ),
  }
);
