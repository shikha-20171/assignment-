import { cn } from "@/lib/utils";

interface InputProps {
  placeholder: string;
  className?: string;
  multiline?: boolean;
  type?: "text" | "email" | "password";
}

const inputClassName =
  "w-full rounded-[1.15rem] border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/20 hover:bg-white/7 focus:border-cyan-300/40 focus:bg-white/10";

export function Input({
  placeholder,
  className,
  multiline = false,
  type = "text"
}: InputProps) {
  if (multiline) {
    return (
      <textarea
        className={cn(inputClassName, "min-h-32 resize-none", className)}
        placeholder={placeholder}
      />
    );
  }

  return <input className={cn(inputClassName, className)} placeholder={placeholder} type={type} />;
}
