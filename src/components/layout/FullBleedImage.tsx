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
  const crop = clamp(cropXPercent, 0, 25);
  
  // Scale factor: if crop is 8%, we need to scale by 1/(1 - 0.16) ≈ 1.19
  // This makes the "visible" content fill 100% width
  const scaleFactor = crop > 0 ? 1 / (1 - (crop * 2) / 100) : 1;

  if (crop === 0) {
    return (
      <img
        {...props}
        className={cn("block w-full h-auto", className)}
        style={style}
      />
    );
  }

  return (
    <div className="w-full overflow-hidden">
      <img
        {...props}
        className={cn("block w-full h-auto", className)}
        style={{
          ...style,
          transform: `scaleX(${scaleFactor})`,
          transformOrigin: "center",
        }}
      />
    </div>
  );
};

export default FullBleedImage;
