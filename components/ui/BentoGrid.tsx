import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-2 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
    className={cn(
      "relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col items-start justify-end space-y-4",
      className
    )}
  >
    {/* Header takes up entire section */}
    <div className="absolute inset-0 w-full h-full p-3">{header}</div>
    
    {/* Content overlays the header */}
    <div className="relative z-10 ">
      <div className="font-sans font-bold text-neutral-950 text-3xl text-center  mb-2 mt-2">
        {title}
      </div>
      <div className="font-bold text-neutral-950 text-2xl  ml-5  ">
        {description}
      </div>
    </div>
  </div>
  
  );
};
