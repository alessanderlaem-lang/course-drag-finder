import * as React from "react";

import { cn } from "@/lib/utils";

interface FullBleedImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "width" | "height"> {
  /**
   * Expands the image horizontally to visually fill the screen,
   * cropping invisible side gutters from the asset.
   * Value is in % (e.g., 8 = expand ~16% total to compensate for 8% gutter each side).
   */
  cropXPercent?: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const FullBleedImage = ({
  cropXPercent = 0,
  className,
  style,
  ...props
}: FullBleedImageProps) => {
  // Simple image component - no transforms that distort the image
  return (
    <img
      {...props}
      className={cn("block w-full h-auto", className)}
      style={style}
    />
  );
};

export default FullBleedImage;
