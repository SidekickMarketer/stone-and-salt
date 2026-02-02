import Link from "next/link";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-sun-ochre text-white hover:bg-sun-ochre-bright hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] focus:ring-sun-ochre/50",
  secondary:
    "bg-slate text-white hover:bg-slate/90 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] focus:ring-slate/50",
  outline:
    "bg-transparent border-2 border-slate text-slate hover:bg-slate hover:text-white hover:scale-[1.02] active:scale-[0.98] focus:ring-slate/50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
    const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
      return (
        <Link href={href} className={styles}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={styles} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
