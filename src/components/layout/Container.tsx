import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Remove horizontal padding (full-bleed) */
  noPadding?: boolean;
  /** Maximum width variant */
  size?: "default" | "wide" | "full";
}

const Container = ({ 
  children, 
  className, 
  noPadding = false,
  size = "default" 
}: ContainerProps) => {
  const sizeClasses = {
    default: "max-w-6xl",
    wide: "max-w-7xl",
    full: "max-w-none"
  };

  return (
    <div
      className={cn(
        "mx-auto w-full",
        !noPadding && "px-4 md:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
