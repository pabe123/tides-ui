import figma from "@figma/code-connect";
import { VolumeMeter } from "./VolumeMeter";

/**
 * Code Connect for Volume Meter
 * Node: 593:826 (COMPONENT)
 */
figma.connect(
  VolumeMeter,
  "https://www.figma.com/design/wn1aKAukbTj44YhydxQPsP?node-id=593-826",
  {
    example: () => <VolumeMeter levelL={0.74} levelR={0.74} volume={0.87} />,
  }
);
