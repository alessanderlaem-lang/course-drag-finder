import * as React from "react";

import { cn } from "@/lib/utils";

interface FullBleedImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "width" | "height"> {
  /**
   * Crops only the left/right sides (in %) without affecting top/bottom.
   * Useful when the asset has invisible gutters.
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
  const crop = clamp(cropXPercent, 0, 20);

  return (
    <img
      {...props}
      className={cn("block w-full h-auto", className)}
      style={{
        ...style,
        clipPath: crop ? `inset(0 ${crop}% 0 ${crop}%)` : undefined,
      }}
    />
  );
};

export default FullBleedImage;
