import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-[1.75rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(30,22,17,0.82),rgba(17,13,11,0.92))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-md",
        className
      )}
    >
      {children}
    </div>
  );
}
