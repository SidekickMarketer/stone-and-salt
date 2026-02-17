import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({ 
  children, 
  className, 
  href, 
  variant = "primary", 
  size = "md", 
  ...props 
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-sun-ochre text-white hover:bg-sun-ochre-bright shadow-sm",
    secondary: "bg-eucalyptus text-white hover:bg-eucalyptus-light shadow-sm",
    outline: "border border-slate text-slate hover:bg-slate hover:text-white",
    ghost: "text-slate hover:bg-slate/10",
  };
  
  const sizes = {
    sm: "h-9 px-3 text-xs",
    md: "h-10 px-4 py-2 text-sm",
    lg: "h-12 px-8 text-base",
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href}>
        <a className={classes}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
