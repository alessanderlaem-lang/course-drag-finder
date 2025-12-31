import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** Vertical padding size */
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  /** HTML id for anchor links */
  id?: string;
}

const Section = ({ 
  children, 
  className, 
  spacing = "md",
  id 
}: SectionProps) => {
  const spacingClasses = {
    none: "",
    sm: "py-4 md:py-6",
    md: "py-8 md:py-12 lg:py-16",
    lg: "py-12 md:py-16 lg:py-24",
    xl: "py-16 md:py-24 lg:py-32"
  };

  return (
    <section
      id={id}
      className={cn(
        "w-full bg-background",
        spacingClasses[spacing],
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
